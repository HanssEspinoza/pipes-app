import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../model';

@Pipe({
  name: 'sortBy',
  standalone: true,
})
export class SortByPipe implements PipeTransform {
  transform(value: Hero[], sortBy: keyof Hero | null): unknown {
    return null;
  }
}
