import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Empleado {

  id!: Number;
  direccion!: string;
  cargo!: string;
  edad!: Number;
  imagen!: string;

}
