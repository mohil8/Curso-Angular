import { Component } from '@angular/core';
import { Usuario } from '../Clase/usuario';
import { ServicioUsuarioService } from '../Servicio/servicio-usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

constructor(private http:ServicioUsuarioService){}

usuario: Usuario=new Usuario(0,'','','',0);
confirmar!:string;

registrar() {

  if(this.confirmar===this.usuario.pwd){
    this.http.registraUsuario(this.usuario).subscribe(us=>{
      this.usuario=us;
    });
  }

}

}
