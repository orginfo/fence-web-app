import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ApiRegionType, REGION_TYPES } from '../models/api-region-type';

@Injectable({
  providedIn: 'root'
})
export class RegionTypeService {

  constructor() { }

  getRegionTypes(): Observable<ApiRegionType[]> {
    return of(REGION_TYPES);
  }
}
