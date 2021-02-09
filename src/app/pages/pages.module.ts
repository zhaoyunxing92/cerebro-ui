import {NgModule} from '@angular/core';
import {LoginModule} from './login/login.module';
import {ConnectModule} from './connect/connect.module';
import {OverviewModule} from './overview/overview.module';
import {NodesModule} from './nodes/nodes.module';
import {AliasesModule} from './aliases/aliases.module';
import {CreateModule} from './create/create.module';
import {TemplatesModule} from './templates/templates.module';
import {ClusterSettingsModule} from './cluster-settings/cluster-settings.module';
import {IndexSettingsModule} from './index-settings/index-settings.module';
import {CatModule} from './cat/cat.module';

@NgModule({
  declarations: [],
  imports: [
    LoginModule,
    ConnectModule,
    OverviewModule,
    NodesModule,
    AliasesModule,
    CreateModule,
    TemplatesModule,
    ClusterSettingsModule,
    IndexSettingsModule,
    CatModule,
  ],
  exports: [
    LoginModule,
    ConnectModule,
    OverviewModule,
    NodesModule,
    AliasesModule,
    CreateModule,
    TemplatesModule,
    ClusterSettingsModule,
    IndexSettingsModule,
    CatModule,
  ]
})
export class PagesModule {
}
