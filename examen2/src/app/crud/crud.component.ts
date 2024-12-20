import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { RandomNumberService } from '../random-number.service';
import { ClaseNumero } from '../clase-numero';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudRandomNumbersComponent  implements AfterViewInit {



  columnas: string[] = ['indice', 'n1', 'n2' ,'n3', 'n4', 'n5','n6','eliminar','modificar'];
  datasource=new  MatTableDataSource<ClaseNumero>();
  tupla!: ClaseNumero;
  editingObject: { id: number; numbers: number[] } | null = null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) tabla1!: MatTable<ClaseNumero>;
  constructor(private servicioR: RandomNumberService, private dialog: MatDialog) {
    this.datasource.data = this.servicioR.retornarLista();

  }
  ngAfterViewInit(): void {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }


  refreshTable() {
    this.datasource = new MatTableDataSource(this.servicioR.());
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  addObject() {
    this.servicioR.generarLista();
    this.refreshTable();
  }

  abrirDialogoModificar(tupla: ClaseNumero) {
      const dialogo1 = this.dialog.open(CuadroDialogoComponent, {
        data: new ClaseNumero(tupla.indice,tupla.n1,tupla.n2,tupla.n3,tupla.n4,tupla.n5,tupla.n6)
      });
      dialogo1.afterClosed().subscribe((tupla: ClaseNumero) => {
        if (tupla != undefined)
        this.servicioR.actualizarTupla(tupla);
        });

  }
  borrarFila(tupla:ClaseNumero) {
    if (confirm("Realmente quiere borrarlo?")) {
      this.servicioR.eliminarElemento(tupla);
      this.refreshTable();

    }
  }
  abrirDialogo() {
    const dialogo1 = this.dialog.open(CuadroDialogoComponent, {
      data: new ClaseNumero(0,0,0,0,0,0,0)
    });
    dialogo1.afterClosed().subscribe((tupla: ClaseNumero) => {
      if (tupla != undefined)
        this.aniadir(tupla);
     });
    }
    aniadir(tupla: ClaseNumero) {

      //agregar a la tabla
             this.servicioR.insertarElemento(tupla);

      //renderizar la vista
                 this.refreshTable();

      }

  applyFilter(event: KeyboardEvent) {
    const filtro = (event.target as HTMLInputElement).value;
    this.datasource.filter = filtro.trim().toLowerCase();
  }
}
