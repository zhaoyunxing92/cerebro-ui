import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  status: string;
  host: string;

  constructor() {
  }

  ngOnInit(): void {
    this.host = '1234sdfghjkjljhfgdfsdfghjkjk';
  }

}
