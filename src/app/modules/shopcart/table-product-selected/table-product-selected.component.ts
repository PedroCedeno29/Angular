import { Component, EventEmitter, Output } from '@angular/core';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';

@Component({
  selector: 'app-table-product-selected',
  templateUrl: './table-product-selected.component.html',
  styles: ``
})
export class TableProductSelectedComponent {
  
  @Output() eventQuitProduct = new EventEmitter<ProductDetailI>();

  listaProductSelected:  ProductDetailI[] = [];

  //Este metodo lo que va a hacer es emitir el registro seleccionado, es decir, va a pasarle el producto seleccionado al componenten padre que es el carrito de compras.
  quitProduct(product: ProductDetailI){
    this.eventQuitProduct.emit(product);
  }

}
