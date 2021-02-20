import {Injectable} from '@angular/core';
import {CatService, ClusterService} from './elastic';
import {forkJoin, Observable} from 'rxjs';
import {Cpu, Disk, Heap, Master, Node} from '../domain';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NodesService {

  constructor(private catService: CatService, private clusterService: ClusterService) {
  }

  getNodes(host: string): Observable<Node[]> {
    const nodesRest = this.clusterService.nodes();
    const nodesStatsRest = this.clusterService.nodesStats();
    const mastersRest = this.catService.master();

    return forkJoin([nodesRest, nodesStatsRest, mastersRest]).pipe(map<any[], Node[]>(res => {
      const nodes: Node[] = [];
      const nodesRes = res[0];
      const nodesStatsRes = res[1];
      const mastersRes = res[2];

      Object.keys(nodesStatsRes).forEach(id => {
        const nd = nodesRes[id];
        const stats = nodesStatsRes[id];
        const roles: string[] = stats.roles;
        const node: Node = {
          id,
          current_master: this.isMaster(id, mastersRes),
          name: nd.name,
          host: nd.host,
          ip: nd.ip,
          version: nd.version,
          jvm: nd.jvm.version,
          master: this.master(roles),
          data: this.data(roles),
          coordinating: this.coordinating(roles),
          ingest: this.ingest(roles),
          uptime: stats.jvm.uptime_in_millis,
          heap: this.getHeap(stats),
          disk: this.getDisk(stats),
          cpu: this.getCup(stats),
        };
        nodes.push(node);
      });
      return nodes;
    }));
  }

  protected master(roles: string[]): boolean {
    return roles.indexOf('master') >= 0;
  }

  protected ingest(roles: string[]): boolean {
    return roles.indexOf('ingest') >= 0;
  }

  protected data(roles: string[]): boolean {
    return roles.indexOf('data') >= 0;
  }

  protected coordinating(roles: string[]): boolean {
    return !this.master(roles) && this.ingest(roles) && !this.data(roles);
  }

  /**
   * 是否主节点
   * @param id 节点id
   * @param masters master节点列表
   */
  protected isMaster(id: string, masters: Master[]): boolean {
    return masters.filter(mt => mt.id === id).length > 0;
  }

  protected getCup(stats: any): Cpu {
    const cpu: Cpu = {
      load: 0,
      os: 0,
      process: 0
    };
    if (!stats) {
      return cpu;
    }
    cpu.load = stats.os.cpu.load_average['1m'] || stats.os.load_average || 0;
    cpu.os = stats.os.cpu.percent || stats.os.cpu_percent || 0;
    cpu.process = stats.process.cpu.process || 0;
    return cpu;
  }

  protected getDisk(stats: any): Disk {
    if (!stats) {
      return {
        indices: 0,
        used: 0,
        avail: 0,
        total: 0,
        percent: 0,
      };
    }
    const total = stats.fs.total.total_in_bytes;
    const avail = stats.fs.total.available_in_bytes;
    const percent = Math.round((1 - (avail / total)) * 100);
    return {
      indices: null,
      used: null,
      avail,
      total,
      percent,
    };
  }

  protected getHeap(stats: any): Heap {
    if (!stats) {
      return {
        used: 0,
        committed: 0,
        percent: 0,
        max: 0,
      };
    }
    const memory = stats.jvm.mem;
    return {
      used: memory.heap_used_in_bytes || 0,
      committed: memory.heap_committed_in_bytes || 0,
      percent: memory.heap_used_percent || 0,
      max: memory.heap_max_in_bytes || 0,
    };
  }
}
