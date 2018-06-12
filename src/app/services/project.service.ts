import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiResponse } from '../models/apiresponse';
import { ApiProject } from '../models/apiproject';
import { ApiRegion, REGIONS } from '../models/apiregion';

@Injectable({
  providedIn: 'root'
})
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

  sendProject(url: string, method: string, project: any) {
    let params: HttpParams = new HttpParams()
      .set('method', method)
      .set('nr', project.nr)
      .set('contract_date', project.contractDate)
      .set('install_date', project.installDate)
      .set('address', project.address)
      .set('comment', project.comment);

    return this.http.get<any>(url, {params: params}).pipe(
      map(response => response.Result)
    );
  }

  addProject(project: any): Observable<any> {
    let url: string = `${this.BASE_URL}/clients/${project.clientId}/projects/`;
    return this.sendProject(url, 'put', project);
  }
}
