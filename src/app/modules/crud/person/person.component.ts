import { Component } from '@angular/core';
import { personDS } from '../../../datasource/person.datasource';
import { ButtonTableI } from '../../../interfaces/buttontable.interface';
import { PersonI } from '../../../interfaces/person.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: ``
})
export class PersonComponent {

  //Esta variable 'dataPerson' va a almacenar los datos del arreglo de personDS que contiene la lista de personas.
  //dataPerson se usa en el person.component.html para generar la tabla.
  dataPerson: PersonI[] = personDS;

  //Lista de personas que se van a actualizar
  personUpdateList: PersonI[] = [];

  buttonProperties: ButtonTableI = {
    labelUpdate: 'Actualizar',
    labelDelete: 'Delete',
    labelAditional: 'Option',
    styleButtonUpdate: 'primary',
    styleButtonDelete: 'danger',
    styleButtonAditional: 'success',
    iconButtonUpdate: 'refresh',
    iconButtonDelete: 'trash',
    iconButtonAditional: 'plus',
    showUpdate: true,
    showDelete: true,
    showOption: false
  }

  addPersonToUpdate (personUpdate: PersonI){
    this.personUpdateList.push(personUpdate);
    console.info(JSON.stringify(this.personUpdateList));
  }
  
}
