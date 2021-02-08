import {Component, OnInit} from '@angular/core';
// import {User} from '../../domain/user';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;

  password: string;

  constructor() {
  }

  ngOnInit(): void {
    /* this.loginForm = new FormGroup({
       username: new FormControl(this.username, [Validators.required]),
       password: new FormControl(this.password, [Validators.required])
     });*/
  }

  authorize(): void {
    console.log(this.username);
    console.log(this.password);
  }
}
