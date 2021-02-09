import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AliasesComponent} from './aliases.component';

const routes: Routes = [
  {path: 'aliases', component: AliasesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AliasesRoutingModule {
}
