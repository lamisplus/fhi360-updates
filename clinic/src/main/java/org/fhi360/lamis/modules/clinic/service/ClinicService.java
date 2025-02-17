package org.fhi360.lamis.modules.clinic.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.fhi360.lamis.modules.clinic.web.rest.vm.ClinicVM;
import org.lamisplus.modules.lamis.legacy.domain.entities.*;
import org.lamisplus.modules.lamis.legacy.domain.entities.enumerations.ClientStatus;
import org.lamisplus.modules.lamis.legacy.domain.repositories.*;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class ClinicService {
    private final ClinicRepository clinicRepository;
    private final PatientRepository patientRepository;
    private final StatusHistoryRepository statusHistoryRepository;
    private final ClinicOpportunisticInfectionRepository clinicOpportunisticInfectionRepository;
    private final ClinicAdhereRepository clinicAdhereRepository;
    private final AdhereRepository adhereRepository;
    private final OpportunisticInfectionRepository opportunisticInfectionRepository;
    private final DevolveRepository devolveRepository;
    private final JdbcTemplate jdbcTemplate;

    public Clinic saveClinic(ClinicVM vm) {
        Clinic clinic = vm.getClinic();
        if (clinic.getCommence() != null && clinic.getCommence()) {
            patientRepository.findById(clinic.getPatient().getId()).ifPresent(patient -> {
                patient.setDateStarted(clinic.getDateVisit());
                patientRepository.save(patient);

                StatusHistory history = new StatusHistory();
                history.setFacility(patient.getFacility());
                history.setPatient(patient);
                history.setStatus(ClientStatus.ART_START);
                history.setDateStatus(clinic.getDateVisit());
            });
        }

        List<OpportunisticInfection> infections;
        List<Adhere> adheres;
        if (!clinic.isNew()) {
            infections = clinicOpportunisticInfectionRepository.findByClinic(clinic).stream()
                    .map(ClinicOpportunisticInfection::getOpportunisticInfection)
                    .filter(i -> vm.getOiList().contains(i))
                    .collect(Collectors.toList());
            clinic.getOpportunisticInfections().clear();
            clinic.getOpportunisticInfections().addAll(infections);

            adheres = clinicAdhereRepository.findByClinic(clinic).stream()
                    .map(ClinicAdhere::getAdhere)
                    .filter(ca -> vm.getAdhereList().contains(ca))
                    .collect(Collectors.toList());
            clinic.getAdheres().clear();
            clinic.getAdheres().addAll(adheres);
        }

        if (vm.getOiList() != null) {
            vm.getOiList().forEach(oi -> {
                if (oi != null && oi.getId() != null) {
                    opportunisticInfectionRepository.findById(oi.getId())
                            .ifPresent(o -> clinic.getOpportunisticInfections().add(o));
                }
            });
        }
        if (vm.getAdhereList() != null) {
            vm.getAdhereList().forEach(adhere -> {
                if (adhere != null && adhere.getId() != null) {
                    adhereRepository.findById(adhere.getId())
                            .ifPresent(a -> clinic.getAdheres().add(a));
                }
            });
        }
        if (vm.getAdrList() != null) {
            List<ClinicAdverseDrugReaction> cadr = vm.getAdrList().stream()
                    .map(ca -> {
                        ca.setClinic(clinic);
                        return ca;
                    })
                    .collect(Collectors.toList());
            clinic.getClinicAdverseDrugReactions().addAll(cadr);
        }

        return clinicRepository.save(clinic);
    }

    public void deleteClinic(String clinicId) {
        clinicRepository.findByUuid(clinicId).ifPresent(clinic -> deleteClinic(clinic.getId()));
    }

    public void deleteClinic(Long clinicId) {
        clinicRepository.findById(clinicId).ifPresent(clinic -> {
            Patient patient = clinic.getPatient();
            devolveRepository.findByPatient(patient)
                    .forEach(devolve -> {
                        if (devolve.getRelatedClinic() != null && Objects.equals(clinicId, devolve.getRelatedClinic().getId())) {
                            devolve.setRelatedClinic(null);
                            devolveRepository.save(devolve);
                        }
                    });
            if (clinic.getCommence() != null && clinic.getCommence()
                    && patient.getDateStarted().equals(clinic.getDateVisit())) {
                patient.setDateStarted(null);
                patientRepository.save(patient);
                statusHistoryRepository.findByPatient(patient).stream()
                        .filter(s -> s.getStatus().equals(ClientStatus.ART_START))
                        .forEach(statusHistoryRepository::delete);
            }
            clinicRepository.delete(clinic);
        });
    }

    public Boolean enrolledOnOTZ(Long patientId) {
        try {
            Boolean enrolled = jdbcTemplate.queryForObject("select (extra->'otz'->>'enrolledOnOTZ')::boolean from clinic where " +
                    "patient_id = ? and commence = true", Boolean.class, patientId);
            return enrolled != null ? enrolled : false;
        } catch (Exception e) {
            return false;
        }
    }
}
