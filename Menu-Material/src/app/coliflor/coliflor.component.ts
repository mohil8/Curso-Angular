import { Component } from '@angular/core';

@Component({
  selector: 'app-coliflor',
  templateUrl: './coliflor.component.html',
  styleUrls: ['./coliflor.component.css']
})
export class ColiflorComponent {

  numero:number=0;

  nombreIngles:string[]=['one','two','tree','four','five','six','seven','eight','nine','ten'];
  nombreEspanol:string[]=['uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve','diez'];

  resultadoE:string='';
  resultadoI:string='';
  error: string
='';

  EventoTraducir(){
    if(this.numero===1){
      this.resultadoE="uno";
      this.resultadoI="One"
      this.error='';
    }else if(this.numero==2){
      this.resultadoE="two";
      this.resultadoI="tree";
      this.error='';
    }else if(this.numero==3){
      this.resultadoE="tres";
      this.resultadoI="three";
      this.error='';
    }else if(this.numero==4){
      this.resultadoE="cuatro";
      this.resultadoI="four";
      this.error='';
    }else if(this.numero==5){
      this.resultadoE="five";
      this.resultadoI="cinco";
      this.error='';
    }else if(this.numero==6){
      this.resultadoE="seis";
      this.resultadoI="six";
      this.error='';
    }else if(this.numero==7){
      this.resultadoE="siete";
      this.resultadoI="seven";
      this.error='';
    }else if(this.numero==8){
      this.resultadoE="ocho";
      this.resultadoI="eight";
      this.error='';
    }else if(this.numero==9){
      this.resultadoE="nine";
      this.resultadoI="nueve";
      this.error='';
    }else if(this.numero==10){
      this.resultadoE="diez";
      this.resultadoI="ten";
      this.error='';
    }else if(this.numero==0){
      this.resultadoE="cero";
      this.resultadoI="cero";
      this.error='';
    }else{
      this.error='Tiene que ser entre el 0 y el 10';
      this.resultadoE='';
      this.resultadoI='';
    }
  }


}
