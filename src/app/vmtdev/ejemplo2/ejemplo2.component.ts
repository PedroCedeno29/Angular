import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupI } from '../../interfaces/signup.interface';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.css',
  standalone: true,
  imports: [FormsModule] //Aqui se importante el FormsModulo ya que este componente es standalone y no pertenece a un modulo padre
})
export class Ejemplo2Component {

  @Output() switchEvent = new EventEmitter();

  firstInputPassword: string = '';
  confirmInputPassword: string = '';

  oculto: boolean = true;

  signupobjetct: SignupI = {
    firstname: '',
    lastname: '',
    birthdate: '',
    email:'',
    phonenumber:'',
    password:''
  }

  clickEventEmitter(){
    this.switchEvent.emit()
  }
}
