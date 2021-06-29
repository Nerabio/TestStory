import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'plural'
})
export class PluralPipe implements PipeTransform {
  transform(n: number, forms?: Array<string>): string {
    return forms[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];
  }
}
// {{ 5 | plural:['минута', 'минуты', 'минут']}}
