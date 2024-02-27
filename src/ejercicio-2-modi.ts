//Nombre del archivo: ejercicio-1-modi.ts
//Descripción: 
//Autor: Daniel Bensa Expósito Paz
//Github: https://github.com/Danixps
//Correo Institucional: alu0101481876@ull.edu.es
//Fecha: 21/02/2024

type cadena = string;


interface Caracteristicas_vehiculo {
  marca: cadena;
  color: cadena;
}
interface Caracteristicas_coche extends Caracteristicas_vehiculo {
    altura: number;
}
interface Caracteristicas_moto extends Caracteristicas_vehiculo {
    cilindrada: number;
}

interface Caracteristicas_parking {
    fecha :number;
    hora :number;
    plazas_coche :number;
    plazas_moto :number;
}
  
  
export class Coche implements Caracteristicas_coche{
  constructor(public readonly marca: string, public readonly color:string, public readonly altura: number) {}
  public showCaracteristic(): void {
    console.table(this);
  }

}

export class Moto implements Caracteristicas_moto{
    constructor(public readonly marca: string, public readonly color:string, public readonly cilindrada: number) {}
    public showCaracteristic(): void {
        console.table(this);
    }
}

export class Parking implements Caracteristicas_parking{
    constructor(public readonly fecha: number, public readonly hora: number, public readonly : number, public readonly plazas_coche: number, public readonly plazas_moto: number) {}
    public showCaracteristic(): void {
        console.table(this);
    }
}
