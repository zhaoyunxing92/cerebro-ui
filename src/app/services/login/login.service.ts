import {Injectable} from '@angular/core';
import {User} from '../../domain/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }

  authorize(user: User): void {
    console.log(user.username);
  }
}
