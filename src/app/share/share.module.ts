import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LogoComponent} from '../component/logo/logo.component';

@NgModule({
  declarations: [LogoComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LogoComponent
  ]
})
export class ShareModule {
}
