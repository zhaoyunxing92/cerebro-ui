import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LogoComponent} from '../component/logo/logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    LogoComponent
  ]
})
export class ShareModule {
}
