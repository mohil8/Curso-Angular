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

}
