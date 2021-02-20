import {Injectable} from '@angular/core';
import {Cluster} from '../domain/cluster/cluster';

import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  private cluster = new Subject<Cluster>();

//  cluster$ = this.cluster.asObservable();

  constructor() {
    // this.cluster.asObservable();
  }

  setCluster(health: Cluster): void {
    this.cluster.next(health);
  }

  getCluster(): Observable<Cluster> {
    return this.cluster.asObservable();
  }
}
