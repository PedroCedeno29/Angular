import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableButtonComponent } from './table-button/table-button.component';
import { FormsModule } from '@angular/forms';
import { CrudButtonComponent } from './crud-button/crud-button.component';
import { QuantityPipePipe } from '../../pipes/quantity-pipe.pipe';



@NgModule({
  declarations: [
    TableButtonComponent,
    CrudButtonComponent,
    QuantityPipePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    TableButtonComponent,
    CrudButtonComponent,
    QuantityPipePipe
  ]
})
export class SharedModule { }
