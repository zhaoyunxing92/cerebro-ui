export interface Disk {
  indices: number;
  used: number;
  avail: number;
  total: number;
  percent: number;
}

export interface Allocation {
  shards: number;
  disk: Disk;
  host: string;
  ip: string;
  node: string;
}

