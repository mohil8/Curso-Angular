import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Empleado } from './Clase/empleado/empleado.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  columnas: string[]=['id','nombre','direccion','cargo','edad','imagen','borrar','modificar'];
  datos: Empleado[]=[];
  urlString:string='http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php';
  @ViewChild(MatTable) tabla1!: MatTable<Empleado>;
  ds=new MatTableDataSource<Empleado>();

  constructor(public dialog:MatDialog,private httpCliente:HttpClient){}

  ngOnInit():void {
    this.httpCliente.get<Empleado[]>(this.urlString).subscribe((res)=>{this.ds.data=res;this.datos=res});
  }
}
