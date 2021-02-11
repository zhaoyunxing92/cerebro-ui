import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeIntervalPipe} from './time/time-interval.pipe';


@NgModule({
    declarations: [TimeIntervalPipe],
    imports: [
        CommonModule
    ],
    exports: [
        TimeIntervalPipe
    ]
})
export class PipeModule {
}
