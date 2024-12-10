import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListadoEmpledoComponent } from './listado-empledo/listado-empledo.component';
import { CuadroDialogoEmpleadoComponent } from './cuadro-dialogo-empleado/cuadro-dialogo-empleado.component';
import {HttpClientModule} from '@angular/common/http'
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ListadoEmpledoComponent,
    CuadroDialogoEmpleadoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
