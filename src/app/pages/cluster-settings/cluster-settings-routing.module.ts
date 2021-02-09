import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClusterSettingsComponent} from './cluster-settings.component';

const routes: Routes = [
  {path: 'cluster_settings', component: ClusterSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClusterSettingsRoutingModule {
}
