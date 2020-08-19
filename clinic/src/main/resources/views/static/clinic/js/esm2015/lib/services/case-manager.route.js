import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CaseManagerDetailsComponent } from '../components/case-management/case-manager.details.component';
import { CaseManagerService } from './case-manager.service';
import { CaseManagerEditComponent } from '../components/case-management/case-manager.edit.component';
import { CaseManagerListComponent } from '../components/case-management/case-manager.list.component';
let CaseManagerResolve = class CaseManagerResolve {
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
CaseManagerResolve.ctorParameters = () => [
    { type: CaseManagerService }
];
CaseManagerResolve = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [CaseManagerService])
], CaseManagerResolve);
export { CaseManagerResolve };
const ɵ0 = {
    title: 'Case Manager',
    breadcrumb: 'CASE MANAGERS'
}, ɵ1 = {
    authorities: ['ROLE_USER'],
    title: 'Case Managers',
    breadcrumb: 'CASE MANAGERS'
}, ɵ2 = {
    authorities: ['ROLE_USER'],
    title: 'Case Manager',
    breadcrumb: 'CASE MANAGER'
}, ɵ3 = {
    authorities: ['ROLE_DEC'],
    title: 'Add Case Manager',
    breadcrumb: 'ADD CASE MANAGER'
}, ɵ4 = {
    authorities: ['ROLE_DEC'],
    title: 'Case Manager Edit',
    breadcrumb: 'CASE MANAGER EDIT'
};
export const ROUTES = [
    {
        path: '',
        data: ɵ0,
        children: [
            {
                path: '',
                component: CaseManagerListComponent,
                data: ɵ1,
            },
            {
                path: ':id/view',
                component: CaseManagerDetailsComponent,
                resolve: {
                    entity: CaseManagerResolve
                },
                data: ɵ2,
            },
            {
                path: 'new',
                component: CaseManagerEditComponent,
                data: ɵ3,
            },
            {
                path: ':id/edit',
                component: CaseManagerEditComponent,
                resolve: {
                    entity: CaseManagerResolve
                },
                data: ɵ4,
            }
        ]
    }
];
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS1tYW5hZ2VyLnJvdXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGFtaXMtY2xpbmljLTEuMi4wLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2Nhc2UtbWFuYWdlci5yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFFM0csT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDckcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFHckcsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFDM0IsWUFBb0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFDL0MsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUE2QixFQUFFLEtBQTBCO1FBQzdELE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxRCxJQUFJLEVBQUUsRUFBRTtZQUNKLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNuQyxNQUFNLENBQUMsQ0FBQyxRQUFtQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQzVELEdBQUcsQ0FBQyxDQUFDLE9BQWtDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FDNUQsQ0FBQztTQUNMO1FBQ0QsT0FBTyxFQUFFLENBQWMsRUFBRSxDQUFDLENBQUM7SUFDL0IsQ0FBQztDQUNKLENBQUE7O1lBYmdDLGtCQUFrQjs7QUFEdEMsa0JBQWtCO0lBRDlCLFVBQVUsRUFBRTs2Q0FFb0Isa0JBQWtCO0dBRHRDLGtCQUFrQixDQWM5QjtTQWRZLGtCQUFrQjtXQW1CakI7SUFDRixLQUFLLEVBQUUsY0FBYztJQUNyQixVQUFVLEVBQUUsZUFBZTtDQUM5QixPQUthO0lBQ0YsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQzFCLEtBQUssRUFBRSxlQUFlO0lBQ3RCLFVBQVUsRUFBRSxlQUFlO0NBQzlCLE9BU0s7SUFDRixXQUFXLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDMUIsS0FBSyxFQUFFLGNBQWM7SUFDckIsVUFBVSxFQUFFLGNBQWM7Q0FDN0IsT0FNSztJQUNGLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN6QixLQUFLLEVBQUUsa0JBQWtCO0lBQ3pCLFVBQVUsRUFBRSxrQkFBa0I7Q0FDakMsT0FTSztJQUNGLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQztJQUN6QixLQUFLLEVBQUUsbUJBQW1CO0lBQzFCLFVBQVUsRUFBRSxtQkFBbUI7Q0FDbEM7QUFuRGpCLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBVztJQUMxQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsSUFBSSxJQUdIO1FBQ0QsUUFBUSxFQUFFO1lBQ047Z0JBQ0ksSUFBSSxFQUFFLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFLHdCQUF3QjtnQkFDbkMsSUFBSSxJQUlIO2FBRUo7WUFDRDtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLDJCQUEyQjtnQkFDdEMsT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxrQkFBa0I7aUJBQzdCO2dCQUNELElBQUksSUFJSDthQUVKO1lBQ0Q7Z0JBQ0ksSUFBSSxFQUFFLEtBQUs7Z0JBQ1gsU0FBUyxFQUFFLHdCQUF3QjtnQkFDbkMsSUFBSSxJQUlIO2FBRUo7WUFDRDtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsU0FBUyxFQUFFLHdCQUF3QjtnQkFDbkMsT0FBTyxFQUFFO29CQUNMLE1BQU0sRUFBRSxrQkFBa0I7aUJBQzdCO2dCQUNELElBQUksSUFJSDthQUVKO1NBQ0o7S0FDSjtDQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSZXNvbHZlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90LCBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ2FzZU1hbmFnZXJEZXRhaWxzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYXNlLW1hbmFnZW1lbnQvY2FzZS1tYW5hZ2VyLmRldGFpbHMuY29tcG9uZW50JztcbmltcG9ydCB7IENhc2VNYW5hZ2VyIH0gZnJvbSAnLi4vbW9kZWwvY2FzZS1tYW5hZ2VtZW50Lm1vZGVsJztcbmltcG9ydCB7IENhc2VNYW5hZ2VyU2VydmljZSB9IGZyb20gJy4vY2FzZS1tYW5hZ2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FzZU1hbmFnZXJFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9jYXNlLW1hbmFnZW1lbnQvY2FzZS1tYW5hZ2VyLmVkaXQuY29tcG9uZW50JztcbmltcG9ydCB7IENhc2VNYW5hZ2VyTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvY2FzZS1tYW5hZ2VtZW50L2Nhc2UtbWFuYWdlci5saXN0LmNvbXBvbmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXNlTWFuYWdlclJlc29sdmUgaW1wbGVtZW50cyBSZXNvbHZlPENhc2VNYW5hZ2VyPiB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBDYXNlTWFuYWdlclNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICByZXNvbHZlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Q2FzZU1hbmFnZXI+IHtcbiAgICAgICAgY29uc3QgaWQgPSByb3V0ZS5wYXJhbXNbJ2lkJ10gPyByb3V0ZS5wYXJhbXNbJ2lkJ10gOiBudWxsO1xuICAgICAgICBpZiAoaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcnZpY2UuZmluZEJ5VXVpZChpZCkucGlwZShcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8Q2FzZU1hbmFnZXI+KSA9PiByZXNwb25zZS5vayksXG4gICAgICAgICAgICAgICAgbWFwKChwYXRpZW50OiBIdHRwUmVzcG9uc2U8Q2FzZU1hbmFnZXI+KSA9PiBwYXRpZW50LmJvZHkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZig8Q2FzZU1hbmFnZXI+e30pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFJPVVRFUzogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2FzZSBNYW5hZ2VyJyxcbiAgICAgICAgICAgIGJyZWFkY3J1bWI6ICdDQVNFIE1BTkFHRVJTJ1xuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ2FzZU1hbmFnZXJMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9VU0VSJ10sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FzZSBNYW5hZ2VycycsXG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWI6ICdDQVNFIE1BTkFHRVJTJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9jYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICc6aWQvdmlldycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBDYXNlTWFuYWdlckRldGFpbHNDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgICAgICAgICBlbnRpdHk6IENhc2VNYW5hZ2VyUmVzb2x2ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBhdXRob3JpdGllczogWydST0xFX1VTRVInXSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdDYXNlIE1hbmFnZXInLFxuICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1iOiAnQ0FTRSBNQU5BR0VSJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy9jYW5BY3RpdmF0ZTogW1VzZXJSb3V0ZUFjY2Vzc1NlcnZpY2VdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICduZXcnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQ2FzZU1hbmFnZXJFZGl0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYXV0aG9yaXRpZXM6IFsnUk9MRV9ERUMnXSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBZGQgQ2FzZSBNYW5hZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgYnJlYWRjcnVtYjogJ0FERCBDQVNFIE1BTkFHRVInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL2NhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJzppZC9lZGl0JyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IENhc2VNYW5hZ2VyRWRpdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICByZXNvbHZlOiB7XG4gICAgICAgICAgICAgICAgICAgIGVudGl0eTogQ2FzZU1hbmFnZXJSZXNvbHZlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcml0aWVzOiBbJ1JPTEVfREVDJ10sXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ2FzZSBNYW5hZ2VyIEVkaXQnLFxuICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1iOiAnQ0FTRSBNQU5BR0VSIEVESVQnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvL2NhbkFjdGl2YXRlOiBbVXNlclJvdXRlQWNjZXNzU2VydmljZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cbl07XG5cbiJdfQ==