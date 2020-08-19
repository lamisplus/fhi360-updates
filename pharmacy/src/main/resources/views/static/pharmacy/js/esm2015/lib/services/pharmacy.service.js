import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { DATE_FORMAT, SERVER_API_URL_CONFIG } from '@lamis/web-core';
import { map } from 'rxjs/operators';
import * as moment_ from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@lamis/web-core";
const moment = moment_;
let PharmacyService = class PharmacyService {
    constructor(http, serverUrl) {
        this.http = http;
        this.serverUrl = serverUrl;
        this.resourceUrl = '';
        this.resourceUrl = serverUrl.SERVER_API_URL + '/api/pharmacies';
    }
    create(pharmacy) {
        const copy = this.convertDateFromClient(pharmacy);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res) => this.convertDateFromServer(res)));
    }
    update(pharmacy) {
        const copy = this.convertDateFromClient(pharmacy);
        return this.http
            .put(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res) => this.convertDateFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res) => this.convertDateFromServer(res)));
    }
    findByUuid(id) {
        return this.http
            .get(`${this.resourceUrl}/by-uuid/${id}`, { observe: 'response' })
            .pipe(map((res) => this.convertDateFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getPatient(id) {
        return this.http.get(`/api/patients/by-uuid/${id}`, { observe: 'body' })
            .pipe(map((res) => {
            if (res) {
                res.dateRegistration = res.dateRegistration != null ? moment(res.dateRegistration) : null;
            }
            return res;
        }));
    }
    getVisitDatesByPatient(patientId) {
        return this.http.get(`${this.resourceUrl}/patient/${patientId}/visit-dates`)
            .pipe(map((res) => {
            res.forEach(d => moment(d));
            return res;
        }));
    }
    regimenTypes() {
        return this.http.get(`${this.resourceUrl}/regimen-types`);
    }
    regimenInfo(patientId) {
        return this.http.get(`${this.resourceUrl}/regimen-info/patient/${patientId}`);
    }
    adrs() {
        return this.http.get(`${this.resourceUrl}/adrs`);
    }
    getLinesByPharmacy(pharmacyId) {
        return this.http.get(`${this.resourceUrl}/${pharmacyId}/lines`);
    }
    regimesByRegimenType(id) {
        return this.http.get(`${this.resourceUrl}/regimens/regimen-type/${id}`);
    }
    getDrugsByRegimen(id) {
        return this.http.get(`${this.resourceUrl}/drugs/regimen/${id}`);
    }
    getRegimenById(id) {
        return this.http.get(`${this.resourceUrl}/regimen/${id}`);
    }
    latestVisit(patientId) {
        return this.http.get(`${this.resourceUrl}/patient/${patientId}/latest`);
    }
    getDevolvement(patientId, date) {
        const d = date.format(DATE_FORMAT);
        return this.http.get(`${this.resourceUrl}/patient/${patientId}/devolvement/at/${d}`)
            .pipe(map(res => {
            res.dateDevolved = res.dateDevolved != null ? moment(res.dateDevolved) : null;
            res.dateReturnedToFacility = res.dateReturnedToFacility != null ? moment(res.dateReturnedToFacility) : null;
            res.dateNextClinic = res.dateNextClinic != null ? moment(res.dateNextClinic) : null;
            res.dateNextRefill = res.dateNextRefill != null ? moment(res.dateNextRefill) : null;
            return res;
        }));
    }
    convertDateFromClient(pharmacy) {
        const copy = Object.assign({}, pharmacy, {
            dateVisit: pharmacy.dateVisit != null && pharmacy.dateVisit.isValid() ? pharmacy.dateVisit.format(DATE_FORMAT) : null,
            nextAppointment: pharmacy.nextAppointment != null && pharmacy.nextAppointment.isValid() ? pharmacy.nextAppointment.format(DATE_FORMAT) : null
        });
        return copy;
    }
    convertDateFromServer(res) {
        if (res.body) {
            res.body.nextAppointment = res.body.nextAppointment != null ? moment(res.body.nextAppointment) : null;
            res.body.dateVisit = res.body.dateVisit != null ? moment(res.body.dateVisit) : null;
        }
        return res;
    }
    convertDateArrayFromServer(res) {
        if (res.body) {
            res.body.forEach((pharmacy) => {
                pharmacy.dateVisit = pharmacy.dateVisit != null ? moment(pharmacy.dateVisit) : null;
                pharmacy.nextAppointment = pharmacy.nextAppointment != null ? moment(pharmacy.nextAppointment) : null;
                1;
            });
        }
        return res;
    }
};
PharmacyService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [SERVER_API_URL_CONFIG,] }] }
];
PharmacyService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PharmacyService_Factory() { return new PharmacyService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.SERVER_API_URL_CONFIG)); }, token: PharmacyService, providedIn: "root" });
PharmacyService = tslib_1.__decorate([
    Injectable({ providedIn: 'root' }),
    tslib_1.__param(1, Inject(SERVER_API_URL_CONFIG)),
    tslib_1.__metadata("design:paramtypes", [HttpClient, Object])
], PharmacyService);
export { PharmacyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhhcm1hY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbWlzLXBoYXJtYWN5LTEuMS40LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3BoYXJtYWN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBc0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFZckMsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7Ozs7QUFHbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBTXZCLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFHeEIsWUFBc0IsSUFBZ0IsRUFBeUMsU0FBNkI7UUFBdEYsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUF5QyxjQUFTLEdBQVQsU0FBUyxDQUFvQjtRQUZyRyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUdwQixJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxjQUFjLEdBQUcsaUJBQWlCLENBQUM7SUFDcEUsQ0FBQztJQUVELE1BQU0sQ0FBQyxRQUFrQjtRQUNyQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBVyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQzthQUM3RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBdUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FB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R0FBRyxDQUFDO0lBQ2YsQ0FBQztDQUNKLENBQUE7O1lBNUgrQixVQUFVOzRDQUFHLE1BQU0sU0FBQyxxQkFBcUI7OztBQUg1RCxlQUFlO0lBRDNCLFVBQVUsQ0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUMsQ0FBQztJQUlZLG1CQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBOzZDQUExQyxVQUFVO0dBSDdCLGVBQWUsQ0ErSDNCO1NBL0hZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IERBVEVfRk9STUFULCBTRVJWRVJfQVBJX1VSTF9DT05GSUcsIFNlcnZlckFwaVVybENvbmZpZyB9IGZyb20gJ0BsYW1pcy93ZWItY29yZSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICAgIEFkcixcbiAgICBEZXZvbHZlLFxuICAgIERydWdEVE8sXG4gICAgUGF0aWVudCxcbiAgICBQaGFybWFjeSxcbiAgICBQaGFybWFjeUxpbmUsXG4gICAgUmVnaW1lbixcbiAgICBSZWdpbWVuSW5mbyxcbiAgICBSZWdpbWVuVHlwZVxufSBmcm9tICcuLi9tb2RlbC9waGFybWFjeS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBNb21lbnQgfSBmcm9tICdtb21lbnQnO1xuXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG50eXBlIEVudGl0eVJlc3BvbnNlVHlwZSA9IEh0dHBSZXNwb25zZTxQaGFybWFjeT47XG50eXBlIEVudGl0eUFycmF5UmVzcG9uc2VUeXBlID0gSHR0cFJlc3BvbnNlPFBoYXJtYWN5W10+O1xuXG5ASW5qZWN0YWJsZSh7cHJvdmlkZWRJbjogJ3Jvb3QnfSlcbmV4cG9ydCBjbGFzcyBQaGFybWFjeVNlcnZpY2Uge1xuICAgIHB1YmxpYyByZXNvdXJjZVVybCA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoU0VSVkVSX0FQSV9VUkxfQ09ORklHKSBwcml2YXRlIHNlcnZlclVybDogU2VydmVyQXBpVXJsQ29uZmlnKSB7XG4gICAgICAgIHRoaXMucmVzb3VyY2VVcmwgPSBzZXJ2ZXJVcmwuU0VSVkVSX0FQSV9VUkwgKyAnL2FwaS9waGFybWFjaWVzJztcbiAgICB9XG5cbiAgICBjcmVhdGUocGhhcm1hY3k6IFBoYXJtYWN5KTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydERhdGVGcm9tQ2xpZW50KHBoYXJtYWN5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnBvc3Q8UGhhcm1hY3k+KHRoaXMucmVzb3VyY2VVcmwsIGNvcHksIHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcbiAgICAgICAgICAgIC5waXBlKG1hcCgocmVzOiBFbnRpdHlSZXNwb25zZVR5cGUpID0+IHRoaXMuY29udmVydERhdGVGcm9tU2VydmVyKHJlcykpKTtcbiAgICB9XG5cbiAgICB1cGRhdGUocGhhcm1hY3k6IFBoYXJtYWN5KTogT2JzZXJ2YWJsZTxFbnRpdHlSZXNwb25zZVR5cGU+IHtcbiAgICAgICAgY29uc3QgY29weSA9IHRoaXMuY29udmVydERhdGVGcm9tQ2xpZW50KHBoYXJtYWN5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnB1dDxQaGFybWFjeT4odGhpcy5yZXNvdXJjZVVybCwgY29weSwge29ic2VydmU6ICdyZXNwb25zZSd9KVxuICAgICAgICAgICAgLnBpcGUobWFwKChyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSkgPT4gdGhpcy5jb252ZXJ0RGF0ZUZyb21TZXJ2ZXIocmVzKSkpO1xuICAgIH1cblxuICAgIGZpbmQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5nZXQ8UGhhcm1hY3k+KGAke3RoaXMucmVzb3VyY2VVcmx9LyR7aWR9YCwge29ic2VydmU6ICdyZXNwb25zZSd9KVxuICAgICAgICAgICAgLnBpcGUobWFwKChyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSkgPT4gdGhpcy5jb252ZXJ0RGF0ZUZyb21TZXJ2ZXIocmVzKSkpO1xuICAgIH1cblxuICAgIGZpbmRCeVV1aWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8RW50aXR5UmVzcG9uc2VUeXBlPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgICAgIC5nZXQ8UGhhcm1hY3k+KGAke3RoaXMucmVzb3VyY2VVcmx9L2J5LXV1aWQvJHtpZH1gLCB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pXG4gICAgICAgICAgICAucGlwZShtYXAoKHJlczogRW50aXR5UmVzcG9uc2VUeXBlKSA9PiB0aGlzLmNvbnZlcnREYXRlRnJvbVNlcnZlcihyZXMpKSk7XG4gICAgfVxuXG5cbiAgICBkZWxldGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLnJlc291cmNlVXJsfS8ke2lkfWAsIHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aWVudChpZDogYW55KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBhdGllbnQ+KGAvYXBpL3BhdGllbnRzL2J5LXV1aWQvJHtpZH1gLCB7b2JzZXJ2ZTogJ2JvZHknfSlcbiAgICAgICAgICAgIC5waXBlKG1hcCgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgICAgICByZXMuZGF0ZVJlZ2lzdHJhdGlvbiA9IHJlcy5kYXRlUmVnaXN0cmF0aW9uICE9IG51bGwgPyBtb21lbnQocmVzLmRhdGVSZWdpc3RyYXRpb24pIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgZ2V0VmlzaXREYXRlc0J5UGF0aWVudChwYXRpZW50SWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxNb21lbnRbXT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vcGF0aWVudC8ke3BhdGllbnRJZH0vdmlzaXQtZGF0ZXNgKVxuICAgICAgICAgICAgLnBpcGUobWFwKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzLmZvckVhY2goZCA9PiBtb21lbnQoZCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgcmVnaW1lblR5cGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSZWdpbWVuVHlwZVtdPihgJHt0aGlzLnJlc291cmNlVXJsfS9yZWdpbWVuLXR5cGVzYClcbiAgICB9XG5cbiAgICByZWdpbWVuSW5mbyhwYXRpZW50SWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSZWdpbWVuSW5mbz4oYCR7dGhpcy5yZXNvdXJjZVVybH0vcmVnaW1lbi1pbmZvL3BhdGllbnQvJHtwYXRpZW50SWR9YClcbiAgICB9XG5cbiAgICBhZHJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxBZHJbXT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vYWRyc2ApXG4gICAgfVxuXG4gICAgZ2V0TGluZXNCeVBoYXJtYWN5KHBoYXJtYWN5SWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxQaGFybWFjeUxpbmVbXT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtwaGFybWFjeUlkfS9saW5lc2ApXG4gICAgfVxuXG4gICAgcmVnaW1lc0J5UmVnaW1lblR5cGUoaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxSZWdpbWVuW10+KGAke3RoaXMucmVzb3VyY2VVcmx9L3JlZ2ltZW5zL3JlZ2ltZW4tdHlwZS8ke2lkfWApXG4gICAgfVxuXG4gICAgZ2V0RHJ1Z3NCeVJlZ2ltZW4oaWQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxEcnVnRFRPW10+KGAke3RoaXMucmVzb3VyY2VVcmx9L2RydWdzL3JlZ2ltZW4vJHtpZH1gKVxuICAgIH1cblxuICAgIGdldFJlZ2ltZW5CeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFJlZ2ltZW4+KGAke3RoaXMucmVzb3VyY2VVcmx9L3JlZ2ltZW4vJHtpZH1gKVxuICAgIH1cblxuICAgIGxhdGVzdFZpc2l0KHBhdGllbnRJZDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PFBoYXJtYWN5PihgJHt0aGlzLnJlc291cmNlVXJsfS9wYXRpZW50LyR7cGF0aWVudElkfS9sYXRlc3RgKVxuICAgIH1cblxuICAgIGdldERldm9sdmVtZW50KHBhdGllbnRJZDogbnVtYmVyLCBkYXRlOiBNb21lbnQpIHtcbiAgICAgICAgY29uc3QgZCA9IGRhdGUuZm9ybWF0KERBVEVfRk9STUFUKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8RGV2b2x2ZT4oYCR7dGhpcy5yZXNvdXJjZVVybH0vcGF0aWVudC8ke3BhdGllbnRJZH0vZGV2b2x2ZW1lbnQvYXQvJHtkfWApXG4gICAgICAgICAgICAucGlwZShtYXAocmVzID0+IHtcbiAgICAgICAgICAgICAgICByZXMuZGF0ZURldm9sdmVkID0gcmVzLmRhdGVEZXZvbHZlZCAhPSBudWxsID8gbW9tZW50KHJlcy5kYXRlRGV2b2x2ZWQpIDogbnVsbDtcbiAgICAgICAgICAgICAgICByZXMuZGF0ZVJldHVybmVkVG9GYWNpbGl0eSA9IHJlcy5kYXRlUmV0dXJuZWRUb0ZhY2lsaXR5ICE9IG51bGwgPyBtb21lbnQocmVzLmRhdGVSZXR1cm5lZFRvRmFjaWxpdHkpIDogbnVsbDtcbiAgICAgICAgICAgICAgICByZXMuZGF0ZU5leHRDbGluaWMgPSByZXMuZGF0ZU5leHRDbGluaWMgIT0gbnVsbCA/IG1vbWVudChyZXMuZGF0ZU5leHRDbGluaWMpIDogbnVsbDtcbiAgICAgICAgICAgICAgICByZXMuZGF0ZU5leHRSZWZpbGwgPSByZXMuZGF0ZU5leHRSZWZpbGwgIT0gbnVsbCA/IG1vbWVudChyZXMuZGF0ZU5leHRSZWZpbGwpIDogbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSkpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbnZlcnREYXRlRnJvbUNsaWVudChwaGFybWFjeTogUGhhcm1hY3kpOiBQaGFybWFjeSB7XG4gICAgICAgIGNvbnN0IGNvcHk6IFBoYXJtYWN5ID0gT2JqZWN0LmFzc2lnbih7fSwgcGhhcm1hY3ksIHtcbiAgICAgICAgICAgIGRhdGVWaXNpdDogcGhhcm1hY3kuZGF0ZVZpc2l0ICE9IG51bGwgJiYgcGhhcm1hY3kuZGF0ZVZpc2l0LmlzVmFsaWQoKSA/IHBoYXJtYWN5LmRhdGVWaXNpdC5mb3JtYXQoREFURV9GT1JNQVQpIDogbnVsbCxcbiAgICAgICAgICAgIG5leHRBcHBvaW50bWVudDogcGhhcm1hY3kubmV4dEFwcG9pbnRtZW50ICE9IG51bGwgJiYgcGhhcm1hY3kubmV4dEFwcG9pbnRtZW50LmlzVmFsaWQoKSA/IHBoYXJtYWN5Lm5leHRBcHBvaW50bWVudC5mb3JtYXQoREFURV9GT1JNQVQpIDogbnVsbFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNvbnZlcnREYXRlRnJvbVNlcnZlcihyZXM6IEVudGl0eVJlc3BvbnNlVHlwZSk6IEVudGl0eVJlc3BvbnNlVHlwZSB7XG4gICAgICAgIGlmIChyZXMuYm9keSkge1xuICAgICAgICAgICAgcmVzLmJvZHkubmV4dEFwcG9pbnRtZW50ID0gcmVzLmJvZHkubmV4dEFwcG9pbnRtZW50ICE9IG51bGwgPyBtb21lbnQocmVzLmJvZHkubmV4dEFwcG9pbnRtZW50KSA6IG51bGw7XG4gICAgICAgICAgICByZXMuYm9keS5kYXRlVmlzaXQgPSByZXMuYm9keS5kYXRlVmlzaXQgIT0gbnVsbCA/IG1vbWVudChyZXMuYm9keS5kYXRlVmlzaXQpIDogbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjb252ZXJ0RGF0ZUFycmF5RnJvbVNlcnZlcihyZXM6IEVudGl0eUFycmF5UmVzcG9uc2VUeXBlKTogRW50aXR5QXJyYXlSZXNwb25zZVR5cGUge1xuICAgICAgICBpZiAocmVzLmJvZHkpIHtcbiAgICAgICAgICAgIHJlcy5ib2R5LmZvckVhY2goKHBoYXJtYWN5OiBQaGFybWFjeSkgPT4ge1xuICAgICAgICAgICAgICAgIHBoYXJtYWN5LmRhdGVWaXNpdCA9IHBoYXJtYWN5LmRhdGVWaXNpdCAhPSBudWxsID8gbW9tZW50KHBoYXJtYWN5LmRhdGVWaXNpdCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIHBoYXJtYWN5Lm5leHRBcHBvaW50bWVudCA9IHBoYXJtYWN5Lm5leHRBcHBvaW50bWVudCAhPSBudWxsID8gbW9tZW50KHBoYXJtYWN5Lm5leHRBcHBvaW50bWVudCkgOiBudWxsO1xuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufVxuIl19