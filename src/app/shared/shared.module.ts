import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {LogoModule} from '../component/logo/logo.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    LogoModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    LogoModule,
  ]
})
export class SharedModule {
}
