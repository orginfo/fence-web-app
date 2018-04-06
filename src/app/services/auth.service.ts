import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  private BASE_URL: string = 'http://api.localhost:8080/v0';
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getRegionTypes(): Observable<any> {
    const url = `${this.BASE_URL}/region_types`;
    return this.http.get(url).pipe(
      tap(_ => console.log(`fetched data`)),
    );
  }

  login(user): Promise<any> {
    let url: string = `${this.BASE_URL}/region_types`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

  register(user): Promise<any> {
    let url: string = `${this.BASE_URL}/register`;
    return this.http.post(url, user, {headers: this.headers}).toPromise();
  }

  test(): string {
    return 'working';
  }

}
