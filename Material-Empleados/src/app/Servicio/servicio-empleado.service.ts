import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../Clase/empleado';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleado {

  constructor(private httpCliente:HttpClient) { }
  leerEmpleados(){
    return this.httpCliente.get<Empleado[]>
    ('http://moralo.atwebpages.com/ajaxListar/getTodoPersonal.php')
  }
}
