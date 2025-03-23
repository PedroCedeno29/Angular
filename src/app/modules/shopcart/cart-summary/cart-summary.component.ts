import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styles: ``
})
export class CartSummaryComponent {

  subtotal: number = 0;
  iva: number = 0;
  subtotaliva: number = 0;
  valorDescuento: number = 0;
  totalDescuento:  number = 0;
  totalPago: number = 0;

}
