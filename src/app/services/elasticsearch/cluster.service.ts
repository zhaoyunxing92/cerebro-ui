import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ClusterHealth} from '../../domain';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.10/cluster-health.html
  health(host: string): Observable<ClusterHealth> {
    const url = `${host}/_cluster/health`;
    return this.http.get<ClusterHealth>(url, this.httpOptions);
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.10/cluster-nodes-stats.html
  nodesStats(host: string): Observable<any> {
    const url = `${host}/_nodes/stats/jvm,fs,os,process?filter_path=nodes.*`;
    return this.http.get<any>(url, this.httpOptions).pipe(map(res => res.nodes));
  }

  nodes(host: string): Observable<any> {
    const url = `${host}/_nodes/_all/os,jvm?filter_path=nodes.*`;
    return this.http.get<any>(url, this.httpOptions).pipe(map(res => res.nodes));
  }
}
