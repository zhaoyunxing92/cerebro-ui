import {Injectable} from '@angular/core';
import {forkJoin, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Master, ClusterHealth} from '../domain';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.2/cluster-health.html
  health(host: string): Observable<ClusterHealth> {
    const url = `${host}/_cluster/health`;
    return this.http.get<ClusterHealth>(url, this.httpOptions);
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.10/cat-master.html
  master(host: string): Observable<Master[]> {
    const url = `${host}/_cat/master?format=json`;
    return this.http.get<Master[]>(url, this.httpOptions);
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.10/cat-allocation.html#cat-allocation
  allocation(host: string): Observable<Master[]> {
    const url = `${host}/_cat/master?format=json`;
    return this.http.get<Master[]>(url, this.httpOptions);
  }

  // https://www.elastic.co/guide/en/elasticsearch/reference/7.2/cluster-health.html
  getNodes(host: string): Observable<any> {

    const nodes = this.http.get(`${host}/_nodes/_all/os,jvm?human=true`).pipe();
    const nodesStats = this.http.get<any>(`${host}/_nodes/stats/jvm,fs,os,process?human=true`);
    const catMaster = this.http.get(`${host}/_cat/master?format=json`);

    return forkJoin(nodes, nodesStats, catMaster).pipe(map(res => {
      console.log(res);
    }));
  }
}
