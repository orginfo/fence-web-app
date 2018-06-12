import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ApiClient, CLIENTS } from '../models/apiclient';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor() { }

  searchClients(term: string): Observable<ApiClient[]> {
    if (!term.trim()) {
      return of([]);
    }

    let clients = CLIENTS.filter(client => client.name.search(term) != -1);
    return of(clients);
  }
}
