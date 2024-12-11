import { Component } from '@angular/core';

@Component({
  selector: 'app-brecol',
  templateUrl: './brecol.component.html',
  styleUrls: ['./brecol.component.css']
})
export class BrecolComponent {


  fondos:string[]=['red','green','blue','yellow'];

  pad:string='20px';
  ancho:string='100px';
  nombColor!:string;
  alto:string='100px';
  fondo:string='';
  randomm!:number;
  temporizador:any;

  puntuacion:number=0;

  renaudar() {

    this.temporizador=setInterval(()=>{
      this.randomm=Math.floor(Math.random()*this.fondos.length);
      this.fondo=this.fondos[this.randomm];

    },2000)
    this.temporizador=setInterval(()=>{
      this.randomm=Math.floor(Math.random()*this.fondos.length);
      this.nombColor=this.fondos[this.randomm];
    },2000)

  }

  sumarPuntos() {
    if(this.nombColor==this.fondo){
      this.puntuacion++;
    }else{
      this.puntuacion--;
    }
  }

}
