import { Component } from '@angular/core';

@Component({
  selector: 'app-lombarda',
  templateUrl: './lombarda.component.html',
  styleUrls: ['./lombarda.component.css']
})
export class LombardaComponent {

  letras: string = '012345678ABCDEF';
  fondo: string = '';
  nombre: string = '';
  alto: string = '100px';
  ancho: string = '100px';
  temporizador: any;

  renaudar() {
    this.temporizador = setInterval(() => {
      this.fondo = '#';
      this.nombre = 'Background Color:';
      let array = '';
      for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * 14);
        array += this.letras.charAt(random);
      }
      this.fondo = '#' + array;
      this.nombre = this.nombre + this.fondo;
    }, 2000);
  }

  parar() {
    clearInterval(this.temporizador);
  }
}

