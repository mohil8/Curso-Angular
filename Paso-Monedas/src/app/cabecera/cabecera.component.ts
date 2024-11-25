import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  // Valores iniciales
  euros: number = 0;
  dolares: number = 0;
  yenes: number = 0;

  valorDol: number = 0.95;
  valorYen: number = 164;

  convertirMoneda(campo: string) {
    if (campo === 'euros') {
      this.dolares = this.euros * this.valorDol;
      this.yenes = this.euros * this.valorYen;
    } else if (campo === 'dolares') {
      this.euros = this.dolares / this.valorDol;
      this.yenes = this.euros * this.valorYen;
    } else if (campo === 'yenes') {
      this.euros = this.yenes / this.valorYen;
      this.dolares = this.euros * this.valorDol;
    }
  }
}
