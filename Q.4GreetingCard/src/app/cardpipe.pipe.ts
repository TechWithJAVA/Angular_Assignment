import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardpipe'
})
export class CardpipePipe implements PipeTransform {

  transform(value: string, imagePath: string): any {
    return imagePath + "/" + value + ".png";
  }

}
