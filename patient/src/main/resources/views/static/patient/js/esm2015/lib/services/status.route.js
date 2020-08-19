import * as tslib_1 from "tslib";
import { ClientStatusComponent } from '../components/client-status.component';
import { PatientService } from './patient.service';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
let StatusResolve = class StatusResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.findClientStatus(id).pipe(filter((response) => response.ok), map((patient) => patient.body));
        }
        return of({});
    }
};
StatusResolve.ctorParameters = () => [
    { type: PatientService }
];
StatusResolve = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [PatientService])
], StatusResolve);
export { StatusResolve };
const ɵ0 = {
    title: 'Clinic Visit',
    breadcrumb: 'CLINIC VISIT'
}, ɵ1 = {
    authorities: ['ROLE_DEC'],
    title: 'Update Client Status',
    breadcrumb: 'UPDATE CLIENT STATUS'
}, ɵ2 = {
    authorities: ['ROLE_DEC'],
    title: 'Client Status Edit',
    breadcrumb: 'CLIENT STATUS EDIT'
};
export const ROUTES = [
    {
        path: '',
        data: ɵ0,
        children: [
            {
                path: 'patient/:patientId/new',
                component: ClientStatusComponent,
                data: ɵ1,
            },
            {
                path: ':id/patient/:patientId/edit',
                component: ClientStatusComponent,
                resolve: {
                    entity: StatusResolve
                },
                data: ɵ2,
            }
        ]
    }
];
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLnJvdXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGFtaXMtcGF0aWVudC0xLjMuMC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zdGF0dXMucm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk3QyxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBQ3RCLFlBQW9CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQzNDLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBNkIsRUFBRSxLQUEwQjtRQUM3RCxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDMUQsSUFBSSxFQUFFLEVBQUU7WUFDSixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUN6QyxNQUFNLENBQUMsQ0FBQyxRQUFxQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQzlELEdBQUcsQ0FBQyxDQUFDLE9BQW9DLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDOUQsQ0FBQztTQUNMO1FBQ0QsT0FBTyxFQUFFLENBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Q0FDSixDQUFBOztZQWJnQyxjQUFjOztBQURsQyxhQUFhO0lBRHpCLFVBQVUsRUFBRTs2Q0FFb0IsY0FBYztHQURsQyxhQUFhLENBY3pCO1NBZFksYUFBYTtXQW1CWjtJQUNGLEtBQUssRUFBRSxjQUFjO0lBQ3JCLFVBQVUsRUFBRSxjQUFjO0NBQzdCLE9BS2E7SUFDRixXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUM7SUFDekIsS0FBSyxFQUFFLHNCQUFzQjtJQUM3QixVQUFVLEVBQUUsc0JBQXNCO0NBQ3JDLE9BU0s7SUFDRixXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUM7SUFDekIsS0FBSyxFQUFFLG9CQUFvQjtJQUMzQixVQUFVLEVBQUUsb0JBQW9CO0NBQ25DO0FBNUJqQixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQVc7SUFDMUI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksSUFHSDtRQUNELFFBQVEsRUFBRTtZQUNOO2dCQUNJLElBQUksRUFBRSx3QkFBd0I7Z0JBQzlCLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDLElBQUksSUFJSDthQUVKO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLDZCQUE2QjtnQkFDbkMsU0FBUyxFQUFFLHFCQUFxQjtnQkFDaEMsT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxhQUFhO2lCQUN4QjtnQkFDRCxJQUFJLElBSUg7YUFFSjtTQUNKO0tBQ0o7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50U3RhdHVzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jbGllbnQtc3RhdHVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RhdHVzSGlzdG9yeSB9IGZyb20gJy4uL21vZGVsL3BhdGllbnQubW9kZWwnO1xuaW1wb3J0IHsgUGF0aWVudFNlcnZpY2UgfSBmcm9tICcuL3BhdGllbnQuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0dXNSZXNvbHZlIGltcGxlbWVudHMgUmVzb2x2ZTxTdGF0dXNIaXN0b3J5PiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBQYXRpZW50U2VydmljZSkge1xuICAgIH1cblxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxTdGF0dXNIaXN0b3J5PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGUucGFyYW1zWydpZCddID8gcm91dGUucGFyYW1zWydpZCddIDogbnVsbDtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmZpbmRDbGllbnRTdGF0dXMoaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKChyZXNwb25zZTogSHR0cFJlc3BvbnNlPFN0YXR1c0hpc3Rvcnk+KSA9PiByZXNwb25zZS5vayksXG4gICAgICAgICAgICAgICAgbWFwKChwYXRpZW50OiBIdHRwUmVzcG9uc2U8U3RhdHVzSGlzdG9yeT4pID0+IHBhdGllbnQuYm9keSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKDxTdGF0dXNIaXN0b3J5Pnt9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBST1VURVM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NsaW5pYyBWaXNpdCcsXG4gICAgICAgICAgICBicmVhZGNydW1iOiAnQ0xJTklDIFZJU0lUJ1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdwYXRpZW50LzpwYXRpZW50SWQvbmV3JyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IENsaWVudFN0YXR1c0NvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfREVDJ10sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVXBkYXRlIENsaWVudCBTdGF0dXMnLFxuICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1iOiAnVVBEQVRFIENMSUVOVCBTVEFUVVMnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL2NhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJzppZC9wYXRpZW50LzpwYXRpZW50SWQvZWRpdCcsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDbGllbnRTdGF0dXNDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IFN0YXR1c1Jlc29sdmVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9ERUMnXSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDbGllbnQgU3RhdHVzIEVkaXQnLFxuICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1iOiAnQ0xJRU5UIFNUQVRVUyBFRElUJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9jYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9XG5dO1xuIl19