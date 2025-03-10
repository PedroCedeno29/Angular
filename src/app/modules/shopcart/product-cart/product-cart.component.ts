import { Component, ViewChild } from '@angular/core';
import { TableProductSelectedComponent } from '../table-product-selected/table-product-selected.component';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styles: ``
})
export class ProductCartComponent {
  //el signo de exclamación indica que ese elemento si existe que no va a ser nulo.
  //@ViewChild(TableProductSelectedComponent) indica que queremos acceder a una instancia del componente TableProductSelectedComponent 
  // dentro del template del componente padre (ProductCartComponent). Esta instancia va a estar representada por la variable productSelected.
  @ViewChild(TableProductSelectedComponent) productSelected!:  TableProductSelectedComponent;

  aggProduct(product:ProductDetailI){
    this.productSelected.listaProductSelected.push(product)
  }
}
