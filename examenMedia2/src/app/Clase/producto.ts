export class Producto {
      id!: string;
      name!: string;
      price!: string;
      photo!: string;
      activo!: string;
      stockActual!: string;
      strockMinimo!: string;

      constructor(id:string,name:string,price:string,photo:string,activo:string,stockA:string,stockM:string){
        this.id=id;
        this.name=name;
        this.price=price;
        this.photo=photo;
        this.activo=activo;
        this.stockActual=stockA;
        this.strockMinimo=stockM;
      }
}
