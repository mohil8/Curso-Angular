import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fruta } from '../Clase/fruta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioFrutas {

  private frutas: Fruta[] = [];
  private frutasSubject: BehaviorSubject<Fruta[]> = new BehaviorSubject<Fruta[]>([]);

  constructor(private httpClient: HttpClient) {

    this.httpClient.get<Fruta[]>('assets/datos.json').subscribe(data => {
      this.frutas = data;
      this.frutasSubject.next(this.frutas);
    });

  }


  leerProductos() {
    return this.frutasSubject.asObservable();
  }


  sumarFruta(fruta: Fruta) {
    this.frutas.push(fruta);
    this.frutasSubject.next(this.frutas);
  }

  // Método para eliminar una fruta
  eliminarFruta(fruta: Fruta) {
    this.frutas = this.frutas.filter(f => f.id !== fruta.id);
    this.frutasSubject.next(this.frutas);
  }
}
