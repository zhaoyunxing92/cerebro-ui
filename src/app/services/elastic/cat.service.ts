import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Allocation, ClusterHealth, Disk, Master} from '../../domain';
import {map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) {
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.10/cluster-health.html
  health(host: string): Observable<ClusterHealth> {
    const url = `${host}/_cluster/health`;
    return this.http.get<ClusterHealth>(url).pipe(retry(3));
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.10/cat-master.html
  master(host: string = ''): Observable<Master[]> {
    const url = `${host}/_cat/master?format=json`;
    return this.http.get<Master[]>(url).pipe(retry(3));
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.10/cat-allocation.html#cat-allocation
  allocation(host: string): Observable<Allocation[]> {
    const url = `${host}/_cat/allocation?format=json&bytes=b`;
    return this.http.get<Allocation[]>(url).pipe(map<any[], Allocation[]>(res => {
      const allocations: Allocation[] = [];
      res.forEach(rs => {
        const disk: Disk = {
          used: rs['disk.used'],
          avail: rs['disk.avail'],
          indices: rs['disk.indices'],
          percent: rs['disk.percent'],
          total: rs['disk.total']
        };
        const alloc: Allocation = {host: rs.host, ip: rs.ip, node: rs.node, shards: rs.shards, disk};
        allocations.push(alloc);
      });
      return allocations;
    }), retry(3));
  }
}
