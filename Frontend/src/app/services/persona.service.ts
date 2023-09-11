import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../interfaces/Persona';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private myApiUrl: string
  private myAppUrl: string

  constructor(private http: HttpClient) { 
    this.myApiUrl = '/persona';
    this.myAppUrl = environment.endpoint;
  }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.myAppUrl}${this.myApiUrl}`)
  }
}
