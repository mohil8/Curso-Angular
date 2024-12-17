import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator'
import { AppComponent } from './app.component';
import { CrudRandomNumbersComponent } from './crud/crud.component';

import { MatSortModule} from '@angular/material/sort';
import {  HttpClientModule } from '@angular/common/http';
import { CuadroDialogoComponent } from './cuadro-dialogo/cuadro-dialogo.component';


@NgModule({
  declarations: [AppComponent, CrudRandomNumbersComponent, CuadroDialogoComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,MatPaginatorModule,HttpClientModule,MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

