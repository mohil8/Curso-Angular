import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

numero:number=0;

aumentoNumero() {
  this.numero++;
}

DecrementoNumero() {
  this.numero--;
}

}
