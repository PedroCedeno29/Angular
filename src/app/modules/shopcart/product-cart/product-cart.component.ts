import { Component, ViewChild } from '@angular/core';
import { TableProductSelectedComponent } from '../table-product-selected/table-product-selected.component';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styles: ``
})

//? Product cart es el componente principal y es quien recibe los registros de productos en stock y los asigna mediante el ViewChild sobre su otro componente hijo TableProductSelected
export class ProductCartComponent {
  //el signo de exclamación indica que ese elemento si existe que no va a ser nulo.
  //@ViewChild(TableProductSelectedComponent) indica que queremos acceder a una instancia del componente TableProductSelectedComponent 
  // dentro del template del componente padre (ProductCartComponent). Esta instancia va a estar representada por la variable productSelected.
  @ViewChild(TableProductSelectedComponent) productSelected!:  TableProductSelectedComponent;

  aggProduct(product:ProductDetailI){
    let productSelected = product.product;
    let productCategorySelected = product.category;
    let productPriceSelected = product.price;
    let productIdSelected = product.id;

    //aqui vamos a comprobar si la lista de productos tiene algun producto.S
    if(this.productSelected.listaProductSelected.length > 0){
      //Validar si existe o no el producto.
      let productValidation = this.productSelected.listaProductSelected.find(productInCart => productInCart.id == productIdSelected);

      if(productValidation){
        this.productSelected.listaProductSelected.map(productInCart => {
          if(productInCart.id == productValidation.id){
            productInCart.stock++;
          }
        })
      } else {
        let newProduct: ProductDetailI = {
          id: productIdSelected,
          product: productSelected,
          category: productCategorySelected,
          price: productPriceSelected,
          provider: '',
          stock: 1
        }
        this.productSelected.listaProductSelected.push(newProduct)
      }
      //Este else es para cuando se va a agregar el primer producto al carrito de compras. Una vez que el carrito ya tiene 1 producto
      //agregado procede con la logica del if.
    }else{
      let newProduct: ProductDetailI = {
        id: productIdSelected,
        product: productSelected,
        category: productCategorySelected,
        price: productPriceSelected,
        provider: '',
        stock: 1
      }
      this.productSelected.listaProductSelected.push(newProduct)
    }
  }
}
