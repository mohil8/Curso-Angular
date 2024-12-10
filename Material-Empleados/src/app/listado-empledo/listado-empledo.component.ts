import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Empleado } from '../Clase/empleado';
import { ServicioEmpleado } from '../Servicio/servicio-empleado.service';


@Component({
  selector: 'app-listado-empledo',
  templateUrl: './listado-empledo.component.html',
  styleUrls: ['./listado-empledo.component.css']
})
export class ListadoEmpledoComponent implements OnInit,AfterViewInit {


modificarEmpleado(_t98: any) {

}
eliminarEmpleado(arg0: any) {

}

applyFilter(event: KeyboardEvent) {

  const filtro=(event.target as HTMLInputElement).value;
  this.dataSource.filter=filtro.trim().toLowerCase();

  if(this.dataSource.paginator){
    this.dataSource.paginator.firstPage();
  }

}


  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad' , 'imagen','eliminar', 'modificar'];
  datos: Empleado[]=[];
  borrarLink:string='https://cdn-icons-png.flaticon.com/128/3096/3096687.png'
  dataSource= new MatTableDataSource<Empleado>;
  empleado!:Empleado;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // public dialog: MatDialog,
  constructor(private httpCliente: ServicioEmpleado){
    this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x})
  }
  ngAfterViewInit(): void {
   this.dataSource.paginator=this.paginator;
   this.dataSource.sort=this.sort;
  }

  ngOnInit(): void {
    this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x})
  }


}
