import {NgModule} from '@angular/core';

import {TemplatesRoutingModule} from './templates-routing.module';
import {TemplatesComponent} from './templates.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [TemplatesComponent],
  imports: [
    SharedModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule {
}
