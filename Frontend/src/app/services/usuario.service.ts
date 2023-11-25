import { Injectable } from '@angular/core';
import * as Notiflix from 'notiflix';
import { environment } from 'src/environments/environment.development';
import { LoginState } from '../interfaces/LoginState';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myApiUrl: string
  private propeties: string
  private log: string

  constructor(private loginState: LoginState, private router: Router) { 
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
          console.log(data.user[0].nombre)
          this.loginState.createCookie(data.user[0].nombre, login.correo)
          this.loginState.setLoginState()
          this.router.navigate(['/'])
        } else {
          console.log(data)
        }
      })
      .catch((err) => {
        console.error(err);
      })
  }
}
