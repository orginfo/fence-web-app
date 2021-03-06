import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RegionOfType2 } from '../models/region-of-type-2';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private BASE_URL: string = 'http://api.localhost:8080/v0';

  private fieldsOfType1: [number, string][] = [
    [0, "length"],
    [15, "thickness"]
  ];
  private fieldsOfType2: [number, string][] = [
    [0, "length"],
    [15, "thickness"]
  ];
  private fieldsByRegionType: Map<number, [number, string][]> = new Map([
    [1, this.fieldsOfType1],
    [2, this.fieldsOfType2],
  ]);

  constructor(private http: HttpClient) { }

  sendRegion(url: string, method: string, regionType: number, region: any) {
    let params: HttpParams = new HttpParams()
      .set('method', method)
      .set('region_type', regionType.toString());

    let fields = this.fieldsByRegionType.get(regionType);
    for (let field of fields) {
      let paramValue = region[field[1]];
      let paramIndex: number = field[0];
      params = params.append('param', `${paramIndex}(${paramValue})`);

      console.log(`index=${paramIndex} value=${paramValue}`);
    }

    return this.http.get<any>(url, {params: params}).pipe(
      map(response => response.Result)
    );
  }

  addRegion(projectId: number, regionType: number, region: any): Observable<any> {
    let url: string = `${this.BASE_URL}/projects/${projectId}/regions/`;
    return this.sendRegion(url, 'put', regionType, region);
  }

  updateRegion(projectId: number, regionType: number, regionId: number, region: any): Observable<any> {
    let url: string = `${this.BASE_URL}/projects/${projectId}/regions/${regionId}`;
    return this.sendRegion(url, 'post', regionType, region);
  }

  responseResultToRegion(result: any): any {
    let region = {};
    let regionType = result.region_type.id;
    let fields = this.fieldsByRegionType.get(regionType);
    for (let field of fields) {
      let paramIndex: number = field[0];
      let paramName: string = field[1];
      let paramValue = result.params[paramIndex].value;
      region[paramName] = paramValue;
      console.log(`index=${paramIndex} value=${paramValue}`);
    }
    return region;
  }

  getRegion(projectId: number, regionId: number): Observable<any> {
      let url: string = `${this.BASE_URL}/projects/${projectId}/regions/${regionId}`;
      return this.http.get<any>(url).pipe(
        map(response => this.responseResultToRegion(response.Result))
      );
  }

}
