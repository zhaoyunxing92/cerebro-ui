import {Component, OnInit} from '@angular/core';
import {Constant} from '../../domain/constant';
import {Cluster, Node} from '../../domain';
import {NodesService} from '../../services/nodes.service';

@Component({
  selector: 'app-nodes',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  cluster: Cluster;
  nodes: Node[];

  constructor(private nodesService: NodesService) {
  }

  ngOnInit(): void {
    const health = sessionStorage.getItem(Constant.healthStorageKey);
    this.cluster = JSON.parse(health);
    this.nodesService.getNodes(this.cluster.host).subscribe(nodes => this.nodes = nodes);
  }

}
