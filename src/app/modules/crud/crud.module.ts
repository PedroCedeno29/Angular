import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { DeviceComponent } from './device/device.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PersonComponent,
    DeviceComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    DeviceComponent,
    PersonComponent
  ]
})
export class CrudModule { }
