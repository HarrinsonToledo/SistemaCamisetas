import { Injectable } from "@angular/core";

export interface ArrayCarrito {
    datos: Array<any>,
    cantidad: number
}

@Injectable({
    providedIn: 'root'
})
export class CarritoContainer {
    private CarritoElementos!: Array<ArrayCarrito>;

    constructor() {
        if (!this.CarritoElementos) {
            this.CarritoElementos = [];
        }
    }

    public getCarrito(): Array<ArrayCarrito> {
        return this.CarritoElementos;
    }

    public addItem(item: Array<any>) {
        let contin: Boolean = false
        this.CarritoElementos.forEach(function (producto) {
            if(producto.datos == item) {
                producto.cantidad = producto.cantidad + 1;
                contin = true;
            }
        })
        if(contin === false) {
            const itemCarrito: ArrayCarrito = {
                datos: item,
                cantidad: 1
            }
            this.CarritoElementos.push(itemCarrito);
        }
    }

    public deleteItem(item: ArrayCarrito) {
        this.CarritoElementos = this.CarritoElementos.filter(prod => prod != item);
    }
}