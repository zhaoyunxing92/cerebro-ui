import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  public version: string;

  constructor() {
    this.version = '0.9.3';
  }

  ngOnInit(): void {
  }

}
