import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OverviewService {

  constructor(private http: HttpClient) {
  }

  overview(host?: string): Observable<any> {
    const clusterState = this.http.get(`/_cluster/state/master_node,routing_table,blocks`);
    const nodesStats = this.http.get<any>(`/_nodes/stats/jvm,fs,os,process?human=true`);
    const indexStats = this.http.get<any>(`/_stats/docs,store?ignore_unavailable=true`);
    const clusterSettings = this.http.get(`/_cluster/settings`);
    const aliases = this.http.get(`/_aliases`);
    const health = this.http.get(`/_cluster/health`);
    const nodes = this.http.get(`/_nodes/_all/os,jvm?human=true`);

    return forkJoin([clusterState, nodesStats, indexStats, clusterSettings, aliases, health, nodes]);
  }
}
