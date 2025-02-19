// File: ts/ej207.ts

let notas: number[] = [6, 8, 7.5];

let notas2: Array<number> = [5, 4, 8];

class Vehiculo {
  marca: string;
  modelo: string;
  anio: number;
  color: string;

  constructor(marca: string, modelo: string, anio: number, color: string) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.color = color;
  }
}

const vehiculo1 = new Vehiculo('Toyota', 'Rav4', 2024, 'negro');
const vehiculo2 = new Vehiculo('Toyota', '4Runner', 2010, 'gris');
const vehiculo3 = new Vehiculo('Honda', 'Pilot', 2020, 'blanco');
const vehiculo4 = new Vehiculo('Honda', 'CR-V', 2015, 'rojo');

let vehiculos: Vehiculo[] = [vehiculo1, vehiculo2, vehiculo3, vehiculo4];