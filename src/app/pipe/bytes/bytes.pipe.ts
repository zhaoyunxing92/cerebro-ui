import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bytes'
})
export class BytesPipe implements PipeTransform {

  transform(bytes: number): string {
    const units = ['b', 'KB', 'MB', 'GB', 'TB', 'PB'];
    if (bytes > 0) {
      const idx = Math.floor(Math.log(bytes) / Math.log(1024));
      return (bytes / Math.pow(1024, idx)).toFixed(2) + units[idx];
    } else {
      return 0 + units[0];
    }
  }
}
