import { Injectable } from '@angular/core';
import * as Notiflix from 'notiflix';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myApiUrl: string
  private propeties: string
  private log: string

  constructor() { 
    this.myApiUrl = environment.endpoint;
    this.propeties = '/user';
    this.log = '/login'
  }

  public async login(email: string, contraseña: string) {
    Notiflix.Loading.standard("Confirmando Credenciales")

    const login = {
      correo: email,
      password: contraseña
    } 

    const envia = {
      method: 'POST',
      body: JSON.stringify(login),
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "/",
        "Access-Control-Allow-Origin": "*",
        "mode": "no-cors",
        "referrerPolicy": "unsafe_url" 
      }),
    };

    await fetch(`${this.myApiUrl}${this.propeties}${this.log}`, envia)
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode == 404) {
          Notiflix.Loading.remove();
          Notiflix.Notify.warning("Error de autenticación");
        } else if (data.statusCode == 201) {
          Notiflix.Loading.remove();
          Notiflix.Notify.success("Usuario Logueado"); 
        } else {
          console.log(data) 
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }
}
