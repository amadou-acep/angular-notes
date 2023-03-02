import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteEtoile'
})
export class DeleteEtoilePipe implements PipeTransform {

  transform(value: string):string {
    return value.replace('(*)',''); // delete etoile et parenthese
  }

}
