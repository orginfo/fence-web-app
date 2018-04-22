import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ApiProject } from '../models/apiproject';
import { API_PROJECTS } from '../models/mock-projects';

@Injectable()
export class ProjectService {

  constructor() { }

  getAllProjects(): Observable<ApiProject[]> {
    return of(API_PROJECTS);
  }

}
