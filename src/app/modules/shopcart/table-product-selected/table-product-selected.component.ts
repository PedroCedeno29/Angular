import { Component } from '@angular/core';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';

@Component({
  selector: 'app-table-product-selected',
  templateUrl: './table-product-selected.component.html',
  styles: ``
})
export class TableProductSelectedComponent {
  listaProductSelected:  ProductDetailI[] = [];
}
