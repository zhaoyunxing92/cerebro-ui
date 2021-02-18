import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http: HttpClient) {
  }

  overview(host: string): Observable<any> {
    const clusterState = this.http.get(`${host}/_cluster/state/master_node,routing_table,blocks`);
    const nodesStats = this.http.get<any>(`${host}/_nodes/stats/jvm,fs,os,process?human=true`);
    const indexStats = this.http.get<any>(`${host}/_stats/docs,store?ignore_unavailable=true`);
    const clusterSettings = this.http.get(`${host}/_cluster/settings`);
    const aliases = this.http.get(`${host}/_aliases`);
    const health = this.http.get(`${host}/_cluster/health`);
    const nodes = this.http.get(`${host}/_nodes/_all/os,jvm?human=true`);

    return forkJoin(clusterState, nodesStats, indexStats, clusterSettings, aliases, health, nodes);
  }
}
