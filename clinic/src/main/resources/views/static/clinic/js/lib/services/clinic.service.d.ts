import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerApiUrlConfig } from '@lamis/web-core';
import { Clinic, ClinicAdhere, ClinicAdverseDrugReaction, ClinicOpportunisticInfection, ClinicVm, Patient } from '../model/clinic.model';
import * as moment_ from 'moment';
declare type EntityResponseType = HttpResponse<Clinic>;
declare type EntityArrayResponseType = HttpResponse<Clinic[]>;
export declare class ClinicService {
    protected http: HttpClient;
    private serverUrl;
    resourceUrl: string;
    constructor(http: HttpClient, serverUrl: ServerApiUrlConfig);
    create(vm: ClinicVm): Observable<EntityResponseType>;
    update(vm: ClinicVm): Observable<EntityResponseType>;
    find(id: number): Observable<EntityResponseType>;
    findByUuid(id: string): Observable<EntityResponseType>;
    delete(id: number): Observable<HttpResponse<any>>;
    getVisitDatesByPatient(patientId: number): Observable<moment_.Moment[]>;
    getPatient(id: any): Observable<Patient>;
    getRegimenLines(): Observable<any[]>;
    getRegimenByLine(id: any): Observable<any[]>;
    adverseDrugReactions(): Observable<any[]>;
    opportunisticInfections(): Observable<any[]>;
    adheres(): Observable<any[]>;
    regimes(regimenType: number): Observable<Object>;
    latestVisit(patientId: number): Observable<Clinic>;
    getOpportunisticInfectionsByClinic(clinicId: number): Observable<ClinicOpportunisticInfection[]>;
    getAdverseDrugReactionsByClinic(clinicId: number): Observable<HttpResponse<ClinicAdverseDrugReaction[]>>;
    getAdhereByClinic(clinicId: number): Observable<ClinicAdhere[]>;
    enrolledOnOTZ(id: number): Observable<boolean>;
    protected convertDateFromClient(clinic: Clinic): Clinic;
    protected convertDateFromServer(res: EntityResponseType): EntityResponseType;
    protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType;
}
export {};
