import { ArtSummaryComponent } from '../components/art-summary.component';
import { PatientLineListComponent } from '../components/patient-line-list.component';
import { DataConversionComponent } from '../components/data-conversion.component';
const ɵ0 = {
    title: 'Reports',
    breadcrumb: 'REPORTS'
}, ɵ1 = {
    breadcrumb: 'ART SUMMARY REPORT',
    title: 'ART Summary Report'
}, ɵ2 = {
    breadcrumb: 'PATIENT LINE LIST',
    title: 'Patient Line List'
}, ɵ3 = {
    breadcrumb: 'PATIENT REPORTS',
    title: 'Patient Reports'
}, ɵ4 = {
    breadcrumb: 'DATA CONVERSION',
    title: 'Data Conversion'
};
export const ROUTES = [
    {
        path: '',
        data: ɵ0,
        children: [
            {
                path: 'art-summary',
                component: ArtSummaryComponent,
                data: ɵ1,
            },
            {
                path: 'patients',
                children: [
                    {
                        path: 'line-list',
                        component: PatientLineListComponent,
                        data: ɵ2
                    }
                ],
                data: ɵ3
            },
            {
                path: 'data-conversion',
                component: DataConversionComponent,
                data: ɵ4
            }
        ]
    }
];
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cy5yb3V0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbWlzLXJlcG9ydGluZy0xLjIuMC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9yZXBvcnRzLnJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO1dBTXBFO0lBQ0YsS0FBSyxFQUFFLFNBQVM7SUFDaEIsVUFBVSxFQUFFLFNBQVM7Q0FDeEIsT0FLYTtJQUNGLFVBQVUsRUFBRSxvQkFBb0I7SUFDaEMsS0FBSyxFQUFFLG9CQUFvQjtDQUM5QixPQVFhO0lBQ0YsVUFBVSxFQUFFLG1CQUFtQjtJQUMvQixLQUFLLEVBQUUsbUJBQW1CO0NBQzdCLE9BR0g7SUFDRixVQUFVLEVBQUUsaUJBQWlCO0lBQzdCLEtBQUssRUFBRSxpQkFBaUI7Q0FDM0IsT0FLSztJQUNGLFVBQVUsRUFBRSxpQkFBaUI7SUFDN0IsS0FBSyxFQUFFLGlCQUFpQjtDQUMzQjtBQXZDakIsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFXO0lBQzFCO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixJQUFJLElBR0g7UUFDRCxRQUFRLEVBQUU7WUFDTjtnQkFDSSxJQUFJLEVBQUUsYUFBYTtnQkFDbkIsU0FBUyxFQUFFLG1CQUFtQjtnQkFDOUIsSUFBSSxJQUdIO2FBQ0o7WUFDRDtnQkFDSSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsUUFBUSxFQUFFO29CQUNOO3dCQUNJLElBQUksRUFBRSxXQUFXO3dCQUNqQixTQUFTLEVBQUUsd0JBQXdCO3dCQUNuQyxJQUFJLElBR0g7cUJBQ0o7aUJBQ0o7Z0JBQ0QsSUFBSSxJQUdIO2FBQ0o7WUFDRDtnQkFDSSxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixTQUFTLEVBQUUsdUJBQXVCO2dCQUNsQyxJQUFJLElBR0g7YUFDSjtTQUNKO0tBQ0o7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFydFN1bW1hcnlDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2FydC1zdW1tYXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYXRpZW50TGluZUxpc3RDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhdGllbnQtbGluZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhQ29udmVyc2lvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZGF0YS1jb252ZXJzaW9uLmNvbXBvbmVudCc7XG5cblxuZXhwb3J0IGNvbnN0IFJPVVRFUzogUm91dGVzID0gW1xuICAgIHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnUmVwb3J0cycsXG4gICAgICAgICAgICBicmVhZGNydW1iOiAnUkVQT1JUUydcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnYXJ0LXN1bW1hcnknLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogQXJ0U3VtbWFyeUNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWI6ICdBUlQgU1VNTUFSWSBSRVBPUlQnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0FSVCBTdW1tYXJ5IFJlcG9ydCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAncGF0aWVudHMnLFxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6ICdsaW5lLWxpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBQYXRpZW50TGluZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWRjcnVtYjogJ1BBVElFTlQgTElORSBMSVNUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BhdGllbnQgTGluZSBMaXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWI6ICdQQVRJRU5UIFJFUE9SVFMnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1BhdGllbnQgUmVwb3J0cydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICdkYXRhLWNvbnZlcnNpb24nLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogRGF0YUNvbnZlcnNpb25Db21wb25lbnQsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBicmVhZGNydW1iOiAnREFUQSBDT05WRVJTSU9OJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEYXRhIENvbnZlcnNpb24nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfVxuXTtcblxuIl19