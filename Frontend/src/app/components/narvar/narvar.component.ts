import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Notiflix from 'notiflix';
import { ArrayCarrito, CarritoContainer } from 'src/app/interfaces/CarritoContainer';
import { LoginState } from 'src/app/interfaces/LoginState';

@Component({
  selector: 'app-narvar',
  templateUrl: './narvar.component.html',
  styleUrls: ['./narvar.component.css']
})
export class NarvarComponent {
  rows!: Array<ArrayCarrito>;
  valorTotal: number = 0

 constructor(public modal: NgbModal, private carrito: CarritoContainer, private login: LoginState, private root: Router) {
  this.rows = carrito.getCarrito();
 }

 ngOnInit() {
  this.updateWindow();
 }

 updateWindow() {
  this.rows = this.carrito.getCarrito();
  this.valorTotal = 0
  this.rows.forEach(dato => {
    this.valorTotal = this.valorTotal + (dato.cantidad * dato.datos[3])
  })
 }

 openMCenter(contenido: any) {
    this.updateWindow()
    this.modal.open(contenido, {size: 'lg', centered: true});
 }

 increCantidad(i: ArrayCarrito) {
  this.rows.find((item) => {
    if(i == item) {
      item.cantidad = item.cantidad + 1
    }
  })
  this.updateWindow()
 }

 decreCantidad(i: ArrayCarrito) {
  this.rows.find((item) => {
    if(i == item) {
      if(item.cantidad == 1) {
        Notiflix.Notify.warning("Cancela el producto (Cantidad = 1)")
      } else {
        item.cantidad = item.cantidad - 1
      }
    }
  })
  this.updateWindow()
 }

 deleteItem(i: ArrayCarrito) {
  this.carrito.deleteItem(i)
  this.rows = this.rows.filter(prod => prod != i);
  Notiflix.Notify.success("Producto " + i.datos[1] + " eleminada")
  this.updateWindow()
 }

 pagar() {
  if(this.login.getState()) {

  } else {
    Notiflix.Notify.warning("No te has iniciado sesión");
    this.root.navigate(['/login']);
  }
 }
}
