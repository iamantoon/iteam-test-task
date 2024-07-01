import { Injectable } from '@angular/core';
import { AuthUser, UserLogin } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'https://user-assessment-api.vercel.app/api/';

  constructor(private http: HttpClient){} 

  login(model: UserLogin){
    return this.http.post<AuthUser>(this.baseUrl + 'login', model);
  }
}