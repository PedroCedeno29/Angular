import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableProductComponent } from './table-product/table-product.component';
import { SharedModule } from '../shared/shared.module';
import { TableProductSelectedComponent } from './table-product-selected/table-product-selected.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';



@NgModule({
  declarations: [
    TableProductComponent,
    TableProductSelectedComponent,
    ProductCartComponent,
    CartSummaryComponent
    ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ProductCartComponent
  ]
})
export class ShopcartModule { }
