import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
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
  valorTotal: number = 0;

  private modalRef!: NgbModalRef;

 constructor(public modal: NgbModal, private router: Router, private carrito: CarritoContainer, private login: LoginState, private root: Router,
  private cookieService: CookieService) {
  this.rows = carrito.getCarrito();

    if(cookieService.check('user')) {
      login.setLoginState()
    } else {
      login.logOut()
    }
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
    this.modalRef = this.modal.open(contenido, {size: 'lg', centered: true});
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
  if(this.rows == undefined || this.rows == null || this.rows.length == 0) {
    Notiflix.Notify.warning("No hay productos en tu carrito a pagar");
  } else if(this.login.getState()) {
    const valorTotal = this.valorTotal;
    if (this.modalRef) {
      this.modalRef.close();
    }
    this.router.navigate(['/pago'], { queryParams: { total: valorTotal } });
  } else if(!this.login.getState()) {
    Notiflix.Notify.warning("No te has iniciado sesión");
    if (this.modalRef) {
      this.modalRef.close();
    }
    this.root.navigate(['/login']);
  }
 }
}
