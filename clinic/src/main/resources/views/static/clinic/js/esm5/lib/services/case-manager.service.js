import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { createRequestOption, SERVER_API_URL_CONFIG } from '@lamis/web-core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@lamis/web-core";
var CaseManagerService = /** @class */ (function () {
    function CaseManagerService(http, serverUrl) {
        this.http = http;
        this.serverUrl = serverUrl;
        this.resourceUrl = '';
        this.resourceUrl = serverUrl.SERVER_API_URL + '/api/case-managers';
    }
    CaseManagerService.prototype.create = function (caseManager) {
        return this.http
            .post(this.resourceUrl, caseManager, { observe: 'response' });
    };
    CaseManagerService.prototype.update = function (caseManager) {
        return this.http
            .put(this.resourceUrl, caseManager, { observe: 'response' });
    };
    CaseManagerService.prototype.find = function (id) {
        return this.http
            .get(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    CaseManagerService.prototype.findByUuid = function (id) {
        return this.http
            .get(this.resourceUrl + "/by-uuid/" + id, { observe: 'response' });
    };
    CaseManagerService.prototype.delete = function (id) {
        return this.http.delete(this.resourceUrl + "/" + id, { observe: 'response' });
    };
    CaseManagerService.prototype.query = function (req) {
        var options = createRequestOption(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' });
    };
    CaseManagerService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [SERVER_API_URL_CONFIG,] }] }
    ]; };
    CaseManagerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CaseManagerService_Factory() { return new CaseManagerService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.SERVER_API_URL_CONFIG)); }, token: CaseManagerService, providedIn: "root" });
    CaseManagerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__param(1, Inject(SERVER_API_URL_CONFIG)),
        tslib_1.__metadata("design:paramtypes", [HttpClient, Object])
    ], CaseManagerService);
    return CaseManagerService;
}());
export { CaseManagerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS1tYW5hZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYW1pcy1jbGluaWMtMS4yLjAvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvY2FzZS1tYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHFCQUFxQixFQUFzQixNQUFNLGlCQUFpQixDQUFDOzs7O0FBT2pHO0lBR0ksNEJBQXNCLElBQWdCLEVBQXlDLFNBQTZCO1FBQXRGLFNBQUksR0FBSixJQUFJLENBQVk7UUFBeUMsY0FBUyxHQUFULFNBQVMsQ0FBb0I7UUFGckcsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFHcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsY0FBYyxHQUFHLG9CQUFvQixDQUFDO0lBQ3ZFLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sV0FBd0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBYyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sV0FBd0I7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNYLEdBQUcsQ0FBYyxJQUFJLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUFFRCxpQ0FBSSxHQUFKLFVBQUssRUFBVTtRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDWCxHQUFHLENBQWlCLElBQUksQ0FBQyxXQUFXLFNBQUksRUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDWCxHQUFHLENBQWlCLElBQUksQ0FBQyxXQUFXLGlCQUFZLEVBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFRCxtQ0FBTSxHQUFOLFVBQU8sRUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQVMsSUFBSSxDQUFDLFdBQVcsU0FBSSxFQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLEdBQVM7UUFDWCxJQUFNLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ1gsR0FBRyxDQUFnQixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDOztnQkFoQzJCLFVBQVU7Z0RBQUcsTUFBTSxTQUFDLHFCQUFxQjs7O0lBSDVELGtCQUFrQjtRQUg5QixVQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO1FBSTJDLG1CQUFBLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO2lEQUExQyxVQUFVO09BSDdCLGtCQUFrQixDQW9DOUI7NkJBN0NEO0NBNkNDLEFBcENELElBb0NDO1NBcENZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgY3JlYXRlUmVxdWVzdE9wdGlvbiwgU0VSVkVSX0FQSV9VUkxfQ09ORklHLCBTZXJ2ZXJBcGlVcmxDb25maWcgfSBmcm9tICdAbGFtaXMvd2ViLWNvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FzZU1hbmFnZXIgfSBmcm9tICcuLi9tb2RlbC9jYXNlLW1hbmFnZW1lbnQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENhc2VNYW5hZ2VyU2VydmljZSB7XG4gICAgcHVibGljIHJlc291cmNlVXJsID0gJyc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCwgQEluamVjdChTRVJWRVJfQVBJX1VSTF9DT05GSUcpIHByaXZhdGUgc2VydmVyVXJsOiBTZXJ2ZXJBcGlVcmxDb25maWcpIHtcbiAgICAgICAgdGhpcy5yZXNvdXJjZVVybCA9IHNlcnZlclVybC5TRVJWRVJfQVBJX1VSTCArICcvYXBpL2Nhc2UtbWFuYWdlcnMnO1xuICAgIH1cblxuICAgIGNyZWF0ZShjYXNlTWFuYWdlcjogQ2FzZU1hbmFnZXIpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxDYXNlTWFuYWdlcj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnBvc3Q8Q2FzZU1hbmFnZXI+KHRoaXMucmVzb3VyY2VVcmwsIGNhc2VNYW5hZ2VyLCB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xuICAgIH1cblxuICAgIHVwZGF0ZShjYXNlTWFuYWdlcjogQ2FzZU1hbmFnZXIpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxDYXNlTWFuYWdlcj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnB1dDxDYXNlTWFuYWdlcj4odGhpcy5yZXNvdXJjZVVybCwgY2FzZU1hbmFnZXIsIHtvYnNlcnZlOiAncmVzcG9uc2UnfSlcbiAgICB9XG5cbiAgICBmaW5kKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxDYXNlTWFuYWdlcj4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLmdldDxDYXNlTWFuYWdlcj4oYCR7dGhpcy5yZXNvdXJjZVVybH0vJHtpZH1gLCB7b2JzZXJ2ZTogJ3Jlc3BvbnNlJ30pO1xuICAgIH1cblxuICAgIGZpbmRCeVV1aWQoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPENhc2VNYW5hZ2VyPj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgICAgICAuZ2V0PENhc2VNYW5hZ2VyPihgJHt0aGlzLnJlc291cmNlVXJsfS9ieS11dWlkLyR7aWR9YCwge29ic2VydmU6ICdyZXNwb25zZSd9KTtcbiAgICB9XG5cbiAgICBkZWxldGUoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8SHR0cFJlc3BvbnNlPGFueT4+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55PihgJHt0aGlzLnJlc291cmNlVXJsfS8ke2lkfWAsIHtvYnNlcnZlOiAncmVzcG9uc2UnfSk7XG4gICAgfVxuXG4gICAgcXVlcnkocmVxPzogYW55KTogT2JzZXJ2YWJsZTxIdHRwUmVzcG9uc2U8Q2FzZU1hbmFnZXJbXT4+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IGNyZWF0ZVJlcXVlc3RPcHRpb24ocmVxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAgICAgLmdldDxDYXNlTWFuYWdlcltdPih0aGlzLnJlc291cmNlVXJsLCB7cGFyYW1zOiBvcHRpb25zLCBvYnNlcnZlOiAncmVzcG9uc2UnfSk7XG4gICAgfVxufVxuIl19