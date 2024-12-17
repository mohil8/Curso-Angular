export class Empleado {
  id!: number;
  nombre!: string;
  edad!: number;
  cargo!: string;
  salario!: number;

  constructor(id:number,nombre:string,edad:number,cargo:string,salario:number){
    this.id=id;
    this.nombre=nombre;
    this.edad=edad;
    this.cargo=cargo;
    this.salario=salario;
  }
}
