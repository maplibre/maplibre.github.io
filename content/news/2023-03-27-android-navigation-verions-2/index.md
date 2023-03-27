---
title: "Maplibre Navigation Android V2.0.0 Released"
date: 2023-03-27
categories: ["announcements"]
authors: [boldtrn]
draft: false
---

We just released version 2.0.0 of [Maplibre's navigation library](https://github.com/maplibre/maplibre-navigation-android). The update comes with the latest version of MapLibre GL Native (10.0.2) and includes a navigation UI by default.

<img src="maplibre-navigation-android.png" alt="Screenshot of Maplibre Navigation V2" style="max-width:600px;width:100%">

Maplibre Navigation Android is an open source navigation library which allows everyone to build a customized navigation experience on Android. 
You can easily integrate a lot of different tiles, as you are used to from Maplibre GL Native. 
You can integrate your own routing backend, OSRM and GraphHopper (using the `/navigate` endpoint) are easy to implement.
You can build your own navigation UI. An example implementation of such a custom implementation can be found in the [Kurviger App](https://play.google.com/store/apps/details?id=com.kurviger.app).

The full changelog of this update is:
- Initial release of Navigation UI package.
- We adapted Navigation module (mostly `RouteFetcher`) to be aligned with the implementation we need in the Navigation-UI package.
- Move Style-Url, Routing-Url and Access-Token to NavigationSettings in sample app.
- Remove unused code (mostly Mapbox Speech Service related classes).
- Updated Maplibre version to v10.0.2.
- Incremented minSdk version from 15 to 21 to work same as maplibre implementation.
- Created custom classes for `GoogleLocationEngineImpl`, `Utils`, `LocationEngineProvider` which were removed from default implementation Maplibre to provide working with GSM location.
- Corrected resource calls due to renamed res files in maplibre (from `mapbox_` to `maplibre_`).
- Updated dependencies of used libs and build tools
- Removed AccessToken usage
- Fixed Jitpack Build
- Use the navigation options instead of constants in ToleranceUtils (used in the offroute detection), if you haven't modified rerouting values in the navigation options, nothing should change

Thanks to all contributors that made this awesome release possible:
- [skienzl](https://github.com/skienzl)
- [jDilshodbek](https://github.com/jDilshodbek)
- [Brammos](https://github.com/Brammos)
- [avalanchas](https://github.com/avalanchas)
- [bertuccellimatteo](https://github.com/bertuccellimatteo)
- [frankkienl](https://github.com/frankkienl)

We are always happy for contributions, so if you miss a feature or find an issue, feel free to open a PR!