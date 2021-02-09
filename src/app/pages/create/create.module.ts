import {NgModule} from '@angular/core';

import {CreateRoutingModule} from './create-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CreateComponent} from './create.component';


@NgModule({
  declarations: [CreateComponent],
  imports: [
    SharedModule,
    CreateRoutingModule
  ]
})
export class CreateModule {
}
