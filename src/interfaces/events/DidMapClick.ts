import type { LatLng } from "../utils/Location";

export type DidMapClickResult = (
    location: LatLng,
) => void;