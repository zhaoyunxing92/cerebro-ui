import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ClusterHealth} from '../domain/cluster/health';

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
}
