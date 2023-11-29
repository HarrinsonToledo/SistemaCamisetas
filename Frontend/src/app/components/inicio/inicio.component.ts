import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as Notiflix from 'notiflix';
import { CarritoContainer } from 'src/app/interfaces/CarritoContainer';
import { LoginState } from 'src/app/interfaces/LoginState';
import { Modelos } from 'src/app/interfaces/Modelos';
import { ModelosServices } from 'src/app/services/modelos.service';
import { UserService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  listado: Array<any>;
  datos!: Array<any>;

  G: string = "Completo";

  roles!: Array<any>
  constructor(private carrito: CarritoContainer, private modeloService: ModelosServices, private modelos: Modelos, private loginState: LoginState,
    private cookieService: CookieService) {
    this.listado = [];
    if(cookieService.check('user')) {
      loginState.setLoginState()
    } else {
      loginState.logOut()
    }
  }

  formatearNumero(numeroString: string): string {
    // Convertir el string a número para asegurarse de que es un número válido
    const numero = parseFloat(numeroString);

    // Verificar si el número es válido
    if (isNaN(numero)) {
        return "Número no válido";
    }

    // Formatear el número con el punto de mil y ",00"
    const numeroFormateado = numero.toLocaleString('es-ES', {
      minimumFractionDigits: numero % 1 !== 0 ? 2 : 0,
      maximumFractionDigits: numero % 1 !== 0 ? 2 : 0
  });

    return `${numeroFormateado}`;
}

  ngOnInit() {
    this.cargar();
  }

  async cargar() {
    await this.modeloService.getModelos();

    this.datos = this.modelos.getDatos();

    if(this.datos != null || this.datos != undefined) {
      for(let i = 0; i < this.datos.length; i++) {
        let precio = String(this.datos[i].precio);
        let genero = "Hombre";
        if(this.datos[i].modelo.includes("Mujer")){
          genero = "Mujer"
        }
        this.listado.push([this.datos[i].id, this.datos[i].modelo,
          this.formatearNumero(precio), this.datos[i].precio, this.datos[i].url, "Sin info", genero]);
      }
    }
  }

  addCamisaItem(item: Array<any>) {
    Notiflix.Notify.success(item[1] + " Añadido")
    this.carrito.addItem(item)
  }

  mostrar(tipo: string) {
    if(tipo == 'c') {
      this.G = "Completo";
    } else if(tipo == 'h') {
      this.G = "Hombre";
    } else if(tipo == 'm') {
      this.G = "Mujer";
    }
  }
}
