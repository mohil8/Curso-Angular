import { Inject, Injectable, InjectionToken, LOCALE_ID } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Chat } from '../Clase/chat/chat.module';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ServicioChat {

  private resfrescarPantalla = new Subject<void>();

  constructor(private httpCliente:HttpClient,@Inject(LOCALE_ID) private locale: string) { }

  leerMensaje():Observable<Chat[]>{
    return this.httpCliente.get<Chat[]>('http://camacho.atwebpages.com/chat/ObtenerMensajes.php');
  }

  crearMensaje(mensaje:Chat):Observable<Chat>{

    mensaje.fecha=formatDate(Date.now(),'HH:mm:ss/dd-MM-yy',this.locale)
    return this.httpCliente.post<Chat>('http://camacho.atwebpages.com/chat/AltaMensaje.php', mensaje);

  }

  eliminarTodo():Observable<Chat[]>{
    return this.httpCliente.delete<Chat[]>('http://camacho.atwebpages.com/chat/truncate.php')
  }

  eliminarMensaje(id:number){
    return this.httpCliente.delete<Chat>('http://camacho.atwebpages.com/chat/EliminarMensaje.php/?id='+id);
  }

  get resfrescar(){
    return this.resfrescarPantalla;
  }

}

