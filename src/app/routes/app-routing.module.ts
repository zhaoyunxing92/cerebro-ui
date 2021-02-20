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
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CerebroGuard} from '../guard/cerebro.guard';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {path: 'overview', component: OverviewComponent, data: {title: 'overview'}},
      {path: 'nodes', component: NodesComponent, data: {title: 'nodes'}},
      {path: 'rest', component: RestComponent, data: {title: 'rest'}},

      {path: 'create', component: CreateComponent},
      {path: 'index_settings', component: IndexSettingsComponent},
      {path: 'cluster_settings', component: ClusterSettingsComponent},
      {path: 'aliases', component: AliasesComponent},
      {path: 'analysis', component: AnalysisComponent},
      {path: 'templates', component: TemplatesComponent},
      {path: 'repository', component: RepositoryComponent, data: {title: 'repository'}},
      {path: 'snapshot', component: SnapshotComponent, data: {title: 'snapshot'}},
      {path: 'cat', component: CatComponent},
    ]
  },
  {path: 'login', component: LoginComponent, data: {title: 'login'}},
  {path: 'connect', component: ConnectComponent, data: {title: 'connect'}, canActivate: [CerebroGuard]},
  // {path: '**', component: ConnectComponent, data: {title: 'connect'}},
  {path: '', redirectTo: '/connect', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppRoutingModule {
}
