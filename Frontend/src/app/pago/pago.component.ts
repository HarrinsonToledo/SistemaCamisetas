import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoContainer } from '../interfaces/CarritoContainer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  valorTotal: number = 0;
  Formulario!: FormGroup;

  constructor(private route: ActivatedRoute, public carrito:CarritoContainer, private form: FormBuilder) {}

  ngOnInit() {
    this.crearForm()
    this.route.queryParams.subscribe(params => {
      this.valorTotal = params['total'] || 0;
    });
  }

  crearForm() {
    this.Formulario = this.form.group({
      Cedula: ['', Validators.required],
      Nombres: ['', Validators.required],
      Apellidos: ['', Validators.required],
      MedioPago: ['', Validators.required]
    })
  }

  pagar() {
    console.log(this.Formulario.value)
    Notiflix.Report.success("Factura Guardada", "Medio de Pago: " + this.Formulario.value.MedioPago, "ok");
  }
}
