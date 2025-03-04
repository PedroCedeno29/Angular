import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonTableI } from '../../../interfaces/buttontable.interface';
import { PersonI } from '../../../interfaces/person.interface';

@Component({
  selector: 'app-table-button',
  templateUrl: './table-button.component.html',
  styles: ``
})
export class TableButtonComponent implements OnInit, AfterViewInit {

  firstNameLocal: string ='';
  lastNameLocal: string = '';
  phoneLocal: string = '';
  

  //ngAfterViewInit(): Espera a que todos los componentes esten renderizados, es decir ya hayan iniciado y ya haya recibido toda la información como consultar toda la información de la tabla en la base de datos.
  //Este cogeria la informacion.
  //Luego de que se renderizo el componente, con este metodo, se pasan los valoress de las filas de la tabla al boton 'Actualizar'
  //entonces al hacer click en este boton el modal ya tiene los valores correctos de la fila correspondiente porque fueron asignados despues de que se renderizo el componente.
  ngAfterViewInit(): void {
    this.firstNameLocal = this.personData.firstname;
    this.lastNameLocal = this.personData.lastname;
    this.phoneLocal = this.personData.phone;
  }

  //ngOnInit(): carga los valores al inicio del componente. Tambien este puede realizar la consulta de los datos.
  //EL OnInit hace que al iniciar el componente de los botones, es decir cuando ya se agrega el boton (aparece en la interfaz), este recibe la informacion de la fila a que pertenece, y al iniciar el componente deberia asignar los valores a los campos de entrada del modal para poder actualizarlos o modificarlos. 
  ngOnInit(): void {
    //this.firstNameLocal = this.personData.firstname;
    //this.lastNameLocal = this.personData.lastname;
    //this.phoneLocal = this.personData.phone;
  }

  @Input()
  buttonProperties: ButtonTableI = {
    labelUpdate: 'Update',
    labelDelete: 'Delete',
    labelAditional: 'Option',
    styleButtonUpdate: 'primary',
    styleButtonDelete: 'danger',
    styleButtonAditional: 'success',
    showUpdate: true,
    showDelete: true,
    showOption: false,
    iconButtonUpdate: 'refresh',
    iconButtonDelete: 'trash',
    iconButtonAditional: 'plus'
    
  }

  //Aqui declaramos un input con las variables inicializadas para que cuando se renderice la tabla del componente person, este cargue los valores de cada fila en sus respectivos botones.
  @Input()
  personData: PersonI = {
    id: 0,
    firstname: '',
    lastname: '',
    fecha_nacimiento:'',
    genre: '',
    phone: '',
    ciudad: '',
    nivel_estudios: '',
  }

 /*
  //El evento Input esta obligado a manejar información.
  @Input()
  labelUpdate: string = 'Update';

  @Input()
  labelDelete: string = 'Delete';

  @Input()
  labelAditional: string = 'Option';

  @Input()
  showUpdate: boolean = true;

  @Input()
  showDelete: boolean = true;

  @Input()
  showOption: boolean = false; //Esta en false para que este boton no se muestre opr el momento.

  @Input()
  styleButtonUpdate: string = 'primary';

  @Input()
  styleButtonDelete: string = 'danger';

  @Input()
  styleButtonOption: string = 'succes';

  @Input()
  IconButtonUpdate: string = 'refresh';

  @Input()
  IconButtonDelete: string = 'trash';

  @Input()
  IconButtonAditional: string = 'plus'; */

  //Los parametros de salida o eventes de salidaa (Output) no se pueden manejar con interfaces.

  @Output() eventUpdate = new EventEmitter();

  @Output() eventDelete = new EventEmitter();

  @Output() eventOption = new EventEmitter();

  @Output() eventSave = new EventEmitter();


  clickEventUpdate(){
    this.eventUpdate.emit();
  }

  clickEventeDelete(){
    console.log(JSON.stringify(this.personData))
    this.eventDelete.emit();
  }

  clickEventOption(){
    this.eventOption.emit();
  }

  //Cuando el usuario edita los datos en el modal y presiona 'Guardas cambios' la funcion clickEventSave() se ejecuta.
  //Esta funcion crea un nuevo objeto 'personUpdate' con los datos modificados
  clickEventSave(){
    //Se debe asignar los nuevos valores ingresados por el usuario a una nueva variable.
    //Aqui establecimos el objeto que va a enviar la informacion a actualizar que va a ser del tipo PersonI, 
    //luego se establecio los valores que se van a actualizar en el modal. Son 3: el nombre, el apellido y el telefono.
    let personUpdate: PersonI = {
      id: this.personData.id,
      firstname: this.firstNameLocal,
      lastname: this.lastNameLocal,
      phone: this.phoneLocal,
      ciudad: this.personData.ciudad,
      fecha_nacimiento: this.personData.fecha_nacimiento,
      genre: this.personData.genre,
      nivel_estudios: this.personData.nivel_estudios
    }
    //emite un evento que puede ser capturado en un componente padre para actualizar la lista de personas.
    this.eventSave.emit(personUpdate);

  }

}
