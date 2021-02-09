import {NgModule} from '@angular/core';

import {NodesRoutingModule} from './nodes-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {NodesComponent} from './nodes.component';


@NgModule({
  declarations: [NodesComponent],
  imports: [
    SharedModule,
    NodesRoutingModule
  ]
})
export class NodesModule {
}
