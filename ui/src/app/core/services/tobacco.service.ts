import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Tobacco} from "../dto/tobacco";

@Injectable({
  providedIn: 'root'
})
export class TobaccoService {

  readonly rootUrl = environment.apiUrl + 'tobacco';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Tobacco>> {
    return this.http.get<Array<Tobacco>>(this.rootUrl);
  }

  public getAllByBrandId(brandId: string): Observable<Array<Tobacco>> {
    return this.http.get<Array<Tobacco>>(this.rootUrl + `/getAllByBrandId/${brandId}`);
  }

  public getAllById(id: string): Observable<Tobacco> {
    return this.http.get<Tobacco>(this.rootUrl + `/${id}`);
  }

}
