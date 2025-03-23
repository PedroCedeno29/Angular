import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { TableProductComponent } from './table-product/table-product.component';

const routes: Routes = [
  {
    path: '', component: ProductCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopCartRoutingModule { }