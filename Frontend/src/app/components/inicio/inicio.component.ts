import { Component } from '@angular/core';
import * as Notiflix from 'notiflix';
import { CarritoContainer } from 'src/app/interfaces/CarritoContainer';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  listado: Array<any>;

  roles!: Array<any>
  constructor(private carrito: CarritoContainer) {
    this.listado = [['7801','Camisa Larga', '50.000', 50000],
    ['5691', 'Camisa Cuello Largo', '45.000', 45000],
    ['3456','Buzo manga larga', '30.000', 30000],
    ['9023', 'Buzo con Capota', '42.000', 42000],
    ['6745', 'Camisa Americana', '50.000', 50000],
    ['1209', 'Buso Estamapado Basico', '30.000', 30000]]
    
    /**Array.from({ length: 12}, (_,i) => i + 1) */
  }

  ngOnInit() {
  }

  addCamisaItem(item: Array<any>) {
    Notiflix.Notify.success(item[1] + " Añadido")
    this.carrito.addItem(item)
  }
}
