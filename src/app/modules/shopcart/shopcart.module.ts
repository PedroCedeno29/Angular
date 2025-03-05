import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableProductComponent } from './table-product/table-product.component';



@NgModule({
  declarations: [
    TableProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableProductComponent
  ]
})
export class ShopcartModule { }
