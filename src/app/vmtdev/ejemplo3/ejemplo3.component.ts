import { Component, viewChild, ViewChild } from '@angular/core';
import { EjemploComponent } from '../ejemplo/ejemplo.component';
import { Ejemplo2Component } from '../ejemplo2/ejemplo2.component';

@Component({
  selector: 'app-ejemplo3',
  templateUrl: './ejemplo3.component.html',
  styles: ``
})
export class Ejemplo3Component {

  showLogin: boolean = true;

  @ViewChild("login") 
  elementoLogin!: EjemploComponent;


  @ViewChild("signup") elementoRegistro!: Ejemplo2Component;

  switchAuthProcess(){
    if(this.showLogin){
      this.showLogin = false;
    } else{
      this.showLogin = true;
    }
  }

}
