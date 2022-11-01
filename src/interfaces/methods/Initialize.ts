export interface InitializeOptions {
    /**
     * The id of the div element where the map should be rendered
     */
    mapId: string;

    /**
     * The map's initial center latitude.
     */
    latitude: number;

    /**
     * The map's initial center longitude.
     */
    longitude: number;

    /**
     * The map's initial zoom level.
     */
    zoom: number;
}