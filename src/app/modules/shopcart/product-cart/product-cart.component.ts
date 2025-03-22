import { Component, ViewChild } from '@angular/core';
import { TableProductSelectedComponent } from '../table-product-selected/table-product-selected.component';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';
import { TableProductComponent } from '../table-product/table-product.component';

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

  //Con este metodo las acciones que yo haga dentro del componente hijo table-product-selected (en este caso eliminar un producto)
  //va a afectar tanto en este componente como en el otro componente hijo table-product y esto orquestado por el componente principal product-cart.
  @ViewChild(TableProductComponent) productsStock!: TableProductComponent;

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

  quitProduct(product: ProductDetailI){
    let productIdQuit = product.id;
    let productQuantity = product.stock;

    this.productsStock.listaproduct.map(productQuit => {
      if(productQuit.id == productIdQuit){
        productQuit.stock++;
      }
    });

    this.productSelected.listaProductSelected.map(productSelected => {
      if(productSelected.id == productIdQuit){
        productSelected.stock--;
      }
    });

    //Aqui se obtiene el registro del producto actualizado en la lista y se va a validar el stock del producto.
    let productQuitValidation = this.productSelected.listaProductSelected.find(productSelectedQuit => productSelectedQuit.id == productIdQuit);

    if (productQuitValidation!.stock == 0){
      //indexOf: encuentra la posicion del elemento
      let indexDeleteProduct = this.productSelected.listaProductSelected.indexOf(productQuitValidation!);

      //Aqui se elimina el indice o la posicion del producto que se desea eliminar del arreglo y se elimina solo 1 elemento.
      this.productSelected.listaProductSelected.splice(indexDeleteProduct,1)
    }

  }
}
