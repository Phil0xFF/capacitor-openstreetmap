export interface CapacitorOpenstreetmapPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
