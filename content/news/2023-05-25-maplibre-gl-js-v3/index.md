---
title: "MapLibre GL JS v3"
date: 2023-05-25
categories: ["announcements"]
authors: [birk]
draft: false
---

This release is a big step for MapLibre GL JS! With more than 500 commits, and almost a year in the making, version 3.0.0 is surely our best release yet. Lots of features, performance improvement, bug fixes and a few potentially breaking changes that were necessary, to keep the project healthy, are to be found here.

**A note on migration:**
Most users will be able to update to v3 without code changes, but it's recommended to read the section of potentially breaking changes below carefully to assess if you're code needs migration.

Before the full list of changes, two notable features are worth mentioning: **transformCameraUpdate** and **WebGL2**. To really show what they each bring to the table in this release, we made some demos as well. Enjoy!

### **transformCameraUpdate**

This new feature makes it possible to get direct access to the camera transform, and manipulate it, continously whenever the map is attempting to change it's viewport. It's a small hook, but it's very powerful. It's especially handy for reactive frameworks, where the camera state might be put in a store which can trigger side effects like listing the points of interest currently visible on the map. Another example of when it's relevant is when synching multiple maps, as exemplified with a demo a minimap and a main map that drives each other here:

Sync two maps with the camera transform - [Minimap demo](https://stackblitz.com/edit/vitejs-vite-8nntze?file=src%2FMinimap.tsx)

<a href="https://stackblitz.com/edit/vitejs-vite-8nntze?file=src%2FMinimap.tsx">
  <img src="minimap.png" style="max-width:600px;width:100%">
</a>

### **WebGL2**

WebGL2 has finally reached a level of browser support that allow us, and large projects like [Unity](https://forum.unity.com/threads/removing-support-for-gles2-and-webgl1-in-2023-1a.1360090/) to embrace it fully. While WebGL2 is mostly backwards compatible, it gives us lots of new features, and oportunities to improve performance though paralellization. It also removes the friction that exist when using MapLibre GL JS with libraries in the ecosystem that has moved to WebGL2 already - two examples of which can be seen in the demos below:

**Interleaved rendering of DeckGL attribute transitions**

3.0.0 - [Animating](https://codepen.io/birkskyum-1471370946/pen/VwEBPYW) - Uses WebGL2

2.4.0 - [Not animating](https://codepen.io/birkskyum-1471370946/pen/qBJyRdR)

<a href="https://codepen.io/birkskyum-1471370946/pen/VwEBPYW">
  <img src="attributetransitions.png" style="max-width:600px;width:100%">
</a>

**Interleaved rendering of DeckGL GPU accelerated GridLayer**

3.0.0 [GPU Accelerated](https://stackblitz.com/edit/vitejs-vite-asczxg?file=package.json) - Uses WebGL2

2.4.0 [Breaks](https://stackblitz.com/edit/vitejs-vite-9scpcz?file=package.json) - Browser console prints "Browser not supported"

<a href="https://stackblitz.com/edit/vitejs-vite-asczxg?file=package.json">
  <img src="gpugridlayer.png" style="max-width:600px;width:100%">
</a>


# Changelog
And now for the full list of changes:

## New features and improvements

- Add `transformCameraUpdate` callback to `Map` options ([#2535](https://github.com/maplibre/maplibre-gl-js/pull/2535))
- Bump KDBush and supercluster for better memory efficiency ([#2522](https://github.com/maplibre/maplibre-gl-js/pull/2522))
- Improve performance by using HTMLImageElement to download raster source images when refreshExpiredTiles tiles is false ([#2126](https://github.com/maplibre/maplibre-gl-js/pull/2126))
- Set fetchPriority for HTMLImageElement to help improve raster-heavy scenarios ([#2459](https://github.com/maplibre/maplibre-gl-js/pull/2459))
- Reduce rendering calls on initial load. No reason to try rendering before the style is loaded. ([#2464](https://github.com/maplibre/maplibre-gl-js/pull/2464))
- Lazy load default style properties on demand to improve loading performance and reduce memory usage. ([#2476](https://github.com/maplibre/maplibre-gl-js/pull/2476))
- WebGL2 support ([#1891](https://github.com/maplibre/maplibre-gl-js/pull/1891
- Add queryTerrainElevation allows getting terrain elevation in meters at a specific point ([#2264](https://github.com/maplibre/maplibre-gl-js/pull/2264))
- Improve performance by sending style layers to the worker thread before processing it on the main thread to allow parallel processing ([#2131](https://github.com/maplibre/maplibre-gl-js/pull/2131))
- Add Map.getImage() to retrieve previously-loaded images. ([#2168](https://github.com/maplibre/maplibre-gl-js/pull/2168))
- Add a method to enable/disable cooperative gestures
- Update CONTRIBUTING.md with details on setting up on M1 mac ([#2196](https://github.com/maplibre/maplibre-gl-js/pull/2196))
- Update default type of originalEvent in MapLibreEvent to be `unknown` ([#2243](https://github.com/maplibre/maplibre-gl-js/pull/2243))
- Improve performance when forcing full symbol placement by short circuiting pause checks ([#2241](https://github.com/maplibre/maplibre-gl-js/pull/2241))
- Adding a `warnonce` when terrain and hillshade source are the same ([#2298](https://github.com/maplibre/maplibre-gl-js/pull/2298))
- Remove a deprecation warning by removing an empty texture that is no longer being used in the codebase ([#2299](https://github.com/maplibre/maplibre-gl-js/pull/2299))
- Improve initial loading performance by lazy serializing layers only when needed. ([#2306](https://github.com/maplibre/maplibre-gl-js/pull/2306))
- Add validateStyle MapOption to allow disabling style validation for faster performance in production environment. ([#2390](https://github.com/maplibre/maplibre-gl-js/pull/2390))
- Add `setiClusterOptions` to update cluster properties of the added sources: fixing these issues ([#429](https://github.com/maplibre/maplibre-gl-js/issues/429)) and ([#1384](https://github.com/maplibre/maplibre-gl-js/issues/1384))
- Add types for `workerOptions` and `_options` in `geojson_source.ts`
- Add fullscreenstart, fullscreenend events to FullscreenControl ([#2128](https://github.com/maplibre/maplibre-gl-js/issues/2128)
- Throttle the image request queue while the map is moving to improve performance ([#2097](https://github.com/maplibre/maplibre-gl-js/issues/2097)
- Add support for multiple `sprite` declarations in one style file ([#1805](https://github.com/maplibre/maplibre-gl-js/pull/1805))
- Extract sprite image on demand to reduce memory usage and improve performance by reducing the number of getImageData calls ([#1809](https://github.com/maplibre/maplibre-gl-js/pull/1809))
- `QueryRenderedFeaturesOptions` type added to both of the params in queryRenderedFeatures in map.ts ([#1900](https://github.com/maplibre/maplibre-gl-js/issues/1900))
- NavigationControlOptions is now optional when creating an instance of NavigationControl ([#1754](https://github.com/maplibre/maplibre-gl-js/issues/1754))
- Listen to webglcontextcreationerror event and give detailed debug info when it fails ([#1715](https://github.com/maplibre/maplibre-gl-js/pull/1715))
- Make sure `cooperativeGestures` overlay is always "on top" (z-index) of map features ([#1753](https://github.com/maplibre/maplibre-gl-js/pull/1753))
- Use `willReadFrequently` hint to optimize 2D canvas usage and remove warnings ([#1808](https://github.com/maplibre/maplibre-gl-js/pull/1808))
- Speed up the cross tile symbol index in certain circumstances ([#1755](https://github.com/maplibre/maplibre-gl-js/pull/1755))
- Improve rendering speed in scenes with many colliding symbolic icons and labels ([#1757](https://github.com/maplibre/maplibre-gl-js/pull/1757))
- Make request for ImageSource cancelable ([#1802](https://github.com/maplibre/maplibre-gl-js/pull/1802))
- Throttle the image request queue while the map is moving to improve performance ([#2097](https://github.com/maplibre/maplibre-gl-js/pull/2097))
- Return a promise from `once` method to allow easier usage of async/await in this case ([#1690](https://github.com/maplibre/maplibre-gl-js/pull/1690))
- Add pseudo (CSS) fullscreen as a fallback for iPhones ([#1678](https://github.com/maplibre/maplibre-gl-js/pull/1678))
- Add `updateData` to `GeoJSONSource` which allows for partial data updates ([#1605](https://github.com/maplibre/maplibre-gl-js/pull/1605))
- Add a RenderPool to render tiles onto textures for 3D ([#1671](https://github.com/maplibre/maplibre-gl-js/pull/1671))
- Add map.getCameraTargetElevation() ([#1558](https://github.com/maplibre/maplibre-gl-js/pull/1558))
- Add `freezeElevation` to `AnimationOptions` to allow smooth camera movement in 3D ([#1514](https://github.com/maplibre/maplibre-gl-js/pull/1514), [#1492](https://github.com/maplibre/maplibre-gl-js/issues/1492))
- Add map.setStyle's transformStyle option ([#1632](https://github.com/maplibre/maplibre-gl-js/pull/1632))

## Potentially breaking changes

Most of these changes will not affect your code but read carefully through the list to asses if a migration is needed.

- Cancel unloaded tile request on zooming in across multiple zooms. Previously these requests were not cancelled. ([#2377](https://github.com/maplibre/maplibre-gl-js/pull/2377))
- Resize map when container element is resized. The "resize"-related events now has different data associated with it ([#2157](https://github.com/maplibre/maplibre-gl-js/pull/2157)). Previously the originalEvent field was the reason of this change, for example it could be a `resize` event from the browser. Now it is `ResizeObserverEntry`, see more [here](https://developer.mozilla.org/en-US/docs/web/api/resizeobserverentry).
- Improve rendering of areas below sea level, and remove elevationOffset workaround ([#1578](https://github.com/maplibre/maplibre-gl-js/pull/1578))
- Remove support for `hsl` css color in a format that does not comply with the CSS Color specification. Colors defined in `hsl(110, 0.7, 0.055)` format will no longer work, instead it is recommended to use the format with percentages `hsl(110, 70%, 5.5%)`. ([#2376](https://github.com/maplibre/maplibre-gl-js/pull/2376))
- Move terrain object from style.terrain to map.terrain ([#1628](https://github.com/maplibre/maplibre-gl-js/pull/1628))
- Remove deprecated `mapboxgl-` css classes (use `maplibregl-` instead) ([#1575](https://github.com/maplibre/maplibre-gl-js/pull/1575))
- Full transition from WebGL 1 to WebGL 2 ([browser support](https://caniuse.com/?search=webgl2)) ([#2512](https://github.com/maplibre/maplibre-gl-js/pull/2512))
- `LngLat.toBounds()` is replaced by a static method `LngLatBounds.fromLngLat()` ([#2188](https://github.com/maplibre/maplibre-gl-js/pull/2188))
- Make geojson data source a required field to align with the docs ([#1396](https://github.com/maplibre/maplibre-gl-js/issue/1396))
- Improve control initial loading performance by forcing fadeDuration to 0 till first idle event ([#2447](https://github.com/maplibre/maplibre-gl-js/pull/2447))
- Remove "mapbox-gl-supported" package from API. If needed, please reference it directly instead of going through MapLibre. ([#2451](https://github.com/maplibre/maplibre-gl-js/pull/2451))
- Improve control performance by restricting worker count to a max of 1 except for Safari browser. ([#2354](https://github.com/maplibre/maplibre-gl-js/pull/2354))

## Bug fixes

- Fixes issue with ResizeObserver firing an initial 'resize' event (since 3.0.0-pre.5) ([#2551](https://github.com/maplibre/maplibre-gl-js/issues/2551))
- Revise previous fix ([#2445](https://github.com/maplibre/maplibre-gl-js/issues/2445)) for raster tiles being retained when raster-fade-duration is 0 ([#2501](https://github.com/maplibre/maplibre-gl-js/issues/2501))
- Fix `LngLatBounds.extend()` to correctly handle `{ lng: number, lat: number }` coordinates. ([#2425](https://github.com/maplibre/maplibre-gl-js/pull/2425))
- Fix the accuracy-circle in the geolocate control from randomly resizing. ([#2450](https://github.com/maplibre/maplibre-gl-js/pull/2450))
- Fix the type of the `features` property on `MapLayerMouseEvent` and `MapLayerTouchEvent` to be `MapGeoJSONFeature[]` in lieu of `GeoJSON.Feature[]` ([#2244](https://github.com/maplibre/maplibre-gl-js/pull/2244))
- Fix GeolocateControl error if removed quickly ([#2391](https://github.com/maplibre/maplibre-gl-js/pull/2391))
- Fix issue unloading sprite sheet when using `setStyle(style, {diff:true})` ([#2146](https://github.com/maplibre/maplibre-gl-js/pull/2146))
- Fix wrap coords in `getTerrain` when `fitBounds` across the AM ([#2155](https://github.com/maplibre/maplibre-gl-js/pull/2155))
- Fix LngLat `toArray` method return type to [number,number] ([#2233](https://github.com/maplibre/maplibre-gl-js/issues/2233))
- Fix handling of text-offset with symbol-placement: line ([#2170](https://github.com/maplibre/maplibre-gl-js/issues/2170) and [#2171](https://github.com/maplibre/maplibre-gl-js/issues/2171))
- Fix geolocate control permissions failure on IOS16 web view with fallback to `window.navigator.geolocation` ([#2359](https://github.com/maplibre/maplibre-gl-js/pull/2359))
- Prevent unnecessary reload of raster sources when RTL Text Plugin loads ([#2380](https://github.com/maplibre/maplibre-gl-js/issues/2380))
- Fix Handle AddProtocol callback function returning a HTMLImageElement ([#2393](https://github.com/maplibre/maplibre-gl-js/pull/2393))
- Fix raster tiles being retained when raster-fade-duration is 0 ([#2445](https://github.com/maplibre/maplibre-gl-js/issues/2445))
- Fix the worker been terminated on setting new style ([#2123](https://github.com/maplibre/maplibre-gl-js/pull/2123))
- Change how meta key is detected for cooperative gestures
- Fix the worker been terminated on setting new style ([#2123](https://github.com/maplibre/maplibre-gl-js/pull/2123))
- Fix issue [#1024](https://github.com/maplibre/maplibre-gl-js/pull/1024) - Zoom center not under cursor when terrain is on
- Fix errors when running style-spec bin scripts and added missing help. Removed unnecessary script 'gl-style-composite'. ([#1971](https://github.com/maplibre/maplibre-gl-js/pull/1971))
- Fix the `slice` expression type ([#1886](https://github.com/maplibre/maplibre-gl-js/issues/1886))
- Remove dependency on `@rollup/plugin-json`, which was in conflict with `rollup-plugin-import-assert`
- Remove dependency on `@mapbox/gazetteer` which caused some build warnings ([#1757](https://github.com/maplibre/maplibre-gl-js/pull/1757) [#1898](https://github.com/maplibre/maplibre-gl-js/pull/1898))
- Fix `getElevation()` causing uncaught error ([#1650](https://github.com/maplibre/maplibre-gl-js/issues/1650)).
- Fix headless benchmark execution especially on VM ([#1732](https://github.com/maplibre/maplibre-gl-js/pull/1732))
- fix issue [#860](https://github.com/maplibre/maplibre-gl-js/issues/860) fill-pattern with pixelRatio > 1 is now switched correctly at runtime. ([#1765](https://github.com/maplibre/maplibre-gl-js/pull/1765))
- Fix the exception that would be thrown on `map.setStyle` when it is passed with transformStyle option and map is initialized without an initial style. ([#1824](https://github.com/maplibre/maplibre-gl-js/pull/1824))
- Fix the behavior of the compass button on touch devices. ([#1852](https://github.com/maplibre/maplibre-gl-js/pull/1852))
- Fix `GeoJSONSource` appearing to never finish loading when calling its `setData` method immediately after adding it to a `Map` due to it not firing a `metadata` `data` event ([#1693](https://github.com/maplibre/maplibre-gl-js/issues/1693))
- Fix the gap between terrain elevated tiles ([#1602](https://github.com/maplibre/maplibre-gl-js/issues/1602))
- Fix showTileBoundaries to show the first vector source [#1395](https://github.com/maplibre/maplibre-gl-js/pull/1395)
- Fix `match` expression type ([#1631](https://github.com/maplibre/maplibre-gl-js/pull/1631))

