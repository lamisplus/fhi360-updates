import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ChronicCareDetailComponent } from './components/chronic-care/chronic.care.detail.component';
import { ChronicCareEditComponent } from './components/chronic-care/chronic.care.edit.component';
import { ChronicCareResolve } from './services/chronic.care.route';
import { MaterialModule } from './material.module';
import { CoreModule } from '@alfresco/adf-core';
import { CustomFormsModule } from 'ng2-validation';
import { CommonModule } from '@angular/common';
import { CovalentDialogsModule } from '@covalent/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LamisSharedModule, MatDateFormatModule } from '@lamis/web-core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './services/chronic.care.route';
import { MatStepperModule } from "@angular/material";
let ChronicCareModule = class ChronicCareModule {
};
ChronicCareModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            ChronicCareDetailComponent,
            ChronicCareEditComponent
        ],
        imports: [
            CommonModule,
            CovalentDialogsModule,
            FormsModule,
            ReactiveFormsModule,
            LamisSharedModule,
            MaterialModule,
            CoreModule,
            CustomFormsModule,
            MatDateFormatModule,
            RouterModule.forChild(ROUTES),
            MatStepperModule
        ],
        providers: [
            ChronicCareResolve
        ]
    })
], ChronicCareModule);
export { ChronicCareModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb25pYy5jYXJlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbWlzLWNsaW5pYy0xLjIuMC8iLCJzb3VyY2VzIjpbImxpYi9jaHJvbmljLmNhcmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBd0JyRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtDQUU3QixDQUFBO0FBRlksaUJBQWlCO0lBdEI3QixRQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDViwwQkFBMEI7WUFDMUIsd0JBQXdCO1NBQzNCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsWUFBWTtZQUNaLHFCQUFxQjtZQUNyQixXQUFXO1lBQ1gsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsVUFBVTtZQUNWLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFDN0IsZ0JBQWdCO1NBQ25CO1FBQ0QsU0FBUyxFQUFFO1lBQ1Asa0JBQWtCO1NBQ3JCO0tBQ0osQ0FBQztHQUNXLGlCQUFpQixDQUU3QjtTQUZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaHJvbmljQ2FyZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jaHJvbmljLWNhcmUvY2hyb25pYy5jYXJlLmRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hyb25pY0NhcmVFZGl0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nocm9uaWMtY2FyZS9jaHJvbmljLmNhcmUuZWRpdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hyb25pY0NhcmVSZXNvbHZlIH0gZnJvbSAnLi9zZXJ2aWNlcy9jaHJvbmljLmNhcmUucm91dGUnO1xuaW1wb3J0IHsgTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLm1vZHVsZSc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnQGFsZnJlc2NvL2FkZi1jb3JlJztcbmltcG9ydCB7IEN1c3RvbUZvcm1zTW9kdWxlIH0gZnJvbSAnbmcyLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvdmFsZW50RGlhbG9nc01vZHVsZSB9IGZyb20gJ0Bjb3ZhbGVudC9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTGFtaXNTaGFyZWRNb2R1bGUsIE1hdERhdGVGb3JtYXRNb2R1bGUgfSBmcm9tICdAbGFtaXMvd2ViLWNvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4vc2VydmljZXMvY2hyb25pYy5jYXJlLnJvdXRlJztcbmltcG9ydCB7IE1hdFN0ZXBwZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWxcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2hyb25pY0NhcmVEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIENocm9uaWNDYXJlRWRpdENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIENvdmFsZW50RGlhbG9nc01vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIExhbWlzU2hhcmVkTW9kdWxlLFxuICAgICAgICBNYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgQ29yZU1vZHVsZSxcbiAgICAgICAgQ3VzdG9tRm9ybXNNb2R1bGUsXG4gICAgICAgIE1hdERhdGVGb3JtYXRNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChST1VURVMpLFxuICAgICAgICBNYXRTdGVwcGVyTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ2hyb25pY0NhcmVSZXNvbHZlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBDaHJvbmljQ2FyZU1vZHVsZSB7XG4gICAgXG59XG4iXX0=