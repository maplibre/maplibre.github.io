---
title: "MapLibre Newsletter January 2024"
date: "2024-01-30"
categories: ["announcements"]
authors: [wipfli]
draft: false
---

# MapLibre Newsletter - January 2024

A lot of great things happened this January: Maputnik, Metal, new releases of MapLibre Native Node bindings and Martin, and hopefully our last prerelease of MapLibre GL JS v4 all appeared this month.

# MapLibre GL JS

We have published a prerelease for MapLibre GL JS v4, see [here](https://github.com/maplibre/maplibre-gl-js/releases/tag/v4.0.0-pre.6). Unless there should be some bug reports, this will be our final prerelease for version 4. There are several breaking changes around the replacement of callbacks with JavaScript Promises. As usual, you find a list of all breaking changes in the [changelog](https://github.com/maplibre/maplibre-gl-js/blob/main/CHANGELOG.md).

Just in time for this Newsletter Jakub Pelc, a master student who does a project at [Windy.com](https://windy.com), published a new demo of his **globe** implementation, see [here](https://github.com/maplibre/maplibre/discussions/161#discussioncomment-8300538).

Furthermore, [sky spec](https://github.com/maplibre/maplibre-style-spec/pull/478) was approved and should hopefully be incorporated in a future version. The original [pull request](https://github.com/maplibre/maplibre-gl-js/pull/3645) was updated.

Finally, a proposal to facilitate style spec extensions was made, see [here](https://github.com/maplibre/maplibre-style-spec/issues/516).

# MapLibre Native

MapLibre Native for iOS version 6.0.0 was released on January 16th, 2024, and it comes with the brand new Metal rendering backend. Read more in this [announcement](https://maplibre.org/news/2024-01-19-metal-support-for-maplibre-native-ios-is-here/)...

# Further MapLibre Projects

## Maputnik

We are happy to announce that Maputnik, the style editor with a web-based user interface, has been migrated by Harel Mazor with the help of several others to the MapLibre GitHub Organization. Maputnik allows map style deigners and cartographers to instantly see changes and it is an essential tool in the MapLibre ecosystem. We hope that the new home allows us to bundle efforts and maintain this great project together.

https://github.com/maplibre/maputnik

## MapLibre Native Node Bindings

Andrew Calcutt released a new maplibre-native node version, [node-v5.3.1](https://github.com/maplibre/maplibre-native/releases/tag/node-v5.3.1), which adds support for `index-of` and `slice` expressions, and webp decoding support. This follows [node-v5.3.0](https://github.com/maplibre/maplibre-native/releases/tag/node-v5.3.0) which added support for node 20 and Ubuntu 22.04.

## Martin

Martin Tile Server [v0.13](https://github.com/maplibre/martin/releases/tag/v0.13.0) is out, adding support for tile cache. Users can control how much memory to use for caching Postgres query results, as well as MBTiles and PMTiles access. Note that compression results are not yet cached (see [#1112](https://github.com/maplibre/martin/issues/1112)), and neither are fonts and sprites.
