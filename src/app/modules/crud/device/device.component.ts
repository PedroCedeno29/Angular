import { Component, ViewChild } from '@angular/core';
import { DeviceI } from '../../../interfaces/device.interface';
import { Modal } from 'bootstrap';


@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styles: ``
})
export class DeviceComponent {

  @ViewChild('deviceModal') deviceModal!: Modal


  deviceList: DeviceI[] = [
    {
      id: 1,
      name: 'Samsung S25 ultra',
      quantity: 25
    },
    {
      id: 2,
      name: 'Xiaomi Note 9 pro',
      quantity: 30
    },
    {
      id: 3,
      name: 'Redmi Note 14 pro',
      quantity: 15
    }
  ]

  //Este metodo va a recibir los datos actualizados del producto que se introdujeron en el modal.
  //find() es un método de los arrays en JavaScript/TypeScript que busca el primer elemento que cumpla con una condición.
  updateTable(deviceUpdate: DeviceI){
    let findDevice = this.deviceList.find(device => device.id === deviceUpdate.id);

    if(findDevice){
      let devicePosition = this.deviceList.indexOf(findDevice);

      //Aqui se utiliza el slice para eliminar 
      this.deviceList.splice(devicePosition, 1);
      this.deviceList.push(deviceUpdate);
      this.deviceList.sort( (device1, device2) => device1.id - device2.id);
    }
  }
}

//? indexOf(findDevice) busca la posición de findDevice dentro del array deviceList y la guarda en devicePosition. 
// ? this.deviceList.splice(devicePosition, 1) ---> El número 1 indica que solo queremos eliminar un único elemento, que es el dispositivo encontrado en devicePosition.
