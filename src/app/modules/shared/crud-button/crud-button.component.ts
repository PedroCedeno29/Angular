import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-crud-button',
  templateUrl: './crud-button.component.html',
  styles: ``
})
export class CrudButtonComponent {

  // ? EVENTOS DE ENTRADA 
  // ? Atibutos parametros de entrada de personalización del componente
  //Color del boton
  @Input()
  styleButton: string = 'secondary' //valor por default: secondary(gris)

  //Icono del boton
  @Input()
  iconButton: string = 'edit' //valor por defaul: edit(lapiz)

  //Label o texto del boton
  @Input()
  labelButton: string = 'Actualizar' //valor por default: Actualizar


  // ? Atributos - parametros de configuración del componente
  //Mostrar el boton
  @Input()
  showButton: boolean = true;

  //Estado del boton: desactivado = false, el boton no se encuentra desactivado.
  @Input()
  disabled: boolean = false;


  //? EVENTOS DE SALIDA
  @Output() clickEvent =  new EventEmitter(); 

  clickEventUpdate(){
    this.clickEvent.emit()
  }

}
