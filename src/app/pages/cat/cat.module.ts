import {NgModule} from '@angular/core';

import {CatRoutingModule} from './cat-routing.module';
import {CatComponent} from './cat.component';
import {SharedModule} from '../../shared/shared.module';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [CatComponent],
  imports: [
    SharedModule,
    CatRoutingModule,
    CommonModule
  ]
})
export class CatModule { }
