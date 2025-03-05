import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityPipe'
})
export class QuantityPipePipe implements PipeTransform {

  //El value representa el valor al que se va a transformar.
  //los argumentos (args) para establecer ciertos parametros como cantidad de decimales, si es que se va a agregar un valor específico.
  //los ..args indican que pueden el pipe recibir n cantidad de parametros asi como ninguno.
  transform(value: unknown, ...args: unknown[]): unknown {

    if(args.length > 0){
      let wordPipe = args[0];
      return `${value}  ${wordPipe}`
    } else {
      return `${value} items`;
    }
  }

}
