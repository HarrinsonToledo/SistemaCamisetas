import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import * as Notiflix from 'notiflix';
import { LoginState } from 'src/app/interfaces/LoginState';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Formulario!: FormGroup;
  logining: LoginState;
  Usuario!: string;

  constructor(private form: FormBuilder, private user: UserService, private loginState: LoginState,
    private cookieService: CookieService) {
    this.logining = loginState

    if(cookieService.check('user')) {
      loginState.setLoginState()
    } else {
      loginState.logOut()
    }
  }

  ngOnInit() {
    this.crearFormLogin();

    this.Usuario = this.cookieService.get('user');
  }

  crearFormLogin() {
    this.Formulario = this.form.group({
      Email: ['', Validators.email],
      Password: ['', Validators.required]
    })
  }

  login() {
    this.user.login(this.Formulario.value.Email, this.Formulario.value.Password);
    this.Usuario = this.cookieService.get('user');
  }

  logout() {
    this.loginState.deleteCookie();
  }
}
