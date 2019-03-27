import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import * as I from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class NetService {
  private url = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<Array<I.User>> {
    return this.http.get(this.url) as Observable<Array<I.User>>;
  }
}
