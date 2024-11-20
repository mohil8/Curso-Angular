import { Component } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

colores:string[]=['red','green','blue','gray','yellow','pink','purple','black','lightblue','lightcoral'];
tamanios:string[]=['10px','15px','20px','25px','30px','35px','40px','45px','50px','55px'];
activarB: boolean=false;
color: string='';
tamanioF: string='';
segundos: number=10;
temporizador:any;
textoBoton:string='Botón Habilitado';

personas = [
  { id: 1, nombre: 'Ana', edad: 25 },
  { id: 2, nombre: 'Luis', edad: 30 },
  { id: 3, nombre: 'Sofia', edad: 28 },
  { id: 4, nombre: 'Miguel', edad: 35 }
];

periodicos = [
  { nombre: 'El País', url: 'https://elpais.com' },
  { nombre: 'El Mundo', url: 'https://elmundo.es' },
  { nombre: 'ABC', url: 'https://abc.es' },
  { nombre: 'La Vanguardia', url: 'https://lavanguardia.com' },
  { nombre: 'El Diario', url: 'https://eldiario.es' }
];


cuentaAtras() {


  this.activarB=true;
  this.textoBoton='Botón Desabilitado';
  this.temporizador=setInterval(()=>{

    this.segundos--;
    this.color=this.colores[this.segundos];
    this.tamanioF=this.tamanios[this.segundos];

    if(this.segundos==0){
      clearInterval(this.temporizador);
      this.textoBoton='Botón Habilitado';
      this.segundos=10;
      this.activarB=false;
    }

  },1000);



}

}
