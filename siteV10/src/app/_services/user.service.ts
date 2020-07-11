import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../config';

import { User } from '../_models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<User> {
    this.http.get<User>(`${apiUrl}/users?username=${username}&password=${password}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${apiUrl}/users`);
  }

  register(user: User): Observable<object> {
    return this.http.post(`${apiUrl}/users/register`, user);
  }

  delete(id: number): Observable<object> {
    return this.http.delete(`${apiUrl}/users/${id}`);
  }
}
