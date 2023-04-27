---
title: "MapLibre React Native Announcement"
date: 2023-02-08
categories: ["announcements"]
authors: [ianthetechie]
draft: false
---

MapLibre has completed onboarding of [MapLibre React Native](https://github.com/maplibre/maplibre-react-native), an SDK
that will make MapLibre Native more accessible to mobile developers.

The project is a fork of [rnmapbox](https://github.com/rnmapbox/maps), a community-maintained React Native library
for building maps with the Mapbox iOS and Android SDKs. The original project supported both Mapbox and MapLibre
backends for some time, but as the MapLibre SDK has developed independently over time, supporting both became onerous.
A clean break enables both projects to bring improvements and bug fixes from the native SDKs to
React Native developers as quickly as possible.

The fork was coordinated by Luke Seelenbinder (a MapLibre governing board member) and Ian Wagner from [Stadia Maps](https://stadiamaps.com/).
[Jérôme Thiard](https://github.com/jthiard) also stepped up to volunteer and his contributions were invaluable in
shipping the first official release.

The full source code and documentation are available on [GitHub](https://github.com/maplibre/maplibre-react-native).
Users of rnmapbox wishing to update to the latest MapLibre Native release can switch to the new package,
which is available on [npm](https://www.npmjs.com/package/@maplibre/maplibre-react-native). Aside from some
name changes, the new SDK is drop-in compatible.
