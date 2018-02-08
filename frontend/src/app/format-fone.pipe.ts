import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFone'
})
export class FormatFonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log("valor : "+value);

    let numero = new String(value);;
    let formatado = ""+numero.slice( 0, 5 )+"-"+numero.slice( 5, 7 )+"-"+numero.slice( 7, 9 );

    return formatado;
  }

}
