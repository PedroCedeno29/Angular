import { Component, EventEmitter, Output } from '@angular/core';
import { loginInterface } from '../../interfaces/login.interface';

@Component({
  selector: 'app-ejemplo', //nombre del componente en general que se va a usar para instanciarlo en cualquier pagina dentro del proyecto
  templateUrl: './ejemplo.component.html'  //Indica cual es el HTML de la presentación del componente.
})
export class EjemploComponent {

  //El evento puede o no devolver el string. En tiempo de desarrollo si no sabemos que va a devolver el vento se puede definir como un <any>.
  //El switchEvent ya representa un nuevo atributo del EjemploComponent. Es un evento de salida.
  @Output() switchEvent = new EventEmitter<any>();



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


  //Este va a ser el metodo que se va a ejecutar cada vez que un usuario de click en el boton Registrarse
  clickEventEmiter(){
    //Aqui se envía una señal al componente padre
    this.switchEvent.emit();
  }

}
