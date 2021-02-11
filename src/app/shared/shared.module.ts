import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../routes/app-routing.module';
import {NavbarComponent} from './navbar/navbar.component';
import {LogoComponent} from './logo/logo.component';
import {StatsComponent} from './stats/stats.component';

@NgModule({
  declarations: [NavbarComponent, LogoComponent, StatsComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NavbarComponent,
    LogoComponent,
    StatsComponent,
  ]
})
export class SharedModule {
}
