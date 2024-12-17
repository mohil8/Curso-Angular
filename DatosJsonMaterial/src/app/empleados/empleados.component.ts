import { Component, OnInit } from '@angular/core';
import { Empleado } from '../Clase/empleado';
import { EmpleadoSService } from '../Servicio/empleado-s.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados:Empleado[]=[];

  selectedEmpleados:Empleado={
    id:0,
    nombre:'',
    edad:0,
    cargo:'',
    salario:0
  }


  constructor(private empledoS:EmpleadoSService){

  }


  ngOnInit():void{
    this.empledoS.leerEmpleados().subscribe(emp=>this.empleados=emp);
  }

  addEmpleados(form:{value:Empleado}){
    this.empledoS.crearEmpleado(form.value);
    this.empleados.sort((a,b)=>a.id-b.id);
    this.refrescar();
  }

  eliminarEmp(emp:Empleado){
    this.empledoS.borrarEmpleado(emp);
  }

  actualizar(emp:Empleado){
    this.empledoS.modificarEmpleado(emp);
  }

  refrescar(){
    this.selectedEmpleados={id:0,nombre:'',edad:0,cargo:'',salario:0};
  }

}
