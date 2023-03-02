import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteSpacePipe'
})
export class DeleteSpacePipePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(' ',''); // delete space
  }

}
