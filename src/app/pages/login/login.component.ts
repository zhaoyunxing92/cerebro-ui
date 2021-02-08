import {Component, OnInit} from '@angular/core';
import {User} from '../../domain/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {username: '', password: ''};
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(this.user.username, [Validators.required]),
      password: new FormControl(this.user.password, [Validators.required])
    });
    /*//
    this.loginForm.get('username').valueChanges.subscribe(data => {
      this.user.username = data.trim();
    });
    this.loginForm.get('password').valueChanges.subscribe(data => {
      this.user.password = data.trim();
    });*/
  }

  authorize(): void {
    console.log(this.loginForm.value);
    console.log('user', this.user);
  }
}
