import {NgModule} from '@angular/core';

import {RestRoutingModule} from './rest-routing.module';
import {RestComponent} from './rest.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [RestComponent],
  imports: [
    SharedModule,
    RestRoutingModule
  ]
})
export class RestModule {
}
