import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {LogoComponent} from './logo/logo.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [NavbarComponent, LogoComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    LogoComponent,
  ]
})
export class ComponentModule {
}
