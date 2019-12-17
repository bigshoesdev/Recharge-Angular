import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonFormat',
  pure: false
})
export class JsonFormatPipe implements PipeTransform {

  transform(val: object): string {
    return JSON
            .stringify(val)
            .replace(/,"/gi, ', . . . "')
            .replace(/:/gi, " = ")
  }

}