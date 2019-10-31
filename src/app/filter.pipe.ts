import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    return items.filter(it => {
      if (it.volumeInfo.authors) {
        return (it.volumeInfo.authors && it.volumeInfo.authors.includes(searchText)) || (it.volumeInfo.categories &&
          it.volumeInfo.categories.includes(searchText));
      }
    });
  }
}

