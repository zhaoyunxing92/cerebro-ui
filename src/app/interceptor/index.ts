import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CerebroInterceptor} from './cerebro.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: CerebroInterceptor, multi: true},
];
