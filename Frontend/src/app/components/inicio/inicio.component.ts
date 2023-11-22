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
    this.listado = [['7801','Camisa Larga', '50.000', 50000, 'https://centraldesuministrosgs.com/wp-content/uploads/2022/02/camisa-manga-larga-blanca-central-de-suministros-gs.png'],
    ['5691', 'Buso Cuello Largo', '45.000', 45000, 'https://falabella.scene7.com/is/image/FalabellaCO/119320774_1?wid=800&hei=800&qlt=70'],
    ['3456','Buzo manga larga', '30.000', 30000, 'https://falabella.scene7.com/is/image/FalabellaCO/gsc_121826288_3200081_1?wid=1500&hei=1500&qlt=70'],
    ['9023', 'Buzo con Capota', '42.000', 42000, 'https://inkbordadosyestampados.com/cdn/shop/products/Buso_con_capotaGRIS_OSCURO_480x480.jpg?v=1687802082'],
    ['6745', 'Camisa Americana', '50.000', 50000, 'https://http2.mlstatic.com/D_NQ_NP_797494-MCO49568651510_042022-O.webp'],
    ['1209', 'Buso Estamapado Basico', '30.000', 30000, 'https://oaxis-cloud.s3.us-east-2.amazonaws.com/images/2022/03/10/small/1ntqKDk4M8baVWBvKgJR.jpg']]
    
    /**Array.from({ length: 12}, (_,i) => i + 1) */
  }

  ngOnInit() {
  }

  addCamisaItem(item: Array<any>) {
    Notiflix.Notify.success(item[1] + " Añadido")
    this.carrito.addItem(item)
  }
}
