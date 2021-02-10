import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {LogoComponent} from './logo/logo.component';
import {RouterModule} from '@angular/router';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [NavbarComponent, LogoComponent, StatsComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    LogoComponent,
    StatsComponent,
  ]
})
export class ComponentModule {
}
