import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class Modelos {
    private Datos: Array<any>;

    private constructor() {
        this.Datos = [];
    }

    public setDatos(info: Array<any>) {
        this.Datos = info;
    }

    public getDatos(): Array<any> {
        return this.Datos;
    }
}