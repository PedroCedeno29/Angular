import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SignupI } from '../interfaces/signup.interface';

@Component({
  selector: 'app-ejemplo2',
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.css',
  standalone: true,
  imports: [FormsModule] //Aqui se importante el FormsModulo ya que este componente es standalone y no pertenece a un modulo padre
})
export class Ejemplo2Component {

  firstInputPassword: string = '';
  confirmInputPassword: string = '';

  signupobjetct: SignupI = {
    firstname: '',
    lastname: '',
    birthdate: '',
    email:'',
    phonenumber:'',
    password:''
  }
}
