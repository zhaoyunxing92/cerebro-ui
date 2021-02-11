import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OverviewService} from '../../services/overview.service';
import {ClusterHealth} from '../../domain/cluster/health';
import {Constant} from '../../domain/constant';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  clusterHealth: ClusterHealth;

  indices: any;
  nodes: any;
  unassignedShards = 0;
  relocatingShards = 0;
  initializingShards = 0;
  closedIndices = 0;
  specialIndices = 0;
  shardAllocation = true;

  constructor(private router: Router, private overviewService: OverviewService) {
    this.indices = undefined;
    this.nodes = undefined;
    this.unassignedShards = 0;
    this.relocatingShards = 0;
    this.initializingShards = 0;
    this.closedIndices = 0;
    this.specialIndices = 0;
    this.shardAllocation = true;
  }

  ngOnInit(): void {
    const health = sessionStorage.getItem(Constant.healthStorageKey);
    this.clusterHealth = JSON.parse(health);
    // this.overviewService.overview(this.clusterHealth.host).subscribe(data => {
    //   console.log(data);
    // });
  }

}
