import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClusterHealth} from '../../domain';
import {map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  constructor(private http: HttpClient) {
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.10/cluster-health.html
  health(host: string = ''): Observable<ClusterHealth> {
    const url = `${host}/_cluster/health`;
    return this.http.get<ClusterHealth>(url).pipe(retry(3));
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.10/cluster-nodes-stats.html
  nodesStats(host: string = ''): Observable<any> {
    const url = `${host}/_nodes/stats/jvm,fs,os,process?filter_path=nodes.*`;
    return this.http.get<any>(url).pipe(map(res => res.nodes), retry(3));
  }

  nodes(host: string = ''): Observable<any> {
    const url = `${host}/_nodes/_all/os,jvm?filter_path=nodes.*`;
    return this.http.get<any>(url).pipe(map(res => res.nodes), retry(3));
  }
}
