import {NgModule} from '@angular/core';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {ShareModule} from '../../share/share.module';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule,
    LoginRoutingModule,
    NgbAlertModule
  ]
})
export class LoginModule { }
