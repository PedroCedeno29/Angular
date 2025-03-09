import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableProductComponent } from './table-product/table-product.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TableProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TableProductComponent
  ]
})
export class ShopcartModule { }
