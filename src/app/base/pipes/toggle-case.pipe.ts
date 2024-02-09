import { Pipe, PipeTransform } from '@angular/core';

// hanss | toggleCase = 'HANSS'
// HANSS | toggleCase = 'hanss'

@Pipe({
  name: 'toggleCase',
  standalone: true,
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper?: boolean): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
