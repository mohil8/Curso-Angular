import { Component } from '@angular/core';
import { Chat } from 'src/app/Clase/chat/chat.module';
import { ServicioChat } from 'src/app/Servicio/servicio-chat.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent {

Mensajes!:Chat[];
info:string='';
selectMensaje:Chat={

id:0,
fecha:'',
usuario:'',
mensaje:''
}

constructor(private servicio:ServicioChat){
  this.servicio.leerMensaje().subscribe(x=>this.Mensajes=x);
}

sumarMensaje(form :{value:Chat}) {
  this.servicio.crearMensaje(form.value).subscribe(()=>{this.servicio.leerMensaje().subscribe(x=>this.Mensajes=x)});

}

leer(){
  this.servicio.leerMensaje().subscribe(x=>this.Mensajes=x);

}

borrar() {

  this.servicio.eliminarTodo().subscribe(()=>{this.servicio.leerMensaje().subscribe(x=>this.Mensajes=x)});

}

eliminarM(id:number) {
    this.servicio.eliminarMensaje(id).subscribe(()=>{this.servicio.leerMensaje().subscribe(x=>this.Mensajes=x)});

}


}
