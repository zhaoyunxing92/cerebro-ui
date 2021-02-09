import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TemplatesComponent} from '../pages/templates/templates.component';
import {AliasesComponent} from '../pages/aliases/aliases.component';
import {AnalysisComponent} from '../pages/analysis/analysis.component';
import {CatComponent} from '../pages/cat/cat.component';
import {ClusterSettingsComponent} from '../pages/cluster-settings/cluster-settings.component';
import {ConnectComponent} from '../pages/connect/connect.component';
import {CreateComponent} from '../pages/create/create.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {OverviewComponent} from '../pages/overview/overview.component';
import {IndexSettingsComponent} from '../pages/index-settings/index-settings.component';
import {LoginComponent} from '../pages/login/login.component';
import {NodesComponent} from '../pages/nodes/nodes.component';
import {RepositoryComponent} from '../pages/repository/repository.component';
import {RestComponent} from '../pages/rest/rest.component';
import {SnapshotComponent} from '../pages/snapshot/snapshot.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'aliases', component: AliasesComponent},
      {path: 'analysis', component: AnalysisComponent},
      {path: 'cat', component: CatComponent},
      {path: 'cluster_settings', component: ClusterSettingsComponent},
      {path: 'connect', component: ConnectComponent, data: {title: 'connect'}},
      {path: 'create', component: CreateComponent},
      {path: 'index_settings', component: IndexSettingsComponent},
      {path: 'nodes', component: NodesComponent, data: {title: 'nodes'}},
      {path: 'overview', component: OverviewComponent, data: {title: 'overview'}},
      {path: 'repository', component: RepositoryComponent, data: {title: 'repository'}},
      {path: 'rest', component: RestComponent, data: {title: 'rest'}},
      {path: 'snapshot', component: SnapshotComponent, data: {title: 'snapshot'}},
      {path: 'templates', component: TemplatesComponent},
    ]
  },
  {path: 'login', component: LoginComponent, data: {title: 'login'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
