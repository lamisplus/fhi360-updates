import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { LaboratoryService } from './laboratory.service';
import { LaboratoryDetailsComponent } from '../components/laboratory-details.component';
import { LaboratoryEditComponent } from '../components/laboratory-edit.component';
let LaboratoryResolve = class LaboratoryResolve {
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
LaboratoryResolve.ctorParameters = () => [
    { type: LaboratoryService }
];
LaboratoryResolve = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [LaboratoryService])
], LaboratoryResolve);
export { LaboratoryResolve };
const ɵ0 = {
    title: 'Laboratory Request',
    breadcrumb: 'LABORATORY REQUEST'
}, ɵ1 = {
    authorities: ['ROLE_USER'],
    title: 'Laboratory Request',
    breadcrumb: 'LABORATORY REQUEST'
}, ɵ2 = {
    authorities: ['ROLE_DEC'],
    title: 'LABORATORY REQUEST',
    breadcrumb: 'ADD LABORATORY REQUEST'
}, ɵ3 = {
    authorities: ['ROLE_DEC'],
    title: 'Laboratory Request Edit',
    breadcrumb: 'LABORATORY REQUEST EDIT'
};
export const ROUTES = [
    {
        path: '',
        data: ɵ0,
        children: [
            {
                path: ':id/patient/:patientId/view',
                component: LaboratoryDetailsComponent,
                resolve: {
                    entity: LaboratoryResolve
                },
                data: ɵ1,
            },
            {
                path: 'patient/:patientId/new',
                component: LaboratoryEditComponent,
                data: ɵ2,
            },
            {
                path: ':id/patient/:patientId/edit',
                component: LaboratoryEditComponent,
                resolve: {
                    entity: LaboratoryResolve
                },
                data: ɵ3,
            }
        ]
    }
];
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFib3JhdG9yeS5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbWlzLWxhYm9yYXRvcnktMS4xLjQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbGFib3JhdG9yeS5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHbEYsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFDMUIsWUFBb0IsT0FBMEI7UUFBMUIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7SUFDOUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQzdELE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRCxJQUFJLEVBQUUsRUFBRTtZQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsQ0FBQyxRQUFrQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQzNELEdBQUcsQ0FBQyxDQUFDLE9BQWlDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDM0QsQ0FBQztTQUNMO1FBQ0QsT0FBTyxFQUFFLENBQWEsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKLENBQUE7O1lBYmdDLGlCQUFpQjs7QUFEckMsaUJBQWlCO0lBRDdCLFVBQVUsRUFBRTs2Q0FFb0IsaUJBQWlCO0dBRHJDLGlCQUFpQixDQWM3QjtTQWRZLGlCQUFpQjtXQW1CaEI7SUFDRixLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLFVBQVUsRUFBRSxvQkFBb0I7Q0FDbkMsT0FRYTtJQUNGLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUMxQixLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLFVBQVUsRUFBRSxvQkFBb0I7Q0FDbkMsT0FNSztJQUNGLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN6QixLQUFLLEVBQUUsb0JBQW9CO0lBQzNCLFVBQVUsRUFBRSx3QkFBd0I7Q0FDdkMsT0FTSztJQUNGLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN6QixLQUFLLEVBQUUseUJBQXlCO0lBQ2hDLFVBQVUsRUFBRSx5QkFBeUI7Q0FDeEM7QUF6Q2pCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBVztJQUMxQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxJQUdIO1FBQ0QsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLDZCQUE2QjtnQkFDbkMsU0FBUyxFQUFFLDBCQUEwQjtnQkFDckMsT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxpQkFBaUI7aUJBQzVCO2dCQUNELElBQUksSUFJSDthQUVKO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsU0FBUyxFQUFFLHVCQUF1QjtnQkFDbEMsSUFBSSxJQUlIO2FBRUo7WUFDRDtnQkFDSSxJQUFJLEVBQUUsNkJBQTZCO2dCQUNuQyxTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxPQUFPLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLGlCQUFpQjtpQkFDNUI7Z0JBQ0QsSUFBSSxJQUlIO2FBRUo7U0FDSjtLQUNKO0NBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJlc29sdmUsIFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYWJvcmF0b3J5U2VydmljZSB9IGZyb20gJy4vbGFib3JhdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IExhYm9yYXRvcnkgfSBmcm9tICcuLi9tb2RlbC9sYWJvcmF0b3J5Lm1vZGVsJztcbmltcG9ydCB7IExhYm9yYXRvcnlEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYWJvcmF0b3J5LWRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IExhYm9yYXRvcnlFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYWJvcmF0b3J5LWVkaXQuY29tcG9uZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExhYm9yYXRvcnlSZXNvbHZlIGltcGxlbWVudHMgUmVzb2x2ZTxMYWJvcmF0b3J5PiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBMYWJvcmF0b3J5U2VydmljZSkge1xuICAgIH1cblxuICAgIHJlc29sdmUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxMYWJvcmF0b3J5PiB7XG4gICAgICAgIGNvbnN0IGlkID0gcm91dGUucGFyYW1zWydpZCddID8gcm91dGUucGFyYW1zWydpZCddIDogbnVsbDtcbiAgICAgICAgaWYgKGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLmZpbmRCeVV1aWQoaWQpLnBpcGUoXG4gICAgICAgICAgICAgICAgZmlsdGVyKChyZXNwb25zZTogSHR0cFJlc3BvbnNlPExhYm9yYXRvcnk+KSA9PiByZXNwb25zZS5vayksXG4gICAgICAgICAgICAgICAgbWFwKChwYXRpZW50OiBIdHRwUmVzcG9uc2U8TGFib3JhdG9yeT4pID0+IHBhdGllbnQuYm9keSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mKDxMYWJvcmF0b3J5Pnt9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBST1VURVM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0xhYm9yYXRvcnkgUmVxdWVzdCcsXG4gICAgICAgICAgICBicmVhZGNydW1iOiAnTEFCT1JBVE9SWSBSRVFVRVNUJ1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICc6aWQvcGF0aWVudC86cGF0aWVudElkL3ZpZXcnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTGFib3JhdG9yeURldGFpbHNDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IExhYm9yYXRvcnlSZXNvbHZlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfVVNFUiddLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xhYm9yYXRvcnkgUmVxdWVzdCcsXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWI6ICdMQUJPUkFUT1JZIFJFUVVFU1QnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL2NhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJ3BhdGllbnQvOnBhdGllbnRJZC9uZXcnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTGFib3JhdG9yeUVkaXRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhdXRob3JpdGllczogWydST0xFX0RFQyddLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0xBQk9SQVRPUlkgUkVRVUVTVCcsXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWI6ICdBREQgTEFCT1JBVE9SWSBSRVFVRVNUJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9jYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICc6aWQvcGF0aWVudC86cGF0aWVudElkL2VkaXQnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTGFib3JhdG9yeUVkaXRDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IExhYm9yYXRvcnlSZXNvbHZlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfREVDJ10sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTGFib3JhdG9yeSBSZXF1ZXN0IEVkaXQnLFxuICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1iOiAnTEFCT1JBVE9SWSBSRVFVRVNUIEVESVQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL2NhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbiJdfQ==