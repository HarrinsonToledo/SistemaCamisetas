import { Component } from '@angular/core';
import * as Notiflix from 'notiflix';
import { CarritoContainer } from 'src/app/interfaces/CarritoContainer';
import { Modelos } from 'src/app/interfaces/Modelos';
import { ModelosServices } from 'src/app/services/modelos.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})

export class CustomComponent {
  datos!: Array<any>;
  selectedItem: any;
  selectedSize: string = '';
  selectedStamp: string = '';

  tallas: string[] = ['12', '14', '16', 'XS', 'S', 'M', 'L'];
  colores: string[] = ['red', 'blue', 'green'];

  constructor(private carrito: CarritoContainer, private modeloService: ModelosServices, private modelos: Modelos) {
    this.selectedItem = null;
  }

  formatearNumero(numeroString: string): string {
    const numero = parseFloat(numeroString);

    if (isNaN(numero)) {
      return "Número no válido";
    }

    const numeroFormateado = numero.toLocaleString('es-ES', {
      minimumFractionDigits: numero % 1 !== 0 ? 2 : 0,
      maximumFractionDigits: numero % 1 !== 0 ? 2 : 0
    });

    return `${numeroFormateado} COP`;
  }

  ngOnInit() {
    this.modeloService.getModelos().then(() => {
      this.datos = this.modelos.getDatos();
    });
  }

  seleccionarItem(item: any) {
    this.selectedItem = item;
    this.selectedSize = this.tallas[0]; 
    this.selectedStamp = this.colores[0]; 
  }

  addCamisa() {
    if (this.selectedItem && this.selectedSize && this.selectedStamp) {
      const { id, modelo, precio, url } = this.selectedItem;
      const precioFormateado = this.formatearNumero(String(precio));
      const camisa = [id, modelo, this.selectedSize, this.selectedStamp, precioFormateado, precio, url];
      Notiflix.Notify.success(`${modelo} Añadido`);
      this.carrito.addItem(camisa);
      this.resetSelections(); 
    } else {
      Notiflix.Notify.failure("Por favor, selecciona un artículo, talla y estampa antes de añadirlo al carrito.");
    }
  }

  resetSelections() {
    this.selectedItem = null;
    this.selectedSize = '';
    this.selectedStamp = '';
  }
}
