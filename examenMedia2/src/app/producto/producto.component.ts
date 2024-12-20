import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Producto } from '../Clase/producto';
import { ProductosSService } from '../productos-s.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
modificar(_t83: any) {
throw new Error('Method not implemented.');
}

abrirDialogo() {
throw new Error('Method not implemented.');
}

  productos: Producto[] = [];
  selectedProduct: Producto = { id: '',name:'',price:''
  ,photo:'',activo:'',stockActual:'',strockMinimo:'' };

  columnas: string[] = [
    'id',
    'name',
    'price',
    'photo',
    'stockActual',
    'strockMinimo',
    'eliminar',
    'modificar'
  ];

  dataSource=new MatTableDataSource<Producto>();
  @ViewChild(MatTable) tabla!: MatTable<Producto>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  constructor(private servicioProducto: ProductosSService) {}

  ngOnInit(): void {

    this.servicioProducto.leerProductos().subscribe(prod => {
      this.dataSource.data = prod;
    });
  }

  addFrutas(form: { value: Producto }) {

     this.servicioProducto.sumarFruta(form.value);

      this.resetearFormulario();
  }

  eliminar(prod: Producto) {
    this.servicioProducto.eliminarFruta(prod);
    this.productos = this.productos.filter(f => f.id !== prod.id);
  }

  resetearFormulario() {
    this.selectedProduct =  { id: '',name:'',price:''
    ,photo:'',activo:'',stockActual:'',strockMinimo:'' };
  }

}
