import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Formulario!: FormGroup;

  constructor(private form: FormBuilder) {

  }

  ngOnInit() {
    this.crearFormLogin();
  }

  crearFormLogin() {
    this.Formulario = this.form.group({
      User: ['', Validators.required],
      Password: ['', Validators.required]
    })
  }

  login() {
    const login: any = {
      User: this.Formulario.value.User,
      Password: this.Formulario.value.Password
    } 

    console.log(login)
  }
}
