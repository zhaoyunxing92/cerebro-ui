import {Injectable} from '@angular/core';
import {ClusterHealth} from '../domain/cluster/health';

import {Subject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClusterService {

  private clusterHealth: Subject<ClusterHealth> = new Subject<ClusterHealth>();

  setClusterHealth(health: ClusterHealth): void {
    this.clusterHealth.next(health);
  }

  getClusterHealth(): Observable<ClusterHealth> {
    return this.clusterHealth.asObservable();
  }
}
