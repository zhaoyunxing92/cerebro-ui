import {NgModule} from '@angular/core';

import {TemplatesComponent} from './templates/templates.component';
import {SharedModule} from '../shared/shared.module';
import {AliasesComponent} from './aliases/aliases.component';
import {AnalysisComponent} from './analysis/analysis.component';
import {CatComponent} from './cat/cat.component';
import {ClusterSettingsComponent} from './cluster-settings/cluster-settings.component';
import {ConnectComponent} from './connect/connect.component';
import {CreateComponent} from './create/create.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {IndexSettingsComponent} from './index-settings/index-settings.component';
import {LoginComponent} from './login/login.component';
import {NodesComponent} from './nodes/nodes.component';
import {OverviewComponent} from './overview/overview.component';
import {RepositoryComponent} from './repository/repository.component';
import {RestComponent} from './rest/rest.component';
import {SnapshotComponent} from './snapshot/snapshot.component';

@NgModule({
  declarations: [AliasesComponent, AnalysisComponent, CatComponent, ClusterSettingsComponent, ConnectComponent, CreateComponent,
    DashboardComponent, IndexSettingsComponent, LoginComponent, NodesComponent, OverviewComponent, RepositoryComponent, RestComponent,
    SnapshotComponent, TemplatesComponent],
  imports: [
    SharedModule,
  ],
  exports: [
    AliasesComponent,
    AnalysisComponent,
    CatComponent,
    ClusterSettingsComponent,
    ConnectComponent,
    CreateComponent,
    DashboardComponent,
    IndexSettingsComponent,
    LoginComponent,
    NodesComponent,
    OverviewComponent,
    RepositoryComponent,
    RestComponent,
    SnapshotComponent,
    TemplatesComponent,
  ]
})
export class PagesModule {
}
