import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numero:number=40;
  imagen:string='https://randomuser.me/api/portraits/women/'+this.numero+'.jpg';
  nombreBoton:string='Play'
  numAncho:number=500;
  numAlto:number=500;
  ancho:string=this.numAncho+'px';
  alto:string=this.numAlto+'px';
  numeroParar=0;


  anterior() {
    this.numero--;
    this.imagen='https://randomuser.me/api/portraits/women/'+this.numero+'.jpg';
  }
  siguiente() {
    this.numero++;
    this.imagen='https://randomuser.me/api/portraits/women/'+this.numero+'.jpg';
  }
  aumentar() {
    this.numAncho+=50;
    this.numAlto+=50;
    this.ancho=this.numAncho+'px';
    this.alto=this.numAlto+'px';
  }
  disminuir() {
    this.numAncho-=50;
    this.numAlto-=50;
    this.ancho=this.numAncho+'px';
    this.alto=this.numAlto+'px';

  }

  temporizador:any;
  randomm!:number;
  random() {
    if(this.numeroParar%2==0){
      this.numeroParar++;
      this.nombreBoton='Stop';
      this.temporizador=setInterval(()=>{
      this.randomm=Math.floor(Math.random()*100);
      this.imagen='https://randomuser.me/api/portraits/women/'+this.randomm+'.jpg';
    },1000)
    }else{
      this.numeroParar++;
      this.nombreBoton='Play';
      clearInterval(this.temporizador);
    }


  }

}
