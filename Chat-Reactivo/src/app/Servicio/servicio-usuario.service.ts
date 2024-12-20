import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Clase/usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  constructor(private http:HttpClient) { }

  registraUsuario(us:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://moralo.atwebpages.com/menuAjax/chat/AltaUsuario.php',us);
  }
}
