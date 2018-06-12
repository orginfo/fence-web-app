import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiClient } from '../models/apiclient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private BASE_URL: string = 'http://api.localhost:8080/v0';

  constructor(private httpClient: HttpClient) { }

  searchClients(term: string): Observable<ApiClient[]> {
    if (!term.trim()) {
      return of([]);
    }

    let url: string = `${this.BASE_URL}/clients`;
    return this.httpClient.get<any>(url).pipe(
      map(response => response.Result.filter(client => client.name.search(term) != -1)),
    );
  }
}
