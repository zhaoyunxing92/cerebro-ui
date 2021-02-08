import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public version: string;

  constructor() {
    this.version = '0.9.3';
  }

  ngOnInit(): void {
  }

}
