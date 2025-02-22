import { Component } from '@angular/core';
import { loginInterface } from '../interfaces/login.interface';

@Component({
  selector: 'app-ejemplo', //nombre del componente en general que se va a usar para instanciarlo en cualquier pagina dentro del proyecto
  templateUrl: './ejemplo.component.html'  //Indica cual es el HTML de la presentación del componente.
})
export class EjemploComponent {
  placeHolderPassword: string = "Ingrese su contraseña";

  //Se define un objeto de tipo loginInterface para vincularlo con la estructura del login que hemos diseñado. 
  objetoLogin: loginInterface = {
    user:'',
    password: '',
    logged: false
  }


  loginProcess(){
    console.log(JSON.stringify(this.objetoLogin))
  }

}
