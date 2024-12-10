import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Fruta } from '../Clase/fruta';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit{


  constructor(public dialog:MatDialog){}

  columnas: string[] = [
    'id',
    'nombre',
    'precio',
    'cantidad',
    'modificar',
    'eliminar'
  ];

  frutas:Fruta[]=[
    new Fruta(1,'Melocotón',12,5),
    new Fruta(2,'Manzana',8,13),
    new Fruta(3,'Pera',25,35),
    new Fruta(4,'Naranja',2,3),
    new Fruta(5,'Melón',1,7),
  ]

  dataSource=new MatTableDataSource<Fruta>();
  @ViewChild(MatTable) tabla!: MatTable<Fruta>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.dataSource.data=this.frutas;
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  abrirDialogo(){
    const dialogo=this.dialog.open(DialogoComponent,{data:new Fruta(0,'',0,0)});

    dialogo.afterClosed().subscribe(a => {
      if (a != undefined){
        this.agregar(a);
      }
    });
  }

  modificar(a: Fruta) {
    const dialogo2 = this.dialog.open(DialogoComponent, {
      data: new Fruta(a.id, a.nombre, a.precio, a.cantidad),
    });
    //c representa el coche editado que
    dialogo2.afterClosed().subscribe(a=>{
      if (a != undefined){
        //find devuelve el objeto si no undefined
        const fruta = this.frutas.find(f=>f.id == a.id)
         if(!fruta){
          return
         }
         fruta.id= a.id
         fruta.nombre= a.nombre
        fruta.precio= a.precio
        fruta.cantidad= a.cantidad

         this.dataSource.data= this.frutas
         this.tabla.renderRows();
      }
    })
  }

  agregar(fruta:Fruta){
    fruta.id=this.frutas.length+1;
    this.frutas.push(new Fruta(fruta.id,fruta.nombre,fruta.precio,fruta.cantidad));
    this.dataSource.data=this.frutas;
    this.tabla.renderRows();
  }

  eliminar(id:number){
    if(confirm('¿Confirmas borrar?')){
      this.frutas = this.frutas.filter(fruta => fruta.id !== id);
      this.dataSource.data=this.frutas;
      this.tabla.renderRows();
    }
  }








}


