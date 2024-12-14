---
title: "Developing Plugins for MapLibre Interoperability"
date: "2023-01-04"
categories: ["community-post"]
authors: [austyle]
---

Considering that MapLibre is an open-source fork of the Mapbox rendering library, many of the Mapbox plugins can be used in conjunction with MapLibre without any issue in JavaScript. However, since MapLibre is a TypeScript library in the same spirit, if you wish to use some of the popular Mapbox plugins in your TypeScript application you will likely run into the TypeScript compiler throwing a lot of type inference errors. This is because these plugins were developed with Mapbox solely in mind.

To quickly step over these compiler complaints you may reach for the all powerful `@ts-ignore` to do something like this when using [@mapbox/mapbox-gl-draw](https://github.com/mapbox/mapbox-gl-draw):

```typescript
import maplibregl from "maplibre-gl";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

import "maplibre-gl/dist/maplibre-gl.css";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const map = new maplibregl.Map({ ...someConfig });
const drawCtl = new MapboxDraw();

// @ts-ignore
map.addControl(drawCtl, "top-left");
```

Currently, we need to do this because when using TypeScript the plugin makes the assumption that it should receive reference to a Mapbox Map object rather than a MapLibre Map object. So, we must explicitly tell the TypeScript compiler to ignore this static type check. This should be a very scary band-aid to developers because if the two implementations of the map objects diverge into different directions over time it can break compatibility with this plugin. Additionally if that were to happen, no warnings or errors will surface because we are suppressing the complaint from the compiler with the all powerful `@ts-ignore`.

In order to avoid what could be an illusive bug in the future and to add compatibility for both MapLibre and Mapbox libraries, there is a solution! We at MapLibre recommend updating existing plugins and building new plugins to support both libraries. Here are some of the ways we can achieve that.

Both recommendations include using TypeScript's implementation of Intersection Types which combines multiple types into one allowing you to add together existing types to get a single type that has all the features you need. The first example below shows how to accomplish this using default imports from the mapping libraries and the second example outlines how to accomplish the same effect with named imports.

### Example 1: Intersection Types with Default Imports

```typescript
// Mapbox GL Geocoder
// GitHub: https://github.com/mapbox/mapbox-gl-geocoder
// Types: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mapbox__mapbox-gl-geocoder/index.d.ts

import mapboxgl = require("mapbox-gl");
import maplibregl = require("maplibre-gl");

type MapGl = mapboxgl & maplibregl;
```

### Example 2: Intersection Types with Named Imports

```typescript
// Mapbox GL Draw
// GitHub: https://github.com/mapbox/mapbox-gl-draw
// Types: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/mapbox__mapbox-gl-draw/index.d.ts

import { IControl as MapboxIControl, Map as MapboxMap } from 'mapbox-gl';
import { IControl as MaplibreIControl, Map as MaplibreMap } from 'maplibre-gl';

type IControl = MapboxIControl & MaplibreIControl;
type Map = MapboxMap & MaplibreMap;

declare class PluginName implements IControl {
    ...
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): any;
    ...
}
```
