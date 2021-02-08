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
  }

  authorize(): void {
    this.user = this.loginForm.value;
  }
}
