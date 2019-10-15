import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: any[], arg: string): any {
    if(!arr) return [];
    if(!arg) return arr;

    arg = arg.toUpperCase();
    return arr.filter( el => {
      return el['crashId'].includes(arg);
    });
  }
}
