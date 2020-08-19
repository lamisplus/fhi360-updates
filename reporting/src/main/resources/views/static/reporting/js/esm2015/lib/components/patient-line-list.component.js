import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { ReportService } from '../services/report.service';
import { RxStompService } from '@stomp/ng2-stompjs';
import * as moment_ from 'moment';
const moment = moment_;
let PatientLineListComponent = class PatientLineListComponent {
    constructor(service, stompService) {
        this.service = service;
        this.stompService = stompService;
        this.params = {};
        this.running = false;
        this.finished = false;
        this.today = moment();
        this.message = 'Running';
    }
    ngOnInit() {
        this.service.getActiveFacility().subscribe(res => {
            this.facility = res;
            this.params['facilityId'] = this.facility.id;
        });
        this.topicSubscription = this.stompService.watch('/topic/patient-line-list/status').subscribe((msg) => {
            if (msg.body === 'start') {
                this.running = true;
                this.finished = false;
                this.message = 'Running';
            }
            else if (msg.body === 'end') {
                this.running = false;
                this.finished = true;
                this.message = 'Finished';
            }
            else {
                this.message = msg.body;
                this.running = true;
                this.finished = false;
            }
        });
        this.service.getStates().subscribe(res => this.states = res);
        this.service.getRegimenTypes().subscribe(res => this.regimenTypes = res);
    }
    stateChanged(state) {
        if (state && state.id) {
            this.service.getLgasByState(state.id).subscribe(res => this.lgas = res);
        }
    }
    convert() {
        this.running = true;
        this.finished = false;
        this.service.patientLineList(this.params).subscribe((res) => {
            this.running = false;
            this.finished = true;
            let format = this.params.format === 'xlsx' ? 'xlsx' : 'pdf';
            const file = new File([res], `${this.facility.name}_Patient_Line_List.${format}`, { type: 'application/octet-stream' });
            saveAs(file);
        });
    }
    ngOnDestroy() {
        this.topicSubscription.unsubscribe();
    }
};
PatientLineListComponent.ctorParameters = () => [
    { type: ReportService },
    { type: RxStompService }
];
PatientLineListComponent = tslib_1.__decorate([
    Component({
        selector: 'report-patient-line-list',
        template: "<div class=\"lamis-edit-form\">\n    <div class=\"lamis-edit-form-container\">\n        <form name=\"form\" role=\"form\" novalidate (ngSubmit)=\"convert()\" #plForm=\"ngForm\">\n            <mat-card class=\"default\">\n                <mat-card-header>\n                    Patient Information Query\n                </mat-card-header>\n                <mat-card-content>\n                    <ng-container *ngIf=\"running\">\n                        <div class=\"full-width\">\n                            <mat-progress-bar class=\"full-width\" mode=\"indeterminate\"></mat-progress-bar>\n                            <mat-form-field class=\"full-width\">\n                                <input [disabled]=\"true\" matInput [value]=\"message\"/>\n                            </mat-form-field>\n                        </div>\n                    </ng-container>\n                    <ng-container *ngIf=\"finished\">\n                        <div class=\"full-width\">\n                            <mat-form-field class=\"full-width\">\n                                <input [disabled]=\"true\" matInput [value]=\"message\"/>\n                            </mat-form-field>\n                        </div>\n                    </ng-container>\n                    <fieldset>\n                        <h5>Demographic filters</h5>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>Gender</mat-label>\n                                    <mat-select name=\"gender\" [(ngModel)]=\"params.gender\">\n                                        <mat-option></mat-option>\n                                        <mat-option value=\"MALE\">Male</mat-option>\n                                        <mat-option value=\"FEMALE\">Female</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <h5>Age Range</h5>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>From</mat-label>\n                                    <input matInput name=\"ageBegin\" type=\"number\" [(ngModel)]=\"params.ageBegin\"/>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>To</mat-label>\n                                    <input matInput name=\"ageEnd\" type=\"number\" [(ngModel)]=\"params.ageEnd\"/>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>State</mat-label>\n                                    <mat-select (valueChange)=\"stateChanged($event)\">\n                                        <mat-option></mat-option>\n                                        <mat-option *ngFor=\"let state of states\"\n                                                    [value]=\"state\">{{state.name}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>LGA of residence</mat-label>\n                                    <mat-select name=\"lga\" [(ngModel)]=\"params.lgaId\">\n                                        <mat-option></mat-option>\n                                        <mat-option *ngFor=\"let lga of lgas\" [value]=\"lga.id\">{{lga.name}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                    </fieldset>\n                    <fieldset>\n                        <h5>Clinical filters</h5>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>Current Status</mat-label>\n                                    <mat-select name=\"currentStatus\" [(ngModel)]=\"params.currentStatus\">\n                                        <mat-option></mat-option>\n                                        <mat-option value=\"HIV_PLUS_NON_ART\">HIV+ non ART</mat-option>\n                                        <mat-option value=\"ART_START\">ART Start</mat-option>\n                                        <mat-option value=\"ART_RESTART\">ART Restart</mat-option>\n                                        <mat-option value=\"ART_TRANSFER_IN\">ART Transfer In</mat-option>\n                                        <mat-option value=\"ART_TRANSFER_OUT\">ART Transfer Out</mat-option>\n                                        <mat-option value=\"PRE_ART_TRANSFER_IN\">Pre-ART Transfer In</mat-option>\n                                        <mat-option value=\"PRE_ART_TRANSFER_OUT\">Pre-ART Transfer Out</mat-option>\n                                        <mat-option value=\"LOST_TO_FOLLOWUP\">Lost to Follow Up</mat-option>\n                                        <mat-option value=\"STOPPED_TREATMENT\">Stopped Treatment</mat-option>\n                                        <mat-option value=\"KNOWN_DEATH\">Known Death</mat-option>\n                                        <mat-option value=\"Currently Active\">Currently Active</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <h5>Date of Current Status</h5>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>From</mat-label>\n                                    <input matInput [matDatepicker]=\"picker1\"\n                                           [max]=\"today\"\n                                           [(ngModel)]=\"params.dateCurrentStatusBegin\"\n                                           name=\"date1\">\n                                    <mat-datepicker-toggle\n                                            matSuffix\n                                            [for]=\"picker1\">\n                                    </mat-datepicker-toggle>\n                                    <mat-datepicker #picker1></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>To</mat-label>\n                                    <input matInput [matDatepicker]=\"picker2\"\n                                           [(ngModel)]=\"params.dateCurrentStatusEnd\"\n                                           [max]=\"today\"\n                                           name=\"date2\">\n                                    <mat-datepicker-toggle\n                                            matSuffix\n                                            [for]=\"picker2\">\n                                    </mat-datepicker-toggle>\n                                    <mat-datepicker #picker2></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>Regimen Line</mat-label>\n                                    <mat-select name=\"regimenType\" [(ngModel)]=\"params.regimenType\">\n                                        <mat-option></mat-option>\n                                        <mat-option *ngFor=\"let type of regimenTypes\"\n                                                    [value]=\"type.description\">{{type.description}}</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <h5>Date of Registration</h5>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>From</mat-label>\n                                    <input matInput [matDatepicker]=\"picker3\"\n                                           [max]=\"today\"\n                                           [(ngModel)]=\"params.dateRegistrationBegin\"\n                                           name=\"date3\">\n                                    <mat-datepicker-toggle\n                                            matSuffix\n                                            [for]=\"picker3\">\n                                    </mat-datepicker-toggle>\n                                    <mat-datepicker #picker3></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>To</mat-label>\n                                    <input matInput [matDatepicker]=\"picker4\"\n                                           [max]=\"today\"\n                                           [(ngModel)]=\"params.dateRegistrationEnd\"\n                                           name=\"date4\">\n                                    <mat-datepicker-toggle\n                                            matSuffix\n                                            [for]=\"picker4\">\n                                    </mat-datepicker-toggle>\n                                    <mat-datepicker #picker4></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <h5>ART Start Date</h5>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>From</mat-label>\n                                    <input matInput [matDatepicker]=\"picker5\"\n                                           [max]=\"today\"\n                                           [(ngModel)]=\"params.dateStartedBegin\"\n                                           name=\"date5\">\n                                    <mat-datepicker-toggle\n                                            matSuffix\n                                            [for]=\"picker5\">\n                                    </mat-datepicker-toggle>\n                                    <mat-datepicker #picker5></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>To</mat-label>\n                                    <input matInput [matDatepicker]=\"picker6\"\n                                           [max]=\"today\"\n                                           [(ngModel)]=\"params.dateStartedEnd\"\n                                           name=\"date6\">\n                                    <mat-datepicker-toggle\n                                            matSuffix\n                                            [for]=\"picker6\">\n                                    </mat-datepicker-toggle>\n                                    <mat-datepicker #picker6></mat-datepicker>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <mat-form-field class=\"full-width\">\n                                    <mat-label>Current Clinical Stage</mat-label>\n                                    <mat-select name=\"clinicStage\" [(ngModel)]=\"params.clinicStage\">\n                                        <mat-option></mat-option>\n                                        <mat-option value=\"Stage I\">Stage I</mat-option>\n                                        <mat-option value=\"Stage II\">Stage II</mat-option>\n                                        <mat-option value=\"Stage III\">Stage III</mat-option>\n                                        <mat-option value=\"Stage IV\">Stage IV</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </div>\n                        </div>\n                        <fieldset>\n                            <h5>Viral Load</h5>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <h5>Last Viral Load</h5>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"full-width\">\n                                        <mat-label>From</mat-label>\n                                        <input matInput name=\"viralLoadBegin\" type=\"number\"\n                                               [(ngModel)]=\"params.viralLoadBegin\"/>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"full-width\">\n                                        <mat-label>To</mat-label>\n                                        <input matInput name=\"viralLoadEnd\" type=\"number\"\n                                               [(ngModel)]=\"params.viralLoadEnd\"/>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                    <h5>Date of Last Viral Load</h5>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"full-width\">\n                                        <mat-label>From</mat-label>\n                                        <input matInput [matDatepicker]=\"picker7\"\n                                               [max]=\"today\"\n                                               [(ngModel)]=\"params.dateLastViralLoadBegin\"\n                                               name=\"date7\">\n                                        <mat-datepicker-toggle\n                                                matSuffix\n                                                [for]=\"picker7\">\n                                        </mat-datepicker-toggle>\n                                        <mat-datepicker #picker7></mat-datepicker>\n                                    </mat-form-field>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <mat-form-field class=\"full-width\">\n                                        <mat-label>To</mat-label>\n                                        <input matInput [matDatepicker]=\"picker8\"\n                                               [max]=\"today\"\n                                               [(ngModel)]=\"params.dateLastViralLoadEnd\"\n                                               name=\"date8\">\n                                        <mat-datepicker-toggle\n                                                matSuffix\n                                                [for]=\"picker8\">\n                                        </mat-datepicker-toggle>\n                                        <mat-datepicker #picker8></mat-datepicker>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                        </fieldset>\n                    </fieldset>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <label id=\"label\">Output format</label>\n                            <mat-radio-group [(ngModel)]=\"params.format\" name=\"format\" aria-labelledby=\"label\" class=\"radio-group\">\n                                <mat-radio-button [value]=\"'PDF'\" class=\"radio-button\">PDF</mat-radio-button>\n                                <mat-radio-button [value]=\"'xlsx'\" class=\"radio-button\">Excel</mat-radio-button>\n                            </mat-radio-group>\n                        </div>\n                    </div>\n                    <mat-card-actions>\n                        <button mat-raised-button color=\"primary\"\n                                [disabled]=\"running || !facility\">Generate Report\n                        </button>\n                    </mat-card-actions>\n                </mat-card-content>\n            </mat-card>\n        </form>\n    </div>\n</div>\n",
        styles: [".radio-group{display:flex;flex-direction:column;margin:15px 0}.radio-button{margin:5px}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ReportService, RxStompService])
], PatientLineListComponent);
export { PatientLineListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC1saW5lLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGFtaXMtcmVwb3J0aW5nLTEuMi4wLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvcGF0aWVudC1saW5lLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQztBQUc3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFFbEMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBT3ZCLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBWWpDLFlBQW9CLE9BQXNCLEVBQVUsWUFBNEI7UUFBNUQsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFnQjtRQVhoRixXQUFNLEdBQTJCLEVBQUUsQ0FBQztRQU1wQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsVUFBSyxHQUFHLE1BQU0sRUFBRSxDQUFDO1FBQ2pCLFlBQU8sR0FBUSxTQUFTLENBQUM7SUFHekIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMs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ZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWNpbGl0eSB9IGZyb20gJy4vYXJ0LXN1bW1hcnkuY29tcG9uZW50JztcbmltcG9ydCB7IHNhdmVBcyB9IGZyb20gJ2ZpbGUtc2F2ZXInO1xuaW1wb3J0IHsgUmVwb3J0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JlcG9ydC5zZXJ2aWNlJztcbmltcG9ydCB7IFJ4U3RvbXBTZXJ2aWNlIH0gZnJvbSAnQHN0b21wL25nMi1zdG9tcGpzJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdAc3RvbXAvc3RvbXBqcyc7XG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAncmVwb3J0LXBhdGllbnQtbGluZS1saXN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vcGF0aWVudC1saW5lLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3BhdGllbnQtbGluZS1saXN0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGF0aWVudExpbmVMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHBhcmFtczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xuICAgIHN0YXRlczogYW55W107XG4gICAgcmVnaW1lblR5cGVzOiBhbnlbXTtcbiAgICBsZ2FzOiBhbnlbXTtcbiAgICBwcml2YXRlIHRvcGljU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgZmFjaWxpdHk6IEZhY2lsaXR5O1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBmaW5pc2hlZCA9IGZhbHNlO1xuICAgIHRvZGF5ID0gbW9tZW50KCk7XG4gICAgbWVzc2FnZTogYW55ID0gJ1J1bm5pbmcnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlLCBwcml2YXRlIHN0b21wU2VydmljZTogUnhTdG9tcFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmdldEFjdGl2ZUZhY2lsaXR5KCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmZhY2lsaXR5ID0gcmVzO1xuICAgICAgICAgICAgdGhpcy5wYXJhbXNbJ2ZhY2lsaXR5SWQnXSA9IHRoaXMuZmFjaWxpdHkuaWQ7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvcGljU3Vic2NyaXB0aW9uID0gdGhpcy5zdG9tcFNlcnZpY2Uud2F0Y2goJy90b3BpYy9wYXRpZW50LWxpbmUtbGlzdC9zdGF0dXMnKS5zdWJzY3JpYmUoKG1zZzogTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1zZy5ib2R5ID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ1J1bm5pbmcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChtc2cuYm9keSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnRmluaXNoZWQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtc2cuYm9keTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZmluaXNoZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2VydmljZS5nZXRTdGF0ZXMoKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuc3RhdGVzID0gcmVzKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlLmdldFJlZ2ltZW5UeXBlcygpLnN1YnNjcmliZShyZXMgPT4gdGhpcy5yZWdpbWVuVHlwZXMgPSByZXMpO1xuICAgIH1cblxuICAgIHN0YXRlQ2hhbmdlZChzdGF0ZSkge1xuICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUuaWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZS5nZXRMZ2FzQnlTdGF0ZShzdGF0ZS5pZCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxnYXMgPSByZXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb252ZXJ0KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VydmljZS5wYXRpZW50TGluZUxpc3QodGhpcy5wYXJhbXMpLnN1YnNjcmliZSgocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGZvcm1hdCA9IHRoaXMucGFyYW1zLmZvcm1hdCA9PT0gJ3hsc3gnID8gJ3hsc3gnIDogJ3BkZic7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gbmV3IEZpbGUoW3Jlc10sIGAke3RoaXMuZmFjaWxpdHkubmFtZX1fUGF0aWVudF9MaW5lX0xpc3QuJHtmb3JtYXR9YCwge3R5cGU6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nfSk7XG4gICAgICAgICAgICBzYXZlQXMoZmlsZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9waWNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKVxuICAgIH1cbn1cbiJdfQ==