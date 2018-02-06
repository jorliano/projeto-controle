import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dataIdade' })
export class DataIdadePipe implements PipeTransform {

  transform(value: any, args?: any): number {
    let data = new Date(value);
    let hoje = new Date();
    let idade: number = (data.getFullYear() - hoje.getFullYear());

    return idade;
  }

}
