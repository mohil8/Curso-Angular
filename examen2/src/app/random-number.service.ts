import { Injectable } from '@angular/core';
import { ClaseNumero } from './clase-numero';
@Injectable({
  providedIn: 'root',
})
export class RandomNumberService {
 listaN:ClaseNumero[]= [];
 objeto!: ClaseNumero;
 posicion!:number;
 n1!: number;
 n2!:number;
 n3!:number;
 n4!:number;
 n5!:number;
 n6!:number;
  constructor() {
    // crear 200 tuplas
    this.posicion=0;
    for (let i = 0; i < 200; i++) {
       //crea 1 tupla de 6 elementos number sin repeticiones y un
       //indice autoincremento
      this.generarLista();
    }
  }
  //construir la lista de 6
  generarLista() {
    const vector: number[] = [];
    while (vector.length < 6) {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número entre 1 y 100
    if (!vector.includes(randomNumber)) {
        vector.push(randomNumber);
      }
     }
   this.objeto={
    indice: this.posicion++,
    n1:vector[0],
    n2:vector[1],
    n3:vector[2],
    n4:vector[3],
    n5:vector[4],
    n6:vector[5],
     };

    this.listaN.push(this.objeto);
  }
//método servicio que se llama desde el controlador ts
  retornarLista() {
    return this.listaN;
  }

//modificar los elementos de una tupla

  actualizarTupla(tupla:ClaseNumero) {
    const index = this.listaN.findIndex((obj) => obj.indice === tupla.indice);
    if (index !== -1) {
      this.listaN[index].n1=tupla.n1;
      this.listaN[index].n2=tupla.n2;
      this.listaN[index].n3=tupla.n3;
      this.listaN[index].n4=tupla.n4;
      this.listaN[index].n5=tupla.n5;
      this.listaN[index].n6=tupla.n6;

    }
  }
//eliminar los elementos de un tupla
  eliminarElemento(tupla: ClaseNumero) {
    this.listaN = this.listaN.filter((obj) => obj.indice !== tupla.indice);
  }
  //añadir nueva tupla
  insertarElemento( tupla:ClaseNumero){
    this.listaN.push(tupla);
  }
}
