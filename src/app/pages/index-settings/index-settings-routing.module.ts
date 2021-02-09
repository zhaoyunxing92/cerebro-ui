import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexSettingsComponent} from './index-settings.component';

const routes: Routes = [
  {path: 'index_settings', component: IndexSettingsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexSettingsRoutingModule {
}
