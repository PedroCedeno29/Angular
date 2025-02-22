import { Component } from '@angular/core';

@Component({
  selector: 'app-miprimercomponente',
  templateUrl: './miprimercomponente.component.html',
  styleUrl: './miprimercomponente.component.css'
})
export class MiprimercomponenteComponent {
  //Aqui definimos las funciones que vamos a usar dentro del componente, pero al ser usadas dentro de una clase vendrian a ser metodo

  nombre: string = '';

  clickBoton(){
    alert(`El valor del nombre es: ${this.nombre}`)
  }

  mouseMoveEvent(){
    console.log("El mouse paso por aqui.");
  }

  imprimirValor(){
    console.log(`La variable: ${this.nombre}`)
  }
}
