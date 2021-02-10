import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Constant} from '../../domain/constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  status: string;
  host: string;
  health: any;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    const health = sessionStorage.getItem(Constant.healthStorageKey);
    Object.assign(JSON.parse(health), this.health);
    console.log(this.health);
  }
}
