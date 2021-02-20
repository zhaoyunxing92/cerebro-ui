import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {httpInterceptorProviders} from './interceptor';

import 'brace';
import 'brace/mode/json';
import 'brace/theme/chaos';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
