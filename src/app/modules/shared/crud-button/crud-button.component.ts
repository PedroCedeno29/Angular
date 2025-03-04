import { Component, EventEmitter, Input, Output, AfterViewInit, OnInit } from '@angular/core';
import { DeviceI } from '../../../interfaces/device.interface';

@Component({
  selector: 'app-crud-button',
  templateUrl: './crud-button.component.html',
  styles: ``
})
export class CrudButtonComponent implements AfterViewInit, OnInit {

  //aqui se inicializan los valores por defecto 
  //Cuando se rendericen todos los componentes de la pagina (cuando se cargue el boton), es decir, carguen complemente, 
  // toda la informacion de la fila se va a cargar sobre el boton y el boton va a coger esa informacion y la va almacenar en la
  //variable deviceUpdate para que si se hace algun cambio la informacion se mantenga a salva y solo si se le da a guardar esa informacion se actualizara.

  name:string = '';
  quantity: number = 0;

  ngOnInit(): void {
    this.name = this.device.name;
    this.quantity = this.device.quantity;
    
  }

  //metodo que se ejecuta justo despues de cargar la vista
  ngAfterViewInit(): void {
    //this.deviceUpdate = this.device;
  }

  
  
  // ? EVENTOS DE ENTRADA 
  // ? Atributos o  parametros de entrada de personalización del componente
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

  //informacion de entrada
  //Se crea una variable de @Input para que cuando se rendericen todos los componentes en el componente padre y se recorra la lista de dispositivos
  //del componente padre estos dispositivos se pasen a esta variable device del componente hijo y asi se vayan almacenando los datos de cada dispositivos
  //para posteriormente poder modificarlos.
  
  @Input()
  device: DeviceI = {
    id: 0,
    name: '',
    quantity: 0
  }


  //? EVENTOS DE SALIDA
  @Output() clickEvent =  new EventEmitter(); 

  @Output() clickSave =  new EventEmitter();

  clickEventUpdate(){
    this.clickEvent.emit();
  }

  //Cuando se ejecute este metodo clickEventSave() en el componente hijo, este mismo va a emitir un evento clickSave para notificar al componente padre.
  //Cuando se ejecute este metodo this.clickSave.emit(deviceUpdate); envía los datos actualizados del dispositivo al componente padre.
  clickEventSave(){
    let deviceUpdate: DeviceI = {
      id: this.device.id,
      name: this.name,
      quantity: this.quantity
    }
    this.clickSave.emit(deviceUpdate);
  }

}
