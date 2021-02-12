import {Component, Input, OnInit} from '@angular/core';
import {Cluster} from '../../domain/cluster/cluster';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input()
  cluster: Cluster;

  constructor() {
    console.log(this.cluster);
  }

  ngOnInit(): void {
    console.log(this.cluster);
  }

}
