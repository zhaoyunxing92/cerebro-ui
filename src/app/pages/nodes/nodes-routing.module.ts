import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NodesComponent} from './nodes.component';

const routes: Routes = [
  {path: 'nodes', component: NodesComponent, data: {title: 'nodes'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NodesRoutingModule {
}
