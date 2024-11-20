import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

imgChica: string='';
imgChico: string='';
w1: number=0;
w2: number=0;
h1: number=0;
h2: number=0;
numAl: number=0;

activarChica() {
this.numAl=Math.floor(Math.random()*100);
this.imgChica='https://randomuser.me/api/portraits/women/'+this.numAl+'.jpg';
this.w1=Math.ceil(Math.random()*300);
this.h1=Math.ceil(Math.random()*300);
}

activarChico() {
  this.numAl=Math.floor(Math.random()*100);
  this.imgChico='https://randomuser.me/api/portraits/men/'+this.numAl+'.jpg';
  this.w2=Math.ceil(Math.random()*300);
  this.h2=Math.ceil(Math.random()*300);
}

activadoA: boolean=false;
activadoO: boolean=false;
imgChicaT: string='';
wT1: number=0;
hT1: number=0;
imgChicoT: string='';
wT2: number=0;
hT2: number=0;
//temporizador:NodeJS.Timer;
temporizador1:any;
temporizador2:any;

activarChicoTemporizador() {

  this.activadoO=true;
  this.temporizador2=setInterval(()=>{
    this.numAl=Math.floor(Math.random()*100);
    this.imgChicoT='https://randomuser.me/api/portraits/men/'+this.numAl+'.jpg';
    this.wT2=Math.ceil(Math.random()*300);
    this.hT2=Math.ceil(Math.random()*300);
    },1000)
}
activarChicaTemporizador() {
  this.activadoA=true;
  this.temporizador1=setInterval(()=>{
  this.numAl=Math.floor(Math.random()*100);
  this.imgChicaT='https://randomuser.me/api/portraits/women/'+this.numAl+'.jpg';
  this.wT1=Math.ceil(Math.random()*300);
  this.hT1=Math.ceil(Math.random()*300);
  },1000)
}


}
