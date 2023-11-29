import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  Formulario!: FormGroup;

  constructor(private form: FormBuilder, private user: UserService) {
    
  }

  ngOnInit() {
    this.crearFormRegistrer();
  }

  crearFormRegistrer() {
    this.Formulario = this.form.group({
      Cedula: ['', Validators.required],
      Nombres: ['', Validators.required],
      Apellidos: ['', Validators.required],
      Fecha: ['', Validators.required],
      Telefono: ['', Validators.required],
      Direccion: ['', Validators.required],
      Email: ['', Validators.email],
      Password: ['', Validators.required],
    })
  }

  registrar() {
    console.log(this.Formulario.value)

    const data = {
      cedula: String(this.Formulario.value.Cedula),
      nombre: this.Formulario.value.Nombres,
      apellido: this.Formulario.value.Apellidos,
      fechaNacimiento: this.Formulario.value.Fecha,
      telefono: String(this.Formulario.value.Telefono),
      direccion: this.Formulario.value.Direccion,
      correo: this.Formulario.value.Email,
      password: this.Formulario.value.Password,
      fk_rol_user: '1'
    }

    this.user.registrar(data);
  }
}
