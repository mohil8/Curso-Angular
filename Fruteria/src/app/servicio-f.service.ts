import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
import { Fruta } from './fruta';
@Injectable({
  providedIn: 'root'
})
export class ServicioFService {

private refrescarPantalla = new Subject<void>();

constructor(private httpCliente: HttpClient) { }

leerProductos():Observable<Fruta[]>{
  return this.httpCliente.get<Fruta[]>
  ('http://moralo.atwebpages.com/menuAjax/productos2/index.php');
}

createProduct(fruta: Fruta): Observable<Fruta>{

  return this.httpCliente.post<Fruta>('http://moralo.atwebpages.com/menuAjax/productos2/create_product.php', fruta);
}

deleteProduct(id: string){
  return this.httpCliente.delete<Fruta>
  ('http://moralo.atwebpages.com/menuAjax/productos2/delete_product.php/?id='+id);
}

updateProduct(producto: Fruta){
  return this.httpCliente.
  put<Fruta>
  ('http://moralo.atwebpages.com/menuAjax/productos2/update_product.php',
   producto);
}

get refrescar() {
  return this.refrescarPantalla;
}
}
