import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Imagen } from '../Clase/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenSService {


    private frutas: Imagen[] = [];
    private frutasSubject: BehaviorSubject<Imagen[]> = new BehaviorSubject<Imagen[]>([]);

    constructor(private httpClient: HttpClient) {

      this.httpClient.get<Imagen[]>('assets/getImagenes.json').subscribe(data => {
        this.frutas = data;
        this.frutasSubject.next(this.frutas);
      });

    }


    leerProductos() {
      return this.frutasSubject.asObservable();
    }


    sumarFruta(fruta: Imagen) {
      this.frutas.push(fruta);
      this.frutasSubject.next(this.frutas);
    }

    // Método para eliminar una fruta
    eliminarFruta(fruta: Imagen) {
      this.frutas = this.frutas.filter(f => f.id !== fruta.id);
      this.frutasSubject.next(this.frutas);
    }

}
