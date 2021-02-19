import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';

import 'brace';
// import 'brace/mode/text';
import 'brace/mode/json';
// import 'brace/mode/javascript';
// import 'brace/mode/css';
import 'brace/theme/github';

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
