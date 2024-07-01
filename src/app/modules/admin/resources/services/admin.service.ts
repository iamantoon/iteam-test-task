import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private readonly baseUrl = 'https://user-assessment-api.vercel.app/api/users';

  constructor(private http: HttpClient) {}

  loadUsers(){
    return this.http.get<User[]>(this.baseUrl);
  }
}