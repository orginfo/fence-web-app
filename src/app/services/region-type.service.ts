import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ApiRegionType, REGION_TYPES } from '../models/api-region-type';

@Injectable()
export class RegionTypeService {

  constructor() { }

  getRegionTypes(): Observable<ApiRegionType[]> {
    return of(REGION_TYPES);
  }
}
