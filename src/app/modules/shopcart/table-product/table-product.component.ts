import { Component } from '@angular/core';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styles: ``
})
export class TableProductComponent {

  listaproduct: ProductDetailI[] = [
    {
      "id": 1,
      "product": "Play Station 5",
      "provider": "H&B sa",
      "price": 600.00,
      "stock": 40,
      "category": "OC"
    },
    {
      "id": 2,
      "product": "PC Gammer",
      "provider": "Asus",
      "price": 850.00,
      "stock": 2000,
      "category": "OC"
    },
    {
      "id": 3,
      "product": "MousePad",
      "provider": "Juan Marcet",
      "price": 10.00,
      "stock": 3,
      "category": "VA"
    },
    {
      "id": 4,
      "product": "Doppler",
      "provider": "General Electric",
      "price": 120.00,
      "stock": 11,
      "category": "HT"
    },
    {
      "id": 5,
      "product": "AirFried",
      "provider": "Hometech",
      "price": 230.00,
      "stock": 20,
      "category": "CO"
    },
    {
      "id": 6,
      "product": "Parlante",
      "provider": "Bosse",
      "price": 190.00,
      "stock": 1,
      "category": "VA"
    },
    {
      "id": 7,
      "product": "Aro de luz",
      "provider": "Castell",
      "price": 90.00,
      "stock": 11,
      "category": "VA"
    }
  ];

}
