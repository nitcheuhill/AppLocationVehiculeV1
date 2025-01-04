// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/auth';  // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/reset-password`, { email });
  }

  registerUser(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, formData);
  }
}
