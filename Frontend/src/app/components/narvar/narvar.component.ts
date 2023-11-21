import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-narvar',
  templateUrl: './narvar.component.html',
  styleUrls: ['./narvar.component.css']
})
export class NarvarComponent {
  rango: number[];
  valorTotal: number = 0

 constructor(public modal: NgbModal) {
  this.rango = Array.from({ length: 12}, (_,i) => i + 1)
 }

 openMCenter(contenido: any) {
    this.modal.open(contenido, {size: 'lg', centered: true});
 }

 cambiarPrecio(numero: number) {
  this.valorTotal = numero;
 }
}
