import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableButtonComponent } from './table-button/table-button.component';
import { FormsModule } from '@angular/forms';
import { CrudButtonComponent } from './crud-button/crud-button.component';



@NgModule({
  declarations: [
    TableButtonComponent,
    CrudButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TableButtonComponent,
    CrudButtonComponent
  ]
})
export class SharedModule { }
