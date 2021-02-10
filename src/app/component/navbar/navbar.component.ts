import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Constant} from '../../domain/constant';
import {ClusterHealth} from '../../domain/cluster/health';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  clusterHealth: ClusterHealth;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const health = sessionStorage.getItem(Constant.healthStorageKey);
    if (!health) {
      this.router.navigate(['/connect']).then();
    }
    this.clusterHealth = JSON.parse(health);
  }
}
