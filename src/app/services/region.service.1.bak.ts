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
    //let f:string = region.notDefinedField; //ошибка компилятора
    let f:string = region["notDefinedField"]; //ни ошибки ни предупреждения, но хранит undefined

    const index: Map<string, number> = new Map([
      ["length", 0], //"user_name": "Длина участка, в м"
      ["thickness", 15], //"user_name": "Толщина профлиста, мм"
    ]);

    //index.keys

    let params: HttpParams = new HttpParams()
      .set('method', 'put')
      .set('region_type', '2'); //TODO: тип неверный
    index.forEach((idx: number, name: string) => {
      let value: number = region[name]; //TODO: обращаемся к объекту по []
      params = params.set('param', `${idx}(${value})`);
      console.log(`name=${name} index=${idx} value=${value}`);
    });

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
