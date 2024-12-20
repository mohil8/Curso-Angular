import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fruta } from '../Clase/fruta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioFrutas {

  private frutas: Fruta[] = [];

  constructor(private httpCliente:HttpClient){

  }

  leerProductos(){
    return this.httpCliente.get<Fruta[]>
  ('assets/datos.json');
  }
}
