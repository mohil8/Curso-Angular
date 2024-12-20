import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Imagen } from '../Clase/imagen';
import { ImagenSService } from '../Servicio/imagen-s.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent {

  modificar(_t83: any) {
    throw new Error('Method not implemented.');
    }

    abrirDialogo() {
    throw new Error('Method not implemented.');
    }

      productos: Imagen[] = [];
      selectedProduct: Imagen = { id:'',imagen:'',texto:'',subtexto:'',activo:''};

      columnas: string[] = [
        'id',
        'imagen',
        'texto',
        'subtexto',
        'activo',
        'eliminar',
        'modificar'
      ];

      dataSource=new MatTableDataSource<Imagen>();
      @ViewChild(MatTable) tabla!: MatTable<Imagen>;

      @ViewChild(MatPaginator) paginator!: MatPaginator;
      @ViewChild(MatSort) sort!: MatSort;

      applyFilter(event: KeyboardEvent) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }



      constructor(private servicioimagen: ImagenSService) {}

      ngOnInit(): void {

        this.servicioimagen.leerProductos().subscribe(prod => {
          this.dataSource.data = prod;
        });
      }

      addFrutas(form: { value: Imagen }) {

         this.servicioimagen.sumarFruta(form.value);

          this.resetearFormulario();
      }

      eliminar(prod: Imagen) {
        this.servicioimagen.eliminarFruta(prod);
        this.productos = this.productos.filter(f => f.id !== prod.id);
      }

      resetearFormulario() {
        this.selectedProduct =  {id:'',imagen:'',texto:'',subtexto:'',activo:''};
      }





}
