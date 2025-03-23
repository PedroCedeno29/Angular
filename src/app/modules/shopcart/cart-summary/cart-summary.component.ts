import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CartSummaryI } from '../../../interfaces/cartSummary.interface';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styles: ``
})
export class CartSummaryComponent {

  //Ctrl + espacio para autocompletar

  //Todas estas variables inician en 0.
  //Si tenemos un parametros de entrada con valores por defecto, solo son para inicializar el componente, estos se valores se van actualizando
  //en la medida que nosotros vayamos actualizando los valores enviados hacia nuestro componente.
  @Input() cartSummary: CartSummaryI = {
    subtotal: 0,
    iva: 0,
    subtotaliva: 0,
    valorDescuento: 0,
    totalDescuento: 0,
    totalPago: 0

  }

}
