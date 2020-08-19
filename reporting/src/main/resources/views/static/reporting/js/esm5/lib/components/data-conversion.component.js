import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';
import { RxStompService } from '@stomp/ng2-stompjs';
import { ReportService } from '../services/report.service';
import { saveAs } from 'file-saver';
import { catchError } from 'rxjs/operators';
var DataConversionComponent = /** @class */ (function () {
    function DataConversionComponent(stompService, reportService) {
        this.stompService = stompService;
        this.reportService = reportService;
        this.running = false;
        this.message = 'Running';
        this.finished = false;
        this.selectedFacilities = [];
    }
    DataConversionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.topicSubscription = this.stompService.watch('/topic/data-conversion/status').subscribe(function (msg) {
            if (msg.body === 'start') {
                _this.running = true;
            }
            else if (msg.body === 'end') {
                _this.running = false;
                _this.finished = true;
                _this.message = 'Finished';
            }
            else {
                _this.message = msg.body;
                _this.running = true;
            }
        });
        this.reportService.listFacilities().subscribe(function (res) { return _this.facilities = res; });
        this.reportService.labTest().subscribe(function (res) { return _this.labTests = res; });
    };
    DataConversionComponent.prototype.ngOnDestroy = function () {
        this.topicSubscription.unsubscribe();
    };
    DataConversionComponent.prototype.convert = function () {
        var _this = this;
        this.running = true;
        this.finished = false;
        console.log('Params 1', this.selectedFacilities, this.report, this.labTest);
        this.reportService.convertData(this.selectedFacilities, this.report, this.labTest).pipe(catchError(function (err) {
            _this.running = false;
            _this.finished = true;
            return EMPTY;
        })).subscribe(function (res) {
            _this.running = false;
            _this.finished = true;
            var name = _this.report === 1 ? 'Patient Data' : _this.report === 2 ? 'Clinic Data' : 'Laboratory Data';
            var file = new File([res], name + ".xlsx", { type: 'application/octet-stream' });
            saveAs(file);
        });
    };
    DataConversionComponent.ctorParameters = function () { return [
        { type: RxStompService },
        { type: ReportService }
    ]; };
    DataConversionComponent = tslib_1.__decorate([
        Component({
            selector: 'data-conversion',
            template: "<div class=\"lamis-edit-form\">\n    <div class=\"lamis-edit-form-container\">\n        <form name=\"form\" role=\"form\" novalidate (ngSubmit)=\"convert()\" #pharmacyForm=\"ngForm\">\n            <mat-card class=\"default\">\n                <mat-card-header>\n                    <ng-container *ngIf=\"running\">\n                        <div class=\"full-width\">\n                            <mat-progress-bar class=\"full-width\" mode=\"indeterminate\"></mat-progress-bar>\n                            <mat-form-field class=\"full-width\">\n                                <input [disabled]=\"true\" matInput [value]=\"message\"/>\n                            </mat-form-field>\n                        </div>\n                    </ng-container>\n                    <ng-container *ngIf=\"finished\">\n                        <div class=\"full-width\">\n                            <mat-form-field class=\"full-width\">\n                                <input [disabled]=\"true\" matInput [value]=\"message\"/>\n                            </mat-form-field>\n                        </div>\n                    </ng-container>\n                </mat-card-header>\n                <mat-card-content>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <mat-form-field class=\"full-width\">\n                                <mat-label>Facilities</mat-label>\n                                <mat-select multiple [(ngModel)]=\"selectedFacilities\"\n                                            name=\"facility\"\n                                            #facility=\"ngModel\"\n                                            required>\n                                    <mat-option *ngFor=\"let f of facilities\" [value]=\"f.id\">{{f.name}}</mat-option>\n                                </mat-select>\n                                <mat-error\n                                        *ngIf=\"facility.errors && (facility.dirty || facility.touched) && (facility.errors.required)\">\n                                    At least 1 facility is required\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <mat-form-field class=\"full-width\">\n                                <mat-label>Data Type</mat-label>\n                                <mat-select [(ngModel)]=\"report\"\n                                            name=\"report\"\n                                            #r=\"ngModel\"\n                                            required>\n                                    <mat-option>Select...</mat-option>\n                                    <mat-option [value]=\"1\">Patient Data</mat-option>\n                                    <mat-option [value]=\"2\">Clinic Data</mat-option>\n                                    <mat-option [value]=\"3\">Laboratory Data</mat-option>\n                                </mat-select>\n                                <mat-error\n                                        *ngIf=\"r.errors && (r.dirty || r.touched) && (r.errors.required)\">\n                                    Please select data type\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <mat-form-field class=\"full-width\" *ngIf=\"report === 3\">\n                                <mat-label>Lab Test</mat-label>\n                                <mat-select [(ngModel)]=\"labTest\"\n                                            name=\"test\"\n                                            #test=\"ngModel\"\n                                            required>\n                                    <mat-option>Select...</mat-option>\n                                    <mat-option *ngFor=\"let f of labTests\" [value]=\"f.id\">{{f.description}}</mat-option>\n                                </mat-select>\n                                <mat-error\n                                        *ngIf=\"test.errors && (test.dirty || test.touched) && (test.errors.required)\">\n                                    Please select a Lab Test\n                                </mat-error>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <mat-divider></mat-divider>\n                    <mat-card-actions>\n                        <button mat-raised-button color=\"primary\" [disabled]=\"running || pharmacyForm.invalid\">Convert</button>\n                    </mat-card-actions>\n                </mat-card-content>\n            </mat-card>\n        </form>\n    </div>\n</div>\n"
        }),
        tslib_1.__metadata("design:paramtypes", [RxStompService, ReportService])
    ], DataConversionComponent);
    return DataConversionComponent;
}());
export { DataConversionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1jb252ZXJzaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbWlzLXJlcG9ydGluZy0xLjIuMC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RhdGEtY29udmVyc2lvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNwQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNNUM7SUFXSSxpQ0FBb0IsWUFBNEIsRUFBVSxhQUE0QjtRQUFsRSxpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVR0RixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBUSxTQUFTLENBQUM7UUFDekIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQix1QkFBa0IsR0FBVSxFQUFFLENBQUM7SUFNL0IsQ0FBQztJQUVELDBDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxHQUFZO1lBQ3JHLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQ3RCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO2FBQ3RCO2lCQUFNLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7Z0JBQzNCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2dCQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsS0FBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7YUFDN0I7aUJBQU07Z0JBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUN4QixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUN2QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQW5CLENBQW1CLENBQUMsQ0FBQTtJQUN0RSxDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUN4QyxDQUFDO0lBRUQseUNBQU8sR0FBUDtRQUFBLGlCQWdCQztRQWZHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNuRixVQUFVLENBQUMsVUFBQyxHQUFRO1lBQ2hCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE9BQU8sS0FBSyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsR0FBRztZQUNsQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLElBQUksR0FBRyxLQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUN0RyxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFLLElBQUksVUFBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLDBCQUEwQixFQUFDLENBQUMsQ0FBQztZQUNqRixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDOztnQkF6Q2lDLGNBQWM7Z0JBQXlCLGFBQWE7O0lBWDdFLHVCQUF1QjtRQUpuQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLGs0SkFBK0M7U0FDbEQsQ0FBQztpREFZb0MsY0FBYyxFQUF5QixhQUFhO09BWDdFLHVCQUF1QixDQXNEbkM7SUFBRCw4QkFBQztDQUFBLEFBdERELElBc0RDO1NBdERZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVNUFRZLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJ4U3RvbXBTZXJ2aWNlIH0gZnJvbSAnQHN0b21wL25nMi1zdG9tcGpzJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdAc3RvbXAvc3RvbXBqcyc7XG5pbXBvcnQgeyBSZXBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmVwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RhdGEtY29udmVyc2lvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2RhdGEtY29udmVyc2lvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgRGF0YUNvbnZlcnNpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSB0b3BpY1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICBtZXNzYWdlOiBhbnkgPSAnUnVubmluZyc7XG4gICAgZmluaXNoZWQgPSBmYWxzZTtcbiAgICBmYWNpbGl0aWVzOiBhbnlbXTtcbiAgICBzZWxlY3RlZEZhY2lsaXRpZXM6IGFueVtdID0gW107XG4gICAgcmVwb3J0OiBudW1iZXI7XG4gICAgbGFiVGVzdDogYW55O1xuICAgIGxhYlRlc3RzOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RvbXBTZXJ2aWNlOiBSeFN0b21wU2VydmljZSwgcHJpdmF0ZSByZXBvcnRTZXJ2aWNlOiBSZXBvcnRTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudG9waWNTdWJzY3JpcHRpb24gPSB0aGlzLnN0b21wU2VydmljZS53YXRjaCgnL3RvcGljL2RhdGEtY29udmVyc2lvbi9zdGF0dXMnKS5zdWJzY3JpYmUoKG1zZzogTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG1zZy5ib2R5ID09PSAnc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtc2cuYm9keSA9PT0gJ2VuZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSAnRmluaXNoZWQnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtc2cuYm9keTtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlcG9ydFNlcnZpY2UubGlzdEZhY2lsaXRpZXMoKS5zdWJzY3JpYmUocmVzID0+IHRoaXMuZmFjaWxpdGllcyA9IHJlcyk7XG4gICAgICAgIHRoaXMucmVwb3J0U2VydmljZS5sYWJUZXN0KCkuc3Vic2NyaWJlKHJlcyA9PiB0aGlzLmxhYlRlc3RzID0gcmVzKVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvcGljU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKClcbiAgICB9XG5cbiAgICBjb252ZXJ0KCkge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKCdQYXJhbXMgMScsIHRoaXMuc2VsZWN0ZWRGYWNpbGl0aWVzLCB0aGlzLnJlcG9ydCwgdGhpcy5sYWJUZXN0KTtcbiAgICAgICAgdGhpcy5yZXBvcnRTZXJ2aWNlLmNvbnZlcnREYXRhKHRoaXMuc2VsZWN0ZWRGYWNpbGl0aWVzLCB0aGlzLnJlcG9ydCwgdGhpcy5sYWJUZXN0KS5waXBlKFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgICAgICB9KSkuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IHRoaXMucmVwb3J0ID09PSAxID8gJ1BhdGllbnQgRGF0YScgOiB0aGlzLnJlcG9ydCA9PT0gMiA/ICdDbGluaWMgRGF0YScgOiAnTGFib3JhdG9yeSBEYXRhJztcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShbcmVzXSwgYCR7bmFtZX0ueGxzeGAsIHt0eXBlOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJ30pO1xuICAgICAgICAgICAgc2F2ZUFzKGZpbGUpO1xuICAgICAgICB9KVxuICAgIH1cblxufVxuIl19