import { HttpClient } from "@angular/common/http";
import { ServerApiUrlConfig } from "@lamis/web-core";
import { Facility } from "../components/radet-converter.component";
import { Observable } from "rxjs";
export declare class RadetConverterService {
    private http;
    private serverUrl;
    resourceUrl: string;
    constructor(http: HttpClient, serverUrl: ServerApiUrlConfig);
    convert(start: Date, end: Date, reportingPeriod: Date, ids: number[], today: any): Observable<Object>;
    listFacilities(): Observable<Facility[]>;
    download(name: string): Observable<Blob>;
    listFiles(): Observable<string[]>;
}
