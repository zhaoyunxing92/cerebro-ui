import {NgModule} from '@angular/core';

import {IndexSettingsRoutingModule} from './index-settings-routing.module';
import {IndexSettingsComponent} from './index-settings.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [IndexSettingsComponent],
  imports: [
    SharedModule,
    IndexSettingsRoutingModule
  ]
})
export class IndexSettingsModule {
}
