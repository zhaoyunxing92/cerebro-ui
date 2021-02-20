import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OverviewService} from '../../services/overview.service';
import {Cluster} from '../../domain';
import {Constant} from '../../domain/constant';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  cluster: Cluster;

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
    // const health = sessionStorage.getItem(Constant.healthStorageKey);
    // this.cluster = JSON.parse(health);
    this.overviewService.overview().subscribe(data => {
      const indexStats = data[2];
      const nodes = data[4];
      this.cluster = data[5];
      this.cluster.docs = indexStats._all.primaries.docs.count;
      this.cluster.indices = indexStats.indices.length;
      this.cluster.shards = this.cluster.active_shards + this.cluster.initializing_shards + this.cluster.relocating_shards
        + this.cluster.unassigned_shards;
      this.cluster.indices = Object.keys(nodes).length;
      this.cluster.size = indexStats._all.total.store.size_in_bytes;
    });
  }

}
