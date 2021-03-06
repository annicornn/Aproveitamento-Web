import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: any, args?: any): any {
    if (!args) {
      return values;
    }
    else {
      args = args.toUpperCase();
    }    
    
    return values.filter(item => {      
      return item.nome.toUpperCase().startsWith(args) == true
    })

  }

  
}