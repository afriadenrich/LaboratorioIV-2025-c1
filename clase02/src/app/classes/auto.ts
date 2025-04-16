export class Auto {
    id?: number; // undefined
    marca: string;
    modelo: string;
    precio: number;

    constructor(marca: string,  modelo: string, precio: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }
}
