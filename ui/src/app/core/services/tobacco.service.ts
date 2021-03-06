import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Tobacco} from "../dto/tobacco/tobacco";
import {CreateTobacco} from "../dto/tobacco/create-tobacco.dto";

@Injectable({
  providedIn: 'root'
})
export class TobaccoService {

  readonly rootUrl = environment.apiUrl + 'tobacco';

  constructor(private http: HttpClient) { }

  public create(data: CreateTobacco): Observable<void> {
    return this.http.post<void>(this.rootUrl, data);
  }

  public getAll(): Observable<Array<Tobacco>> {
    return this.http.get<Array<Tobacco>>(this.rootUrl);
  }

  public getByBrandId(brandId: string): Observable<Array<Tobacco>> {
    return this.http.get<Array<Tobacco>>(this.rootUrl + `/brand/${brandId}`);
  }

  public getAllById(id: string): Observable<Tobacco> {
    return this.http.get<Tobacco>(this.rootUrl + `/${id}`);
  }

}
