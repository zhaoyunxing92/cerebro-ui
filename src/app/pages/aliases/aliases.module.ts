import {NgModule} from '@angular/core';

import {AliasesRoutingModule} from './aliases-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {AliasesComponent} from './aliases.component';


@NgModule({
  declarations: [AliasesComponent],
  imports: [
    SharedModule,
    AliasesRoutingModule
  ]
})
export class AliasesModule {
}
