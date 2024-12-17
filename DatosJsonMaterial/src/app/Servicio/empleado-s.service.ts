import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Empleado } from '../Clase/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoSService {

  private empleados:Empleado[]=[];
  private observer=new BehaviorSubject<Empleado[]>([]);

  constructor(private httpCliente:HttpClient) {

    this.httpCliente.get<Empleado[]>('assets/empleados.json').subscribe(emp=>{this.empleados=emp;
      this.observer.next(this.empleados)
    });

   }

   leerEmpleados(){
    return this.observer.asObservable();
   }

   crearEmpleado(empleado:Empleado){

    this.empleados.push(empleado);

    this.observer.next(this.empleados);

   }

   modificarEmpleado(empleado:Empleado){
    const indice = this.empleados.findIndex(emp=>emp.id=emp.id);

    if(indice!=-1){
      this.empleados[indice].id=empleado.id;
      this.empleados[indice].nombre=empleado.nombre;
      this.empleados[indice].edad=empleado.edad;
      this.empleados[indice].cargo=empleado.cargo;
      this.empleados[indice].salario=empleado.salario;

    }
   }

   borrarEmpleado(empleado:Empleado){
    this.empleados=this.empleados.filter(id=>id.id!==empleado.id);
    this.observer.next(this.empleados);
   }


}
