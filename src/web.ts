import { WebPlugin } from '@capacitor/core';

import {OpenstreetmapMarker} from "./clazz/OpenstreetmapMarker";
import type { CapacitorOpenstreetmapPlugin } from './definitions';
import type {AddCircleOptions, AddMarkerOptions, DidMapClickResult, InitializeOptions} from "./interfaces";
import { getScript, getStylesheet } from "./services/script-handler.service";


let map: any;

export const markerList: OpenstreetmapMarker[] = [];

export class CapacitorOpenstreetmapWeb
  extends WebPlugin
  implements CapacitorOpenstreetmapPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  /**
   * Initialize the map.
   *
   * @param options
   */
  async initialize(options: InitializeOptions): Promise<void> {
    await getStylesheet('https://unpkg.com/leaflet@1.9.2/dist/leaflet.css');
    await getScript('https://unpkg.com/leaflet@1.9.2/dist/leaflet.js')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    map = L.map(options.mapId).setView([options.latitude, options.longitude], options.zoom);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    return Promise.resolve(undefined);
  }

  /**
   * After a resize of the map, call this method to refresh the underlying map.
   */
  resize(): Promise<void> {
    window.dispatchEvent(new Event('resize'));

    return Promise.resolve(undefined);
  }

  async onDidMapClick(callback: DidMapClickResult): Promise<void> {
    map.on('click', (e: any) => {
      callback({
        lat: e.latlng.lat,
        lng: e.latlng.lng
      });
    });
  }

  /**
   * Add a marker to the map.
   */
    addMarker(options: AddMarkerOptions): Promise<OpenstreetmapMarker> {
        return new Promise((resolve) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const marker = L.marker([options.location.lat, options.location.lng]).addTo(map);
            const openstreetmapMarker = new OpenstreetmapMarker(marker, options.id);

            markerList.push(openstreetmapMarker);

            resolve(openstreetmapMarker);
        });
    }

    /**
     * List all markers on the map.
     */
    listMarkers(): Promise<any> {
        return new Promise((resolve) => {
            resolve(markerList);
        });
    }

    /**
  * Add a circle to the map.
  *
  * @param options
  */
  addCircle(options: AddCircleOptions): Promise<void> {
    return new Promise((resolve) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        L.circle([options.latitude, options.longitude], {
            color: options.color,
            fillColor: options.fillColor,
            fillOpacity: options.fillOpacity,
            radius: options.radius
        }).addTo(map);

        resolve(undefined);
    });
  }
}
