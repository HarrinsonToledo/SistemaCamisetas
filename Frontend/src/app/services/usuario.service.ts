import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myApiUrl: string
  private myAppUrl: string
  private getRol: string

  constructor(private http: HttpClient) { 
    this.myApiUrl = '/user';
    this.myAppUrl = environment.endpoint;
    this.getRol = '/roles'
  }

  getUser(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.myAppUrl}${this.myApiUrl}${this.getRol}`)
  }
}
