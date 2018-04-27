import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { ApiResponse } from '../models/apiresponse';
import { ApiProject } from '../models/apiproject';
import { ApiRegion, REGIONS } from '../models/apiregion';

@Injectable()
export class ProjectService {
  private BASE_URL: string = 'http://api.localhost:8080/v0';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});
  private projectsUrl = this.BASE_URL + '/projects';

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<ApiProject[]> {
    return this.http.get<ApiResponse>(this.projectsUrl).pipe(
      map(response => response.Result)
    );
  }

  getProjectRegions(id: number): Observable<ApiRegion[]> {
    return of(REGIONS);
  }
}
