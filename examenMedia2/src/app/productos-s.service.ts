import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from './Clase/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductosSService {


  private producto: Producto[] = [];
  private productoSubject: BehaviorSubject<Producto[]> = new BehaviorSubject<Producto[]>([]);

  constructor(private httpClient: HttpClient) {

    this.httpClient.get<Producto[]>('assets/getProductos.json').subscribe(data => {
      this.producto = data;
      this.productoSubject.next(this.producto);
    });

  }


  leerProductos() {
    return this.productoSubject.asObservable();
  }


  sumarFruta(producto: Producto) {
    this.producto.push(producto);
    this.productoSubject.next(this.producto);
  }

  // Método para eliminar una fruta
  eliminarFruta(prod: Producto) {
    this.producto = this.producto.filter(f => f.id !== prod.id);
    this.productoSubject.next(this.producto);
  }
}
