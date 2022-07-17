import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Brand} from "../dto/brand/brand";
import {CreateBrand} from "../dto/brand/create-brand.dto";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  readonly rootUrl = environment.apiUrl + 'brand';

  constructor(private http: HttpClient) { }

  public create(data: CreateBrand): Observable<void> {
    return this.http.post<void>(this.rootUrl, data);
  }

  public createWithDependencies(data: CreateBrand): Observable<void> {
    return this.http.post<void>(this.rootUrl + '/createWithDependencies', data);
  }

  // public update(data: UpdateBrand): Observable<any> {
  //   return this.http.put<any>(this.rootUrl, data);
  // }

  public delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.rootUrl}/${id}`);
  }

  public getAll(): Observable<Array<Brand>> {
    return this.http.get<Array<Brand>>(this.rootUrl);
  }

  public getById(id: string): Observable<Brand> {
    return this.http.get<Brand>(this.rootUrl + `/${id}`);
  }

}
