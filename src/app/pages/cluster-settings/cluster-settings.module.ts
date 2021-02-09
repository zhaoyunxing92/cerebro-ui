import {NgModule} from '@angular/core';

import {ClusterSettingsRoutingModule} from './cluster-settings-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {ClusterSettingsComponent} from './cluster-settings.component';


@NgModule({
  declarations: [ClusterSettingsComponent],
  imports: [
    SharedModule,
    ClusterSettingsRoutingModule
  ]
})
export class ClusterSettingsModule {
}
