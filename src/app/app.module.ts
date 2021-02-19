import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';

import 'brace';
import 'brace/mode/json';
import 'brace/theme/chaos';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
