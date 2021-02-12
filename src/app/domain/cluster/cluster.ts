import {ClusterHealth} from './health';

export interface Cluster extends ClusterHealth {
  // 集群主机
  host: string;
  // 文档数
  docs: number;
  // indices
  indices: number;
}
