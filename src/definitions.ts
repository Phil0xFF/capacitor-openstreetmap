import type {OpenstreetmapMarker} from "./clazz/OpenstreetmapMarker";
import type {AddCircleOptions, AddMarkerOptions, DidMapClickResult, InitializeOptions} from "./interfaces";

export interface CapacitorOpenstreetmapPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;

  initialize(options: InitializeOptions): Promise<void>;

  resize(): Promise<void>;

  onDidMapClick(callback: DidMapClickResult): Promise<void>;

  addMarker(options: AddMarkerOptions): Promise<OpenstreetmapMarker>;

  listMarkers(): Promise<any>;

  addCircle(options: AddCircleOptions): Promise<void>;
}
