# Capacitor Openstreetmap Plugin

This plugin allows you to easily use Openstreetmap in your Capacitor app.

## Install

```bash
npm install capacitor-openstreetmap
npx cap sync
```

## API

<docgen-index>

* [`echo(...)`](#echo)
* [`initialize(...)`](#initialize)
* [`resize()`](#resize)
* [`onDidMapClick(...)`](#ondidmapclick)
* [`addMarker(...)`](#addmarker)
* [`listMarkers()`](#listmarkers)
* [`addCircle(...)`](#addcircle)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### initialize(...)

```typescript
initialize(options: InitializeOptions) => Promise<void>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#initializeoptions">InitializeOptions</a></code> |

--------------------


### resize()

```typescript
resize() => Promise<void>
```

--------------------


### onDidMapClick(...)

```typescript
onDidMapClick(callback: DidMapClickResult) => Promise<void>
```

| Param          | Type                                                            |
| -------------- | --------------------------------------------------------------- |
| **`callback`** | <code><a href="#didmapclickresult">DidMapClickResult</a></code> |

--------------------


### addMarker(...)

```typescript
addMarker(options: AddMarkerOptions) => Promise<OpenstreetmapMarker>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#addmarkeroptions">AddMarkerOptions</a></code> |

**Returns:** <code>Promise&lt;OpenstreetmapMarker&gt;</code>

--------------------


### listMarkers()

```typescript
listMarkers() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### addCircle(...)

```typescript
addCircle(options: AddCircleOptions) => Promise<void>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#addcircleoptions">AddCircleOptions</a></code> |

--------------------


### Interfaces


#### InitializeOptions

| Prop            | Type                | Description                                                |
| --------------- | ------------------- | ---------------------------------------------------------- |
| **`mapId`**     | <code>string</code> | The id of the div element where the map should be rendered |
| **`latitude`**  | <code>number</code> | The map's initial center latitude.                         |
| **`longitude`** | <code>number</code> | The map's initial center longitude.                        |
| **`zoom`**      | <code>number</code> | The map's initial zoom level.                              |


#### LatLng

| Prop      | Type                |
| --------- | ------------------- |
| **`lat`** | <code>number</code> |
| **`lng`** | <code>number</code> |


#### AddMarkerOptions

| Prop           | Type                                      |
| -------------- | ----------------------------------------- |
| **`id`**       | <code>string</code>                       |
| **`location`** | <code><a href="#latlng">LatLng</a></code> |


#### AddCircleOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`id`**          | <code>string</code> |
| **`latitude`**    | <code>number</code> |
| **`longitude`**   | <code>number</code> |
| **`color`**       | <code>string</code> |
| **`fillColor`**   | <code>string</code> |
| **`fillOpacity`** | <code>number</code> |
| **`radius`**      | <code>number</code> |


### Type Aliases


#### DidMapClickResult

<code>(location: <a href="#latlng">LatLng</a>): void</code>

</docgen-api>

## Maintainers

[@Phil0xFF](https://github.com/phil0xff)

## Leaflet Copyright

Copyright (c) 2010-2022, Volodymyr Agafonkin
Copyright (c) 2010-2011, CloudMade
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

