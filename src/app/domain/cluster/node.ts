import {Heap} from './heap';
import {Disk} from '../allocation';
import {Cpu} from './cpu';

export interface Node {
  id: string;
  current_master: boolean;
  name: string;
  host: string;
  ip: string;
  version: string;
  jvm: string;
  master: boolean;
  data: boolean;
  coordinating: boolean;
  ingest: boolean;
  uptime: number;
  heap: Heap;
  disk: Disk;
  cpu: Cpu;
}
