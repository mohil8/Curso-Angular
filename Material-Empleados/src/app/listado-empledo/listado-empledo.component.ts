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
export class ListadoEmpledoComponent implements OnInit {


modificarEmpleado(_t98: any) {

}
eliminarEmpleado(arg0: any) {

}

applyFilter($event: KeyboardEvent) {


}


  columnas: string[] = ['id', 'nombre', 'direccion', 'cargo' , 'edad' , 'imagen','borrar', 'modificar'];
  datos: Empleado[]=[];
  dataSource!: MatTableDataSource<Empleado>;
  empleado!:Empleado;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // public dialog: MatDialog,
  constructor(private httpCliente: ServicioEmpleado){  }

  ngOnInit(): void {
    this.httpCliente.leerEmpleados().subscribe((x)=>{this.dataSource.data=x})
  }


}
