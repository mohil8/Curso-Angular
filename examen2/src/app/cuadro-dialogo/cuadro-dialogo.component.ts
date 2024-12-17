import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClaseNumero } from '../clase-numero';

@Component({
  selector: 'app-cuadro-dialogo',
  templateUrl: './cuadro-dialogo.component.html',
  styleUrls: ['./cuadro-dialogo.component.css']
})
export class CuadroDialogoComponent {
  constructor(
    public dialogRef: MatDialogRef<CuadroDialogoComponent>,
    @ Inject(MAT_DIALOG_DATA) public data: ClaseNumero) {}
  ngOnInit(): void {

  }
Cancelar(){
  this.dialogRef.close();
}

}
