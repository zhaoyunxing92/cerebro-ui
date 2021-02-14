import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'timeInterval'
})
export class TimeIntervalPipe implements PipeTransform {

  transform(time: number): string {
    let timeStr = '0sec';
    const unitMeasure = {
      yr: 31536000000,
      mo: 2678400000,
      wk: 604800000,
      d: 86400000,
      h: 3600000,
      min: 60000,
      sec: 1000,
    };

    Object.keys(unitMeasure).some(key => {
      const amount = Math.floor(time / unitMeasure[key]);
      if (amount) {
        timeStr = amount + key;
        return true;
      }
    });
    return timeStr;
  }
}
