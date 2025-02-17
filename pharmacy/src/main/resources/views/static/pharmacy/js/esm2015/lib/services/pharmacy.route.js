import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { PharmacyService } from './pharmacy.service';
import { PharmacyDetailsComponent } from '../components/pharmacy-details.component';
import { PharmacyEditComponent } from '../components/pharmacy-edit.component';
let PharmacyResolve = class PharmacyResolve {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.findByUuid(id).pipe(filter((response) => response.ok), map((patient) => patient.body));
        }
        return of({});
    }
};
PharmacyResolve.ctorParameters = () => [
    { type: PharmacyService }
];
PharmacyResolve = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [PharmacyService])
], PharmacyResolve);
export { PharmacyResolve };
const ɵ0 = {
    title: 'Pharmacy Refill',
    breadcrumb: 'PHARMACY REFILL'
}, ɵ1 = {
    authorities: ['ROLE_USER'],
    title: 'Pharmacy Refill',
    breadcrumb: 'PHARMACY REFILL'
}, ɵ2 = {
    authorities: ['ROLE_DEC'],
    title: 'Pharmacy Refill',
    breadcrumb: 'ADD PHARMACY REFILL'
}, ɵ3 = {
    authorities: ['ROLE_DEC'],
    title: 'Pharmacy Refill Edit',
    breadcrumb: 'PHARMACY REFILL EDIT'
};
export const ROUTES = [
    {
        path: '',
        data: ɵ0,
        children: [
            {
                path: ':id/patient/:patientId/view',
                component: PharmacyDetailsComponent,
                resolve: {
                    entity: PharmacyResolve
                },
                data: ɵ1,
            },
            {
                path: 'patient/:patientId/new',
                component: PharmacyEditComponent,
                data: ɵ2,
            },
            {
                path: ':id/patient/:patientId/edit',
                component: PharmacyEditComponent,
                resolve: {
                    entity: PharmacyResolve
                },
                data: ɵ3,
            }
        ]
    }
];
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhhcm1hY3kucm91dGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYW1pcy1waGFybWFjeS0xLjEuNC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9waGFybWFjeS5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRzlFLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDeEIsWUFBb0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFDNUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQzdELE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRCxJQUFJLEVBQUUsRUFBRTtZQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsQ0FBQyxRQUFnQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQ3pELEdBQUcsQ0FBQyxDQUFDLE9BQStCLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDekQsQ0FBQztTQUNMO1FBQ0QsT0FBTyxFQUFFLENBQVcsRUFBRSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNKLENBQUE7O1lBYmdDLGVBQWU7O0FBRG5DLGVBQWU7SUFEM0IsVUFBVSxFQUFFOzZDQUVvQixlQUFlO0dBRG5DLGVBQWUsQ0FjM0I7U0FkWSxlQUFlO1dBbUJkO0lBQ0YsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixVQUFVLEVBQUUsaUJBQWlCO0NBQ2hDLE9BUWE7SUFDRixXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDMUIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixVQUFVLEVBQUUsaUJBQWlCO0NBQ2hDLE9BTUs7SUFDRixXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUM7SUFDekIsS0FBSyxFQUFFLGlCQUFpQjtJQUN4QixVQUFVLEVBQUUscUJBQXFCO0NBQ3BDLE9BU0s7SUFDRixXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUM7SUFDekIsS0FBSyxFQUFFLHNCQUFzQjtJQUM3QixVQUFVLEVBQUUsc0JBQXNCO0NBQ3JDO0FBekNqQixNQUFNLENBQUMsTUFBTSxNQUFNLEdBQVc7SUFDMUI7UUFDSSxJQUFJLEVBQUUsRUFBRTtRQUNSLElBQUksSUFHSDtRQUNELFFBQVEsRUFBRTtZQUNOO2dCQUNJLElBQUksRUFBRSw2QkFBNkI7Z0JBQ25DLFNBQVMsRUFBRSx3QkFBd0I7Z0JBQ25DLE9BQU8sRUFBRTtvQkFDTCxNQUFNLEVBQUUsZUFBZTtpQkFDMUI7Z0JBQ0QsSUFBSSxJQUlIO2FBRUo7WUFDRDtnQkFDSSxJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixTQUFTLEVBQUUscUJBQXFCO2dCQUNoQyxJQUFJLElBSUg7YUFFSjtZQUNEO2dCQUNJLElBQUksRUFBRSw2QkFBNkI7Z0JBQ25DLFNBQVMsRUFBRSxxQkFBcUI7Z0JBQ2hDLE9BQU8sRUFBRTtvQkFDTCxNQUFNLEVBQUUsZUFBZTtpQkFDMUI7Z0JBQ0QsSUFBSSxJQUlIO2FBRUo7U0FDSjtLQUNKO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJlc29sdmUsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQaGFybWFjeVNlcnZpY2UgfSBmcm9tICcuL3BoYXJtYWN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGhhcm1hY3kgfSBmcm9tICcuLi9tb2RlbC9waGFybWFjeS5tb2RlbCc7XG5pbXBvcnQgeyBQaGFybWFjeURldGFpbHNDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3BoYXJtYWN5LWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBoYXJtYWN5RWRpdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcGhhcm1hY3ktZWRpdC5jb21wb25lbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUGhhcm1hY3lSZXNvbHZlIGltcGxlbWVudHMgUmVzb2x2ZTxQaGFybWFjeT4ge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogUGhhcm1hY3lTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgcmVzb2x2ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPFBoYXJtYWN5PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGUucGFyYW1zWydpZCddID8gcm91dGUucGFyYW1zWydpZCddIDogbnVsbDtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmZpbmRCeVV1aWQoaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKChyZXNwb25zZTogSHR0cFJlc3BvbnNlPFBoYXJtYWN5PikgPT4gcmVzcG9uc2Uub2spLFxuICAgICAgICAgICAgICAgIG1hcCgocGF0aWVudDogSHR0cFJlc3BvbnNlPFBoYXJtYWN5PikgPT4gcGF0aWVudC5ib2R5KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2YoPFBoYXJtYWN5Pnt9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBST1VURVM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1BoYXJtYWN5IFJlZmlsbCcsXG4gICAgICAgICAgICBicmVhZGNydW1iOiAnUEhBUk1BQ1kgUkVGSUxMJ1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICc6aWQvcGF0aWVudC86cGF0aWVudElkL3ZpZXcnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUGhhcm1hY3lEZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBQaGFybWFjeVJlc29sdmVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9VU0VSJ10sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUGhhcm1hY3kgUmVmaWxsJyxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWRjcnVtYjogJ1BIQVJNQUNZIFJFRklMTCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAncGF0aWVudC86cGF0aWVudElkL25ldycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBQaGFybWFjeUVkaXRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhdXRob3JpdGllczogWydST0xFX0RFQyddLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BoYXJtYWN5IFJlZmlsbCcsXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWI6ICdBREQgUEhBUk1BQ1kgUkVGSUxMJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9jYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICc6aWQvcGF0aWVudC86cGF0aWVudElkL2VkaXQnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogUGhhcm1hY3lFZGl0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHJlc29sdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgZW50aXR5OiBQaGFybWFjeVJlc29sdmVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9ERUMnXSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQaGFybWFjeSBSZWZpbGwgRWRpdCcsXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWI6ICdQSEFSTUFDWSBSRUZJTEwgRURJVCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vY2FuQWN0aXZhdGU6IFtVc2VyUm91dGVBY2Nlc3NTZXJ2aWNlXVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuIl19