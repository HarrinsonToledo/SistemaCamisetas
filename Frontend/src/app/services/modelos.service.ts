import { Injectable } from "@angular/core";
import * as Notiflix from "notiflix";
import { environment } from "src/environments/environment.development";
import { Modelos } from "../interfaces/Modelos";


export interface Modelo {
    id: number,
    modelo: string,
    precio: number
    url: string
}

@Injectable({
    providedIn: "root"
})
export class ModelosServices {
    private myApiUrl: string
    private propeties: string
    private info: string
    private datos!: Array<any>;

    private constructor(private modelo: Modelos) {
        this.myApiUrl = environment.endpoint;
        this.propeties = '/modelo';
        this.info = '/allModelos'
    }

    public async getModelos() { 
        const envia = {
            method: 'GET',
            headers: new Headers({
              "Content-Type": "application/json",
              "Accept": "/",
              "Access-Control-Allow-Origin": "*",
              "mode": "no-cors",
              "referrerPolicy": "unsafe_url" 
            }),
          };

        await fetch(`${this.myApiUrl}${this.propeties}${this.info}`, envia)
      .then((response) => response.json())
      .then((data) => {
        if (data.statusCode == 404) {
          Notiflix.Notify.warning("Error de recuperacion de datos");
        } else if (data.statusCode == 201) {
          Notiflix.Notify.success("Datos recuperado"); 
            this.modelo.setDatos(data);
        } else {
            this.modelo.setDatos(data);
        }
      })
      .catch((err) => {
        console.error(err);
      })
    }
}