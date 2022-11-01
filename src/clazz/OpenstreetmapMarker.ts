/**
 * Class for a marker on the map.
 */
import type { Marker } from "leaflet";

import {markerList} from "../web";

export class OpenstreetmapMarker {
    /**
     * The marker object.
     */
    private marker: Marker;

    /**
     * The marker id.
     */
    private id: string;

    /**
     * constructor
     */
    constructor(marker: Marker, id: string) {
        this.marker = marker;
        this.id = id;
    }

    /**
     * Get the marker object.
     */
    getMarker(): Marker {
        return this.marker;
    }

    /**
     * Get the marker id.
     */
    getId(): string {
        return this.id;
    }

    /**
     * Remove the marker from the map.
     */
    remove(): void {
        this.marker.remove();

        // remove from markerList
        const index = markerList.indexOf(this);
        if (index > -1) {
            markerList.splice(index, 1);
        }
    }

    /**
     * Set the marker location.
     */
    setLocation(lat: number, lng: number): void {
        this.marker.setLatLng([lat, lng]);
    }

    /**
     * Set the marker title.
     */
    setTitle(title: string, openAtStart = false): void {
        if(openAtStart) {
            this.marker.bindPopup(title).openPopup();
            return;
        }

        this.marker.bindPopup(title);
    }

    /**
     * Open title popup.
     */
    openPopup(): void {
        this.marker.openPopup();
    }

    /**
     * Close title popup.
     */
    closePopup(): void {
        this.marker.closePopup();
    }

    /**
     * Add marker click listener.
     */
    onDidMarkerClick(callback: any): void {
        this.marker.on('click', () => {
            callback(this.id);
        });
    }
}