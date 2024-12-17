import { Component, OnInit } from '@angular/core';
import { ServicioFrutas } from '../Servicios/servicio-frutas.service';
import { Fruta } from '../Clase/fruta';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.component.html',
  styleUrls: ['./frutas.component.css']
})
export class FrutasComponent implements OnInit {

  frutas: Fruta[] = [];
  selectedProduct: Fruta = { id: 0, nombre: '', cantidad: 0, precio: 0 };

  constructor(private servicioFrutas: ServicioFrutas) {}

  ngOnInit(): void {

    this.servicioFrutas.leerProductos().subscribe(frutas => {
      this.frutas = frutas;
    });
  }

  addFrutas(form: { value: Fruta }) {

     this.servicioFrutas.sumarFruta(form.value);
     this.frutas.sort((a, b) => a.id - b.id);

      this.resetearFormulario();
  }

  borrar(fruta: Fruta) {
    this.servicioFrutas.eliminarFruta(fruta);
    this.frutas = this.frutas.filter(f => f.id !== fruta.id);
  }

  resetearFormulario() {
    this.selectedProduct = { id: 0, nombre: '', cantidad: 0, precio: 0 };
  }
}
