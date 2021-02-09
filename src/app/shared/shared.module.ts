import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {ComponentModule} from '../component/component.module';
import {AppRoutingModule} from '../routes/app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ComponentModule,
    AppRoutingModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ComponentModule,
    AppRoutingModule,
  ]
})
export class SharedModule {
}
