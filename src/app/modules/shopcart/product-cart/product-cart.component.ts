import { Component, ViewChild } from '@angular/core';
import { TableProductSelectedComponent } from '../table-product-selected/table-product-selected.component';
import { ProductDetailI } from '../../../interfaces/productdetail.interface';
import { TableProductComponent } from '../table-product/table-product.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartSummaryI } from '../../../interfaces/cartSummary.interface';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styles: ``
})

//? Product cart es el componente principal y es quien recibe los registros de productos en stock y los asigna mediante el ViewChild sobre su otro componente hijo TableProductSelected
export class ProductCartComponent {
  //el signo de exclamación indica que ese elemento si existe que no va a ser nulo.
  //@ViewChild(TableProductSelectedComponent) indica que queremos acceder a una instancia del componente hijo TableProductSelectedComponent 
  // dentro del template del componente padre (ProductCartComponent). Esta instancia va a estar representada por la variable productSelected.
  @ViewChild(TableProductSelectedComponent) productSelected!:  TableProductSelectedComponent;

  //Con este metodo las acciones que yo haga dentro del componente hijo table-product-selected (en este caso eliminar un producto)
  //va a afectar tanto en este componente como en el otro componente hijo table-product y esto orquestado por el componente principal product-cart.
  @ViewChild(TableProductComponent) productsStock!: TableProductComponent;

  //Viewchild nos permite acceder en tiempo real hacia un componente que esta dentro de otro componente. Estableciendo a ese componente
  //que accede a otros componentes (en este caso product-cart) como el componente padre de esos otros componentes.
  @ViewChild(CartSummaryComponent) cartSummary!: CartSummaryComponent;

  discount: number = 0.10;

  //Este es el que va a estar calculado en el componente principal y lo inicializamos con valores por default.
  cartSummaryValue: CartSummaryI = {
    subtotal: 0,
    iva: 0,
    subtotaliva: 0,
    valorDescuento: 0,
    totalDescuento:  0,
    totalPago: 0,
  }

  aggProduct(product:ProductDetailI){
    //Estas variables se crearon para crear un nuevo producto dentro del arreglo listaProductSelect cuando no haya ningun producto dentro del mismo.
    let productSelected = product.product;
    let productCategorySelected = product.category;
    let productPriceSelected = product.price;
    let productIdSelected = product.id;

    //aqui vamos a comprobar si la lista de productos tiene algun producto.
    if(this.productSelected.listaProductSelected.length > 0){

      //Validar si existe o no el producto dentro del arreglo listaProductSelected.
      let productValidation = this.productSelected.listaProductSelected.find(productInCart => productInCart.id == productIdSelected);

      if(productValidation){
        //Aqui se busca dentro de los valores de la listaProductSelected (es un arreglo).
        this.productSelected.listaProductSelected.map(productInCart => {
          if(productInCart.id == productValidation.id){
            productInCart.stock++;
          }
        })
      } 
      //Caso contrario, si no aún no existe el producto en la listaProductSelected se va a agregar dicho producto con stock 1.
      else {
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

    //Aqui para que al momento de darle al boton de agregar producto del componente hijo table-product, automaticamente se calculen los valores
    //de la factura
    this.cartSummaryValue = this.subtotalCalc(this.productSelected.listaProductSelected); 
    //Aqui se esta creando un objeto que va a recibir los valores que retorna el metodo subtotalCalc
    // this=  this.subtotalCalc(this.productSelected.listaProductSelected); 
    // this.cartSummary.subtotal = subtotalValue;
    // this.cartSummary.iva = ivaValue;
    // this.cartSummary.subtotaliva = subtotalIvaValue;
    // this.cartSummary.totalDescuento = discountValue;
    // this.cartSummary.totalPago = totalValue;
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

    this.cartSummaryValue = this.subtotalCalc(this.productSelected.listaProductSelected); 
    //Aqui se esta creando un objeto que va a recibir los valores que retorna el metodo subtotalCalc. Se 
    // let {subtotalValue, ivaValue, subtotalIvaValue, discountValue, totalValue } =  this.subtotalCalc(this.productSelected.listaProductSelected); 
    // this.cartSummary.subtotal = subtotalValue;
    // this.cartSummary.iva = ivaValue;
    // this.cartSummary.subtotaliva = subtotalIvaValue;
    // this.cartSummary.totalDescuento = discountValue;
    // this.cartSummary.totalPago = totalValue;

  }

  subtotalCalc(productSelectedList: ProductDetailI[]): CartSummaryI {
    let subtotal: number = 0;
    let iva: number = 0;
    let subtotaliva: number = 0;
    let totalDescuento: number = 0;
    let totalPago: number = 0;

    if(productSelectedList.length > 0){
      productSelectedList.forEach(product => {
        subtotal += subtotaliva + (product.price * product.stock);
      })
    }

    
    iva = subtotal * 0.15;
    subtotaliva = subtotal  + iva;
    totalDescuento = subtotaliva * this.discount;
    totalPago = subtotaliva - totalDescuento;
    return {
      subtotal,
      iva,
      subtotaliva,
      totalDescuento,
      totalPago, 
      valorDescuento: this.discount
    };
  }
}
