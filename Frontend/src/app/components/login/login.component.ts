import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Formulario!: FormGroup;

  constructor(private form: FormBuilder, private user: UserService) {

  }

  ngOnInit() {
    this.crearFormLogin();
  }

  crearFormLogin() {
    this.Formulario = this.form.group({
      Email: ['', Validators.email],
      Password: ['', Validators.required]
    })
  }

  login() {
    this.user.login(this.Formulario.value.Email, this.Formulario.value.Password);
  }
}
