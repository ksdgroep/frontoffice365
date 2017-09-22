import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralizeText'
})
export class PluralizeText implements PipeTransform {
  transform(value: number, textSingle: string, textMultiple: string): string {

    if (value <= 1) {
      return value + ' ' + textSingle;
    } else {
      return value + ' ' + textMultiple;
    }
  }
}
