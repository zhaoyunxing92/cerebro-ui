import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Constant} from '../domain/constant';

@Injectable({
  providedIn: 'root'
})
export class CerebroGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url === '/connect') {
      sessionStorage.removeItem(Constant.healthStorageKey);
      sessionStorage.removeItem(Constant.hostKey);
    }
    return true;
  }
}
