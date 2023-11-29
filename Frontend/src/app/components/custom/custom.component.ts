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
  selectedSize: string = '';
  selectedStamp: string = '';
  selectedColor: string = '';

  tallas: string[] = ['12', '14', '16', 'XS', 'S', 'M', 'L'];
  colores: string[] = ['red', 'blue', 'green', 'yellow','purple','orange','pink'];
  estampas: string[] = ['stamp1', 'stamp2', 'stamp3'];

  precioEstampa: number = 0;
  precioColor: number = 0;
  precioTotal: number = 0;

  constructor(private carrito: CarritoContainer, private modeloService: ModelosServices, private modelos: Modelos) {
    this.selectedSize = '';
    this.selectedStamp = this.estampas[0]; // Establecer la primera estampa por defecto
    this.selectedColor = this.colores[0]; // Establecer el primer color por defecto
  }

  formatearNumero(numeroString: string): string {
    const numero = parseFloat(numeroString);

    if (isNaN(numero)) {
      return 'Número no válido';
    }

    const numeroFormateado = numero.toLocaleString('es-ES', {
      minimumFractionDigits: numero % 1 !== 0 ? 2 : 0,
      maximumFractionDigits: numero % 1 !== 0 ? 2 : 0
    });

    return `${numeroFormateado}`;
  }

  ngOnInit() {
    this.modeloService.getModelos().then(() => {
      this.datos = this.modelos.getDatos();
    });
  }

  seleccionarItem(item: any) {
    this.selectedSize = this.tallas[0];
    this.selectedStamp = this.estampas[0];
    this.selectedColor = this.colores[0];
  }

  addCamisa() {
    if (this.selectedSize !== '' && this.selectedStamp !== '' && this.selectedColor !== '') {
      this.calcularPrecios();
      const precioTotal = this.precioEstampa + this.precioColor+20000;
  
      const camisaDatos = [13, 'Camiseta personalizada', precioTotal, 1, [this.selectedSize, this.selectedStamp, this.selectedColor]];
  
      Notiflix.Notify.success('Camiseta personalizada añadida al carrito');
      this.carrito.addItem(camisaDatos);
  
      this.resetSelections();
    } else {
      Notiflix.Notify.failure('Por favor, selecciona talla, color y estampa antes de añadir al carrito.');
    }
  }
  
  

  calcularPrecios() {
    switch (this.selectedStamp) {
      case 'stamp1':
        this.precioEstampa = 2000;
        break;
      case 'stamp2':
        this.precioEstampa = 3000;
        break;
      case 'stamp3':
        this.precioEstampa = 5000;
        break;
      default:
        break;
    }

    switch (this.selectedColor) {
      case 'red':
        this.precioColor = 1000;
        break;
      case 'blue':
        this.precioColor = 1500;
        break;
      case 'green':
        this.precioColor = 1200;
        break;
      case 'yellow':
        this.precioColor = 800;
        break
      case 'purple':
        this.precioColor = 1800;
        break
      case 'orange':
        this.precioColor = 1300;
        break
      case 'pink':
        this.precioColor = 900;
        break
      default:
        break;
    }
  }

  resetSelections() {
    this.selectedSize = '';
    this.selectedStamp = this.estampas[0];
    this.selectedColor = this.colores[0];
  }
}

