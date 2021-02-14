import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeIntervalPipe} from './time/time-interval.pipe';
import {BytesPipe} from './bytes/bytes.pipe';


@NgModule({
  declarations: [TimeIntervalPipe, BytesPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TimeIntervalPipe,
    BytesPipe
  ]
})
export class PipeModule {
}
