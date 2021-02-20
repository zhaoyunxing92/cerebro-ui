import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HostService} from '../services/host.service';

@Injectable()
export class CerebroInterceptor implements HttpInterceptor {

  constructor(private hostService: HostService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log(req);
    const clone = req.clone({
      url: this.getUrl(req),
      // withCredentials: true,
      // headers: req.headers.append('Content-Type', 'application/json')
      //  .append('Angular', VERSION.full),
    });
    return next.handle(clone);
  }

  private getUrl(req: HttpRequest<any>): string {
    return req.url.startsWith('http') ? req.url : this.hostService.getHost() + req.url;
  }
}
