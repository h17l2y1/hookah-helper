import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BrandLine} from "../dto/brand-line/brand-line";

@Injectable({
    providedIn: 'root'
})

export class BrandLineService {
    readonly rootUrl = environment.apiUrl + 'brandLine';

    constructor(private http: HttpClient) { }

    public getByBrandId(brandId: string): Observable<Array<BrandLine>> {
        return this.http.get<Array<BrandLine>>(`${this.rootUrl}/brand/${brandId}`);
    }
}
