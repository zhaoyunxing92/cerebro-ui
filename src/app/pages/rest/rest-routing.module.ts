import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestComponent} from './rest.component';

const routes: Routes = [
  {path: 'rest', component: RestComponent, data: {title: 'rest'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestRoutingModule {
}
