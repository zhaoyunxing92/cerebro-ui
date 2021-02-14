import {Component, Input} from '@angular/core';
import {Cluster} from '../../domain/cluster/cluster';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  @Input()
  cluster: Cluster;
}
