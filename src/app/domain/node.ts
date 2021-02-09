export interface Node {
  active_primary_shards: number;
  active_shards: number;
  active_shards_percent_as_number: number;
  cluster_name: string;
  delayed_unassigned_shards: number;
  initializing_shards: number;
  number_of_data_nodes: number;
  number_of_in_flight_fetch: number;
  number_of_nodes: number;
  number_of_pending_tasks: number;
  relocating_shards: number;
  status: string;
  task_max_waiting_in_queue_millis: number;
  timed_out: boolean;
  unassigned_shards: number;
}
