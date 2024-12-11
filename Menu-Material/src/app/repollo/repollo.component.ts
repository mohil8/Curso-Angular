import { Component } from '@angular/core';

@Component({
  selector: 'app-repollo',
  templateUrl: './repollo.component.html',
  styleUrls: ['./repollo.component.css']
})
export class RepolloComponent {



  numero: any;

  texto: any;

  vector:number[]=[100];

  generarNumeros(){

    for(let i=0;i<100;i++){
      let random=Math.floor(Math.random()*20);
      this.vector.push(random);
    }
  }

  Evento() {



    }



}
