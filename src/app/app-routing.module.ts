// ? Aqui se van a manejar todas las rutas de nuestro proyecto

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo3Component } from './vmtdev/ejemplo3/ejemplo3.component';
import { NotfoundComponent } from './modules/shared/notfound/notfound.component';

const routes: Routes = [
  //Se va a establecer una ruta hacia un componente.
  //Una ruta esta compuesta por varios atributos: 
  //path --> nos permite establecer el valor que vamos a tener presente en la URL.
  //component --> para indicar a que componente se va a apuntar.
  //? Se va establecer la ruta por defecto, si no hay nada en el path se va hacia auth y esto va a aplicarse para todos. Es importante que esta ruta
  //este primero porque esta ruta es el valor por defecto. Basicamente aqui se esta diciendo que cuando la pagina ya no tiene una ruta establecida que rediriga al auth.
  {path: '', redirectTo: 'auth', pathMatch: 'full'},

  //? Ruta por componente.
  {
    path: 'auth', component: Ejemplo3Component
  },
  //el loadComponent especifica el lazy loading para un componente. 
  //? La carga perezosa se aplica a componentes standalone. Los standalone no funcionan con modulos pero estos componentes pueden contener muchos otros componentes y se 
  //necesitar la carga perezosa para que el mecanismo de Angular entienda que tiene multiples cargas de multiples componentes que se van a presentar.
  {
    path: 'authld',
    loadComponent: () => import('./vmtdev/ejemplo2/ejemplo2.component').then(m => m.Ejemplo2Component)
  },
  //? Carga perezosa por modulos.
  //Aqui el modulo tiene especificado un modulo de rutas y este modulo de rutas apunto a un componente. En este caso shopcart.
  //Donde en el shopcart va a apuntar a su modulo principal que es el ProductCartComponent o carrito de compras.
  //Cabe recalcar que ProductCartComponent es el unico componente que se exporta en el modulo de shopcart.
  {
    path: 'shop-cart',
    //EL loadChildren indica que el modulo principal va a ser el modulo padre del componente que vamos a cargar en la ruta.
    //Cuando se quiere acceder a un componente especifico de un modulo este modulo debe tener su modulo de rutas.
    //Cada vez que se quiere agregar un modulo de rutas
    loadChildren: () => import('./modules/shopcart/shopcart.module').then(m => m.ShopcartModule)
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

//? Aqui el imports llena el RouterModule e indica desde donde va a tomar las rutas.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
