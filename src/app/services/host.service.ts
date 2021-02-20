import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Constant} from '../domain/constant';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private host = new BehaviorSubject<string>('');

  setHost(host: string): void {
    this.host.next(host);
  }

  getHost(): string {
    let url = '';
    this.host.asObservable().subscribe(res => url = res);
    if (!url) {
      url = sessionStorage.getItem(Constant.hostKey);
      this.host.next(url);
    }
    return url;
  }
}
