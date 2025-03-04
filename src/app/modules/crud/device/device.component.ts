import { Component } from '@angular/core';
import { DeviceI } from '../../../interfaces/device.interface';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styles: ``
})
export class DeviceComponent {

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
}
