import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Chat {

  id!: number;
  fecha!: string;
  usuario!: string;
  mensaje!: string;

}
