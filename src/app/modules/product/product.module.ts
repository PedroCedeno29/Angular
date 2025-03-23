import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { EditproductComponent } from './editproduct/editproduct.component';


@NgModule({
  declarations: [
    EditproductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
