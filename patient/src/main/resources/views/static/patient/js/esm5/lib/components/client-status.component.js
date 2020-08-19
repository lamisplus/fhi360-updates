import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '@alfresco/adf-core';
import { AppLoaderService } from '@lamis/web-core';
import * as moment_ from 'moment';
var moment = moment_;
var ClientStatusComponent = /** @class */ (function () {
    function ClientStatusComponent(patientService, activatedRoute, router, notification, appLoaderService) {
        this.patientService = patientService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.notification = notification;
        this.appLoaderService = appLoaderService;
        this.facilities = [];
        this.statusDates = [];
        this.today = moment();
        this.statuses = ['TRACED_UNABLE_TO_LOCATE', 'TRACED_AGREED_TO_RETURN_TO_CARE', 'DID_NOT_ATTEMPT_TO_TRACE'];
    }
    ClientStatusComponent.prototype.createEntity = function () {
        return {};
    };
    ClientStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isSaving = false;
        this.patientService.getActiveFacility().subscribe(function (fac) {
            _this.patientService.getAllFacility().subscribe(function (res) {
                _this.facilities = res.map(function (f) { return f.name; }).filter(function (f) { return f != fac.name; });
            });
        });
        this.activatedRoute.data.subscribe(function (_a) {
            var entity = _a.entity;
            _this.entity = !!entity && entity.body ? entity.body : entity;
            if (_this.entity === undefined) {
                _this.entity = _this.createEntity();
            }
            var patientId = _this.activatedRoute.snapshot.paramMap.get('patientId');
            _this.patientService.findByUuid(patientId).subscribe(function (res) {
                _this.entity.patient = res.body;
                _this.patient = res.body;
                _this.entity.facility = res.body.facility;
                _this.patientService.getStatusDatesByPatient(res.body.id).subscribe(function (res) {
                    _this.statusDates = res;
                });
            });
            if (_this.entity.id) {
                _this.patientService.getStatusName(_this.entity.id).subscribe(function (res) { return _this.status = res; });
                if (_this.entity && _this.entity.extra) {
                    _this.facilityTransferredTo = _this.entity.extra.facilityTransferredTo;
                }
            }
        });
    };
    ClientStatusComponent.prototype.change = function (input) {
        if (input) {
            this.facilities = this.facilities.filter(function (f) { return f.toLowerCase().includes(input.toLowerCase()); });
        }
    };
    ClientStatusComponent.prototype.filterDates = function (date) {
        var exists = false;
        this.statusDates.forEach(function (d) {
            if (date.diff(d, 'days') === 0) {
                exists = true;
            }
        });
        return (this.entity.id && date.diff(this.entity.dateStatus, 'days') === 0) || !exists;
    };
    ClientStatusComponent.prototype.previousState = function () {
        window.history.back();
    };
    ClientStatusComponent.prototype.save = function () {
        this.appLoaderService.open('Saving Client status update...');
        this.isSaving = true;
        if (!this.entity.extra) {
            this.entity.extra = {};
        }
        this.entity.extra.facilityTransferredTo = this.facilityTransferredTo;
        if (this.statuses.includes(this.entity.status)) {
            this.entity.outcome = this.entity.status;
            this.entity.status = null;
        }
        if (this.entity.id !== undefined) {
            this.subscribeToSaveResponse(this.patientService.updateClientStatus(this.entity));
        }
        else {
            this.subscribeToSaveResponse(this.patientService.saveClientStatus(this.entity));
        }
    };
    ClientStatusComponent.prototype.subscribeToSaveResponse = function (result) {
        var _this = this;
        result.subscribe(function (res) { return _this.onSaveSuccess(res.body); }, function (res) {
            _this.appLoaderService.close();
            _this.onSaveError();
            _this.onError(res.message);
        });
    };
    ClientStatusComponent.prototype.onSaveSuccess = function (result) {
        this.appLoaderService.close();
        this.isSaving = false;
        this.notification.showInfo('Client status update successfully saved');
        this.previousState();
    };
    ClientStatusComponent.prototype.onSaveError = function () {
        this.isSaving = false;
        this.notification.showError('Error saving status update');
    };
    ClientStatusComponent.prototype.onError = function (errorMessage) {
        this.isSaving = false;
        this.notification.showError(errorMessage);
    };
    ClientStatusComponent.ctorParameters = function () { return [
        { type: PatientService },
        { type: ActivatedRoute },
        { type: Router },
        { type: NotificationService },
        { type: AppLoaderService }
    ]; };
    ClientStatusComponent = tslib_1.__decorate([
        Component({
            selector: 'client-status',
            template: "<script src=\"patient-details.component.ts\"></script>\n<div class=\"lamis-edit-form\">\n    <div class=\"lamis-edit-form-container\">\n        <form name=\"form\" role=\"form\" novalidate (ngSubmit)=\"save()\" #statusForm=\"ngForm\">\n            <mat-card class=\"default\">\n                <mat-card-content *ngIf=\"patient\">\n                    <div>\n                        <mat-form-field class=\"full-width\" *ngIf=\"entity\">\n                            <input matInput [matDatepicker]=\"picker\"\n                                   placeholder=\"{{entity.id ? 'Date of Status' : 'Date of New Status'}}\"\n                                   [(ngModel)]=\"entity.dateStatus\"\n                                   [matDatepickerFilter]=\"filterDates.bind(this)\"\n                                   #visit=\"ngModel\"\n                                   [max]=\"today\"\n                                   [min]=\"patient.dateRegistration\"\n                                   name=\"visit\"\n                                   required>\n                            <mat-datepicker-toggle\n                                    matSuffix\n                                    [for]=\"picker\">\n                            </mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                            <mat-error\n                                    *ngIf=\"visit.errors && (visit.dirty || visit.touched) && (visit.errors.required)\">\n                                Date of new status is required\n                            </mat-error>\n                            <mat-error\n                                    *ngIf=\"visit.errors && (visit.dirty || visit.touched) && (visit.errors.min)\">\n                                Date of new status cannot be before {{entity.patient.dateRegistration}}\n                            </mat-error>\n                            <mat-error\n                                    *ngIf=\"visit.errors && (visit.dirty || visit.touched) && (visit.errors.max)\">\n                                Date of new status cannot be in the future\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div>\n                        <mat-form-field class=\"full-width\">\n                            <mat-select [(ngModel)]=\"entity.status\"\n                                        placeholder=\"{{entity.id ? 'Status' : 'New Status'}}\"\n                                        #outcome=\"ngModel\" required name=\"outcome\">\n                                <mat-option></mat-option>\n                                <mat-option [value]=\"'ART_TRANSFER_OUT'\">ART Transfer Out</mat-option>\n                                <mat-option [value]=\"'PRE_ART_TRANSFER_OUT'\">Pre-ART Transfer Out</mat-option>\n                                <mat-option [value]=\"'STOPPED_TREATMENT'\">Stopped Treatment</mat-option>\n                                <mat-option [value]=\"'KNOWN_DEATH'\">Died (Confirmed)</mat-option>\n                                <mat-option [value]=\"'PREVIOUSLY_UNDOCUMENTED_TRANSFER_CONFIRMED'\">Previously\n                                    Undocumented Patient Transfer (Confirmed)\n                                </mat-option>\n                                <mat-option [value]=\"'TRACED_UNABLE_TO_LOCATE'\">Traced Patient (Unable to locate)\n                                </mat-option>\n                                <mat-option [value]=\"'TRACED_AGREED_TO_RETURN_TO_CARE'\">Traced Patient and agreed to\n                                    return to care\n                                </mat-option>\n                                <mat-option [value]=\"'DID_NOT_ATTEMPT_TO_TRACE'\">Did Not Attempt to Trace Patient\n                                </mat-option>\n                            </mat-select>\n                            <mat-error\n                                    *ngIf=\"outcome.errors && (outcome.dirty || outcome.touched) && (outcome.errors.required)\">\n                                New Status is required\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"row\" *ngIf=\"entity.outcome && entity.outcome.indexOf('TRACE') !== -1\">\n                        <div class=\"col-md-6\">\n                            <mat-form-field class=\"full-width\">\n                                <input matInput [matDatepicker]=\"picker1\"\n                                       placeholder=\"Date of Tracked\"\n                                       [(ngModel)]=\"entity.dateTracked\"\n                                       #tracked=\"ngModel\"\n                                       [min]=\"entity.patient.dateRegistration\"\n                                       [max]=\"entity.dateStatus\"\n                                       name=\"tracked\"\n                                       required>\n                                <mat-datepicker-toggle\n                                        matSuffix\n                                        [for]=\"picker1\">\n                                </mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>\n                                <mat-error\n                                        *ngIf=\"tracked.errors && (tracked.dirty || tracked.touched) && (tracked.errors.required)\">\n                                    Date tracked is required\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                        <div class=\"col-md-6\" *ngIf=\"entity.outcome === 'TRACED_AGREED_TO_RETURN_TO_CARE'\">\n                            <mat-form-field class=\"full-width\">\n                                <input matInput [matDatepicker]=\"picker2\"\n                                       placeholder=\"Date Agreed to Return\"\n                                       [(ngModel)]=\"entity.agreedDate\"\n                                       #agreed=\"ngModel\"\n                                       [min]=\"entity.dateStatus\"\n                                       name=\"agreed\"\n                                       required>\n                                <mat-datepicker-toggle\n                                        matSuffix\n                                        [for]=\"picker2\">\n                                </mat-datepicker-toggle>\n                                <mat-datepicker #picker2></mat-datepicker>\n                                <mat-error\n                                        *ngIf=\"agreed.errors && (agreed.dirty || agreed.touched) && (agreed.errors.required)\">\n                                    Date of agreed to return is required\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div *ngIf=\"entity.status === 'ART_TRANSFER_OUT'\">\n                        <mat-form-field class=\"full-width\">\n                            <input matInput type=\"text\" placeholder=\"Facility Transferred To\"\n                                   required name=\"fac\" #fac=\"ngModel\"\n                                   [(ngModel)]=\"facilityTransferredTo\"\n                                   (input)=\"change($event.target.value)\"\n                                   [matAutocomplete]=\"auto\">\n                            <mat-autocomplete #auto=\"matAutocomplete\">\n                                <mat-option *ngFor=\"let facility of facilities\" [value]=\"facility\">{{facility}}</mat-option>\n                            </mat-autocomplete>\n                            <mat-error\n                                    *ngIf=\"fac.errors && (fac.dirty || fac.touched) && (fac.errors.required)\">\n                                Facility transferred to is required\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div *ngIf=\"entity.outcome === 'KNOWN_DEATH'\">\n                        <mat-form-field class=\"full-width\">\n                            <mat-select [(ngModel)]=\"entity.causeOfDeath\"\n                                        placeholder=\"Cause of Death\"\n                                        #death=\"ngModel\" required name=\"death\">\n                                <mat-option></mat-option>\n                                <mat-option [value]=\"'HIV disease resulting in TB'\">HIV disease resulting in TB\n                                </mat-option>\n                                <mat-option [value]=\"'HIV disease resulting in cancer'\">HIV disease resulting in\n                                    cancer\n                                </mat-option>\n                                <mat-option [value]=\"'HIV disease resulting in other infectious and parasitic disease'\">\n                                    HIV disease resulting in other infectious and parasitic disease\n                                </mat-option>\n                                <mat-option\n                                        [value]=\"'Other HIV disease resulting in other disease or conditions leading to death'\">\n                                    Other HIV disease resulting in other disease or conditions leading to death\n                                </mat-option>\n                                <mat-option [value]=\"'Other natural causes'\">Other natural causes</mat-option>\n                                <mat-option [value]=\"'Non-natural causes'\">Non-natural causes</mat-option>\n                                <mat-option [value]=\"'Unknown cause'\">Unknown cause</mat-option>\n                            </mat-select>\n                            <mat-error\n                                    *ngIf=\"death.errors && (death.dirty || death.touched) && (death.errors.required)\">\n                                Cause of death is required\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <div *ngIf=\"entity.outcome === 'STOPPED_TREATMENT'\">\n                        <mat-form-field class=\"full-width\">\n                            <mat-select [(ngModel)]=\"entity.reasonForInterruption\"\n                                        placeholder=\"Reason for Interruption\"\n                                        #interrupt=\"ngModel\" required name=\"interrupt\">\n                                <mat-option></mat-option>\n                                <mat-option [value]=\"'Toxicity/side effect'\">Toxicity /side effect</mat-option>\n                                <mat-option [value]=\"'Pregnancy'\">Pregnancy</mat-option>\n                                <mat-option [value]=\"'Treatment failure'\">Treatment failure</mat-option>\n                                <mat-option [value]=\"'Poor adherence'\">Poor adherence</mat-option>\n                                <mat-option [value]=\"'Illness, hospitalization'\">Illness, hospitalization</mat-option>\n                                <mat-option [value]=\"'Drug out of stock'\">Drug out of stock</mat-option>\n                                <mat-option [value]=\"'Patient lacks finances'\">Patient lacks finances</mat-option>\n                                <mat-option [value]=\"'Other patient decision'\">Other patient decision</mat-option>\n                                <mat-option [value]=\"'Planned Rx interruption'\">Planned Rx interruption</mat-option>\n                                <mat-option [value]=\"'Other'\">Other</mat-option>\n                            </mat-select>\n                            <mat-error\n                                    *ngIf=\"interrupt.errors && (interrupt.dirty || interrupt.touched) && (interrupt.errors.required)\">\n                                Reason for interruption is required\n                            </mat-error>\n                        </mat-form-field>\n                    </div>\n                    <mat-divider></mat-divider>\n                </mat-card-content>\n                <mat-card-actions class=\"lamis-edit-form-actions\">\n                    <button mat-raised-button type=\"button\" (click)=\"previousState()\">Back</button>\n                    <button mat-raised-button color='primary'\n                            [disabled]=\"statusForm.invalid\"\n                            type=\"submit\">\n                        {{entity.id !== undefined ? 'Update' : 'Save'}}\n                    </button>\n                </mat-card-actions>\n            </mat-card>\n        </form>\n    </div>\n</div>\n"
        }),
        tslib_1.__metadata("design:paramtypes", [PatientService, ActivatedRoute, Router,
            NotificationService, AppLoaderService])
    ], ClientStatusComponent);
    return ClientStatusComponent;
}());
export { ClientStatusComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXN0YXR1cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYW1pcy1wYXRpZW50LTEuMy4wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY2xpZW50LXN0YXR1cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzdELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbkQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFLbEMsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBTXZCO0lBV0ksK0JBQW9CLGNBQThCLEVBQVUsY0FBOEIsRUFBVSxNQUFjLEVBQzlGLFlBQWlDLEVBQVUsZ0JBQWtDO1FBRDdFLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDOUYsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVBqRyxlQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLFVBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxpQ0FBaUMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO0lBSXRHLENBQUM7SUFFRCw0Q0FBWSxHQUFaO1FBQ0ksT0FBc0IsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO1FBQUEsaUJB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SyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQXpHbUMsY0FBYztnQkFBMEIsY0FBYztnQkFBa0IsTUFBTTtnQkFDaEYsbUJBQW1CO2dCQUE0QixnQkFBZ0I7O0lBWnhGLHFCQUFxQjtRQUpqQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZUFBZTtZQUN6QiwyaVpBQTZDO1NBQ2hELENBQUM7aURBWXNDLGNBQWMsRUFBMEIsY0FBYyxFQUFrQixNQUFNO1lBQ2hGLG1CQUFtQixFQUE0QixnQkFBZ0I7T0FaeEYscUJBQXFCLENBcUhqQztJQUFELDRCQUFDO0NBQUEsQUFySEQsSUFxSEM7U0FySFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcGF0aWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJ0BhbGZyZXNjby9hZGYtY29yZSc7XG5pbXBvcnQgeyBBcHBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnQGxhbWlzL3dlYi1jb3JlJztcbmltcG9ydCB7IFBhdGllbnQsIFN0YXR1c0hpc3RvcnkgfSBmcm9tICcuLi9tb2RlbC9wYXRpZW50Lm1vZGVsJztcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE1vbWVudCB9IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NsaWVudC1zdGF0dXMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbGllbnQtc3RhdHVzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBDbGllbnRTdGF0dXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGlzU2F2aW5nOiBib29sZWFuO1xuICAgIGVudGl0eTogU3RhdHVzSGlzdG9yeTtcbiAgICBwYXRpZW50OiBQYXRpZW50O1xuICAgIHN0YXR1czogc3RyaW5nO1xuICAgIGZhY2lsaXRpZXM6IHN0cmluZ1tdID0gW107XG4gICAgZmFjaWxpdHlUcmFuc2ZlcnJlZFRvOiBzdHJpbmc7XG4gICAgc3RhdHVzRGF0ZXM6IE1vbWVudFtdID0gW107XG4gICAgdG9kYXkgPSBtb21lbnQoKTtcbiAgICBzdGF0dXNlcyA9IFsnVFJBQ0VEX1VOQUJMRV9UT19MT0NBVEUnLCAnVFJBQ0VEX0FHUkVFRF9UT19SRVRVUk5fVE9fQ0FSRScsICdESURfTk9UX0FUVEVNUFRfVE9fVFJBQ0UnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGF0aWVudFNlcnZpY2U6IFBhdGllbnRTZXJ2aWNlLCBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uU2VydmljZSwgcHJpdmF0ZSBhcHBMb2FkZXJTZXJ2aWNlOiBBcHBMb2FkZXJTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgY3JlYXRlRW50aXR5KCk6IFN0YXR1c0hpc3Rvcnkge1xuICAgICAgICByZXR1cm4gPFN0YXR1c0hpc3Rvcnk+e307XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXRpZW50U2VydmljZS5nZXRBY3RpdmVGYWNpbGl0eSgpLnN1YnNjcmliZShmYWMgPT4ge1xuICAgICAgICAgICAgdGhpcy5wYXRpZW50U2VydmljZS5nZXRBbGxGYWNpbGl0eSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmFjaWxpdGllcyA9IHJlcy5tYXAoZiA9PiBmLm5hbWUpLmZpbHRlcihmID0+IGYgIT0gZmFjLm5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKCh7ZW50aXR5fSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbnRpdHkgPSAhIWVudGl0eSAmJiBlbnRpdHkuYm9keSA/IGVudGl0eS5ib2R5IDogZW50aXR5O1xuICAgICAgICAgICAgaWYgKHRoaXMuZW50aXR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eSA9IHRoaXMuY3JlYXRlRW50aXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXRpZW50SWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgncGF0aWVudElkJyk7XG4gICAgICAgICAgICB0aGlzLnBhdGllbnRTZXJ2aWNlLmZpbmRCeVV1aWQocGF0aWVudElkKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5LnBhdGllbnQgPSByZXMuYm9keTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnQgPSByZXMuYm9keTtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eS5mYWNpbGl0eSA9IHJlcy5ib2R5LmZhY2lsaXR5O1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudFNlcnZpY2UuZ2V0U3RhdHVzRGF0ZXNCeVBhdGllbnQocmVzLmJvZHkuaWQpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzRGF0ZXMgPSByZXM7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZW50aXR5LmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRpZW50U2VydmljZS5nZXRTdGF0dXNOYW1lKHRoaXMuZW50aXR5LmlkKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuc3RhdHVzID0gcmVzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmVudGl0eSAmJiB0aGlzLmVudGl0eS5leHRyYSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZhY2lsaXR5VHJhbnNmZXJyZWRUbyA9IHRoaXMuZW50aXR5LmV4dHJhLmZhY2lsaXR5VHJhbnNmZXJyZWRUbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZShpbnB1dDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChpbnB1dCkge1xuICAgICAgICAgICAgdGhpcy5mYWNpbGl0aWVzID0gdGhpcy5mYWNpbGl0aWVzLmZpbHRlcihmID0+IGYudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhpbnB1dC50b0xvd2VyQ2FzZSgpKSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbHRlckRhdGVzKGRhdGU6IE1vbWVudCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5zdGF0dXNEYXRlcy5mb3JFYWNoKGQgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGUuZGlmZihkLCAnZGF5cycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAodGhpcy5lbnRpdHkuaWQgJiYgZGF0ZS5kaWZmKHRoaXMuZW50aXR5LmRhdGVTdGF0dXMsICdkYXlzJykgPT09IDApIHx8ICFleGlzdHM7XG4gICAgfVxuXG4gICAgcHJldmlvdXNTdGF0ZSgpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuYXBwTG9hZGVyU2VydmljZS5vcGVuKCdTYXZpbmcgQ2xpZW50IHN0YXR1cyB1cGRhdGUuLi4nKTtcbiAgICAgICAgdGhpcy5pc1NhdmluZyA9IHRydWU7XG4gICAgICAgIGlmICghdGhpcy5lbnRpdHkuZXh0cmEpIHtcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LmV4dHJhID0ge31cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVudGl0eS5leHRyYS5mYWNpbGl0eVRyYW5zZmVycmVkVG8gPSB0aGlzLmZhY2lsaXR5VHJhbnNmZXJyZWRUbztcblxuICAgICAgICBpZiAodGhpcy5zdGF0dXNlcy5pbmNsdWRlcyh0aGlzLmVudGl0eS5zdGF0dXMpKSB7XG4gICAgICAgICAgICB0aGlzLmVudGl0eS5vdXRjb21lID0gdGhpcy5lbnRpdHkuc3RhdHVzO1xuICAgICAgICAgICAgdGhpcy5lbnRpdHkuc3RhdHVzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbnRpdHkuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVUb1NhdmVSZXNwb25zZSh0aGlzLnBhdGllbnRTZXJ2aWNlLnVwZGF0ZUNsaWVudFN0YXR1cyh0aGlzLmVudGl0eSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmVUb1NhdmVSZXNwb25zZSh0aGlzLnBhdGllbnRTZXJ2aWNlLnNhdmVDbGllbnRTdGF0dXModGhpcy5lbnRpdHkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc3Vic2NyaWJlVG9TYXZlUmVzcG9uc2UocmVzdWx0OiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+Pikge1xuICAgICAgICByZXN1bHQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlczogSHR0cFJlc3BvbnNlPGFueT4pID0+IHRoaXMub25TYXZlU3VjY2VzcyhyZXMuYm9keSksXG4gICAgICAgICAgICAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwTG9hZGVyU2VydmljZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMub25TYXZlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXJyb3IocmVzLm1lc3NhZ2UpXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZVN1Y2Nlc3MocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgdGhpcy5hcHBMb2FkZXJTZXJ2aWNlLmNsb3NlKCk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb24uc2hvd0luZm8oJ0NsaWVudCBzdGF0dXMgdXBkYXRlIHN1Y2Nlc3NmdWxseSBzYXZlZCcpO1xuICAgICAgICB0aGlzLnByZXZpb3VzU3RhdGUoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uU2F2ZUVycm9yKCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLnNob3dFcnJvcignRXJyb3Igc2F2aW5nIHN0YXR1cyB1cGRhdGUnKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgb25FcnJvcihlcnJvck1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlzU2F2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uLnNob3dFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgIH1cbn1cbiJdfQ==