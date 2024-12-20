export class Usuario {
  idUsuario!: number;
  nombre!: string;
  email!: string;
  pwd!: string;
  activo!: number;

  constructor(id:number,nombre:string,email:string,pwd:string,activo:number){

    this.idUsuario=id;
    this.nombre=nombre;
    this.email=email;
    this.pwd=pwd;
    this.activo=activo;

  }
}
