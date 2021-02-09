import {NgModule} from '@angular/core';

import {OverviewRoutingModule} from './overview-routing.module';
import {OverviewComponent} from './overview.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [OverviewComponent],
  imports: [
    SharedModule,
    OverviewRoutingModule
  ]
})
export class OverviewModule {
}
