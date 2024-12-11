import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Numero } from './Clase/numero';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public dialog:MatDialog){}

  columnas: string[] = [
    'indice',
    'n1',
    'n2',
    'n3',
    'n4',
    'n5',
    'n6',
    'eliminar',
    'modificar'
  ];

  num!:Numero[];





  numAleatirio(){


    let contador=0;
    for(let i=200;i>0;i++){
      let n1=Math.floor(Math.random()*100);
      let n2=Math.floor(Math.random()*100);
      let n3=Math.floor(Math.random()*100);
      let n4=Math.floor(Math.random()*100);
      let n5=Math.floor(Math.random()*100);
      let n6=Math.floor(Math.random()*100);

      this.num.push(new Numero(contador,n1,n2,n3,n4,n5,n6));

      contador++;

    }

  }

  numeros:Numero[]=[
    new Numero(1,56,92,3,5,0,75),
    new Numero(2,17,34,2,5,3,15),
    new Numero(3,12,22,1,5,43,24),
    new Numero(4,89,100,72,5,23,4),
    new Numero(5,0,11,5,52,13,6),
  ]

  dataSource=new MatTableDataSource<Numero>();
  @ViewChild(MatTable) tabla!: MatTable<Numero>;

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
    this.dataSource.data=this.numeros;
  }

  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }



  abrirDialogo(){
    const dialogo=this.dialog.open(DialogoComponent,{data:new Numero(0,0,0,0,0,0,0)});

    dialogo.afterClosed().subscribe(num => {
      if (num != undefined){
        this.insertarElemento(num);
      }
    });
  }


 modificarLista(num:Numero){

  const dialogo2 = this.dialog.open(DialogoComponent, {
    data: new Numero(num.indice,num.n1,num.n2,num.n3,num.n4,num.n5,num.n6),
  });

  dialogo2.afterClosed().subscribe(n=>{
    if (n != undefined){

      const numero = this.numeros.find(num=>num.indice == n.indice);
       if(!numero){
        return
       }
       numero.indice= numero.indice
       numero.n1= n.n1
       numero.n2= n.n2
       numero.n3= n.n3
       numero.n4= n.n4
       numero.n5= n.n5
       numero.n6= n.n7

       this.dataSource.data= this.numeros
       this.tabla.renderRows();
    }
  })
 }

 eliminarElemento(id:number){

  if(confirm('¿Deseas Eliminar la lista?')){

    this.numeros = this.numeros.filter(num => num.indice !== id);
    this.dataSource.data=this.numeros;
    this.tabla.renderRows();

  }


 }

 insertarElemento(numero:Numero){
  numero.indice=this.numeros.length+1;
    this.numeros.push(new Numero(numero.indice,numero.n1,numero.n2,numero.n3,numero.n4,numero.n5,numero.n6));
    this.dataSource.data=this.numeros;
    this.tabla.renderRows();
 }



}
