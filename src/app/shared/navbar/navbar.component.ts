import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {timer} from 'rxjs';
import {Constant} from '../../domain/constant';
import {Cluster} from '../../domain';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
    providers: []
})
export class NavbarComponent implements OnInit {

    interval: number;
    cluster: Cluster;
    private scheduler: any;

    constructor(private router: Router) {
        this.interval = 15000;
        this.scheduler = timer(100, this.interval);
    }

    ngOnInit(): void {
        this.getStatus();
        const health = sessionStorage.getItem(Constant.healthStorageKey);
        if (!health) {
            this.router.navigate(['/connect']).then();
        }
        this.cluster = JSON.parse(health);
    }

    getStatus(): void {
        this.scheduler.subscribe(val => {
           // console.log(new Date().getTime() / 1000);
        });
    }

    /**
     * 设置时间间隔
     * @param delay 间隔
     */
    setInterval(delay: number): void {
        this.interval = delay;
        this.scheduler = timer(100, this.interval);
    }

    /**
     *
     */
    disconnect(): void {

    }
}
