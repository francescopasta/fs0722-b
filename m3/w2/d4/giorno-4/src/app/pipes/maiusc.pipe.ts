import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maiusc'
})
export class MaiuscPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const upString = value.toUpperCase()
    return upString;
  }

}
