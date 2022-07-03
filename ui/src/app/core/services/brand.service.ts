import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Tobacco} from "../dto/tobacco";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  readonly rootUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Tobacco>> {
    return this.http.get<Array<Tobacco>>(this.rootUrl + 'brand');
  }

}
