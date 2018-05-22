import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { RegionOfType2 } from '../models/region-of-type-2';

@Injectable()
export class RegionService {
  private BASE_URL: string = 'http://api.localhost:8080/v0';

  constructor(private http: HttpClient) { }

  getParamsFromRegionOfType2(region: RegionOfType2): HttpParams {
    debugger;
    const index: Map<string, number> = new Map([
      ["length", 0], //"user_name": "Длина участка, в м"
      ["thickness", 15], //"user_name": "Толщина профлиста, мм"
    ]);

    let lengthIndex = index.get("length");
    let lengthValue = region.length;
    let lengthParam = `${lengthIndex}(${lengthValue})`;

    let thicknessIndex = index.get("thickness");
    let thicknessValue = region.length;
    let thicknessParam = `${thicknessIndex}(${thicknessValue})`;

    let params: HttpParams = new HttpParams()
      .set('method', 'put')
      .set('region_type', '2') //TODO: тип неверный
      .set('param', lengthParam)
      .set('param', thicknessParam);

    return params;
  }

  addRegion(projectId: number, region: any): Observable<any> {
    debugger;
    const params: HttpParams =
      (region instanceof RegionOfType2) ? this.getParamsFromRegionOfType2(region) : null;
// MAYBE: другие альтернативы.
//    switch (region.constructor) {}
//    region instanceof RegionOfType2;

    debugger;
    let url: string = `${this.BASE_URL}/projects/${projectId}/regions`;
    return this.http.get<any>(url, {params: params}).pipe(
      map(response => response.Result)
    );
  }

}
