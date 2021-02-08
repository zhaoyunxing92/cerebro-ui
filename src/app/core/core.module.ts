import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../routes/app-routing.module';
import {ServicesModule} from '../services/services.module';
import {PagesModule} from '../pages/pages.module';
import {ShareModule} from '../shared/share.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule,
  ]
})
export class CoreModule {

  constructor(@SkipSelf() @Optional() private core: CoreModule) {
    if (core) {
      throw new Error('CoreModule只能被AppModule import');
    }
  }
}
