import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {

  num1:number=0;
  num2:number=0;
  resultado:number=0;

  sumar(){
    this.resultado=this.num1+this.num2;
  }

  restar(){
    this.resultado=this.num1-this.num2;
  }

  multiplicar(){
    this.resultado=this.num1*this.num2;
  }

  dividir(){
    this.resultado=this.num1/this.num2;
  }
}
