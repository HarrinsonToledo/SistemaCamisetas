import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoContainer } from '../interfaces/CarritoContainer';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  valorTotal: number = 0;

  constructor(private route: ActivatedRoute, public carrito:CarritoContainer) {}

    ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.valorTotal = params['total'] || 0;
    });
  }
}
