import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, name: any, defaultFilter: boolean): any {
      console.log(items, name)
      
    if(name == null){
        return items;
    } 
    else{
        return items.filter(function(i){
          return i.name.toLowerCase().indexOf(name.toLowerCase()) > -1;
        });
    }
  } 
}
   

