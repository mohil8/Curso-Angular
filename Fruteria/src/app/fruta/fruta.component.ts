import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fruta } from '../fruta';
import { ServicioFService } from '../servicio-f.service';

@Component({
  selector: 'app-fruta',
  templateUrl: './fruta.component.html',
  styleUrls: ['./fruta.component.css']
})
export class FrutaComponent {
info: string="";

prod!: Fruta;

selectedProduct: Fruta = {
  id: '',
  nombre: '',
  precio: 0,
  unidades:0,
  imagen:''
}

frutas!: Fruta[];

constructor(private httpCliente:ServicioFService){

  this.httpCliente.leerProductos().subscribe(x=>this.frutas=x)

}

resetearFormulario( ){
  this.selectedProduct=new Fruta();
}

actualizarProducto(form: { value: Fruta; }) {

    form.value.id = this.selectedProduct.id;
    form.value.nombre = this.selectedProduct.nombre;
    form.value.precio = this.selectedProduct.precio;
    form.value.imagen=this.selectedProduct.imagen;
    form.value.unidades=this.selectedProduct.unidades
      if(this.selectedProduct && this.selectedProduct.id){

        this.httpCliente.updateProduct(form.value).
      subscribe((producto:Fruta)=>{this.prod = producto})
        this.info="Fruta modificada: "+form.value.nombre;

    }
    this.resetearFormulario();
    this.httpCliente.refrescar;

}

crearProducto(form: { value: Fruta; }){
    this.httpCliente.createProduct(form.value).
    subscribe((producto:Fruta)=>{this.prod = producto; this.httpCliente.leerProductos().subscribe(x=>this.frutas=x)});
    this.info="Fruta añadida: "+form.value.nombre;

  //  this.httpCliente.leerProductos().subscribe(x=>this.frutas=x)
    this.resetearFormulario();
    this.httpCliente.refrescar;

}

eliminar(id:string) {

  this.httpCliente.deleteProduct(id).subscribe(()=>{
	this.info="Fruta eliminada: "+id;
  this.httpCliente.leerProductos().subscribe(x=>this.frutas=x)

  });
}

seleccionarProductos(f:Fruta) {

  this.selectedProduct = f;
  }
}
