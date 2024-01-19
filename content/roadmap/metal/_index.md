---
title: Roadmap - Metal
weight: 10
---

Implement a Metal graphics backend to ensure iOS in future releases is fully supported, as Apple is deprecating OpenGL.

<p>
    <img src="image.png" style="max-width:600px;width:100%">
</p>

First, the codebase shall be modularized to prepare the existing OpenGL architecture for a more modern graphics backend like Metal. Once the renderer is modularized, we will proceed with implementing the actual Metal redering backend.

Read the Design Proposals on GitHub:

- [2022-10-27-rendering-modularization.md](https://github.com/maplibre/maplibre-native/blob/main/design-proposals/2022-10-27-rendering-modularization.md)
- [2022-11-29-metal-port.md](https://github.com/maplibre/maplibre-native/blob/main/design-proposals/2022-11-29-metal-port.md)

Refer to the [MapLibre Native Metal Project Board](https://github.com/orgs/maplibre/projects/8) on GitHub for the most up-to-date status.

## Status (January 2023)

MapLibre Native for iOS 6.0.0 was released with Metal support. See the [announcement](/news/2024-01-16-maplibre-native-metal-announcement/).

## Status (November 2023)

[MapLibre Native Metal Status Report November 2023](https://docs.google.com/document/d/e/2PACX-1vTo3kD9L3JufM_Cqu30vMnmjl33-1QsxuEm7tpk10Mm9GixU3vFyJtcLslX4haiAspza0lz76GStnDo/pub)

## Status (August 2023)

[MapLibre Native Metal August 2023 Status Report (pdf)](/pdfs/2023-09-metal-status.pdf).

## Status (September 2023)

The rendering modularization effort is now mostly [complete](https://github.com/maplibre/maplibre-native/issues/1389). The new renderer can be enabled with a feature flag, the legacy renderer is still the default at this point. The new render will continue to receive stability and [performance](https://github.com/maplibre/maplibre-native/issues/1548) upgrades and will be 'field tested' by various stakeholders before it will become the default.

Now that the architectural changes have been completed, the focus of the team has shifted to implementing a Metal renderer. The new architecture seems to be paying off, because they have produced a working Metal renderer in lightning speed. The first adventurous [alpha testers](https://github.com/maplibre/maplibre-native/issues/1609) of Metal support in MapLibre Native can get their hands on it sometime in September 2023.

## Status (August 2023)

[MapLibre Native Metal August 2023 Status Report (pdf)](/pdfs/2023-08-metal-status.pdf).

## Status (July 2023)

[MapLibre Native Metal July 2023 Status Report (pdf)](/pdfs/2023-07-metal-status.pdf).

## Status (May 2023)

The Metal project is ongoing. Below are the updates:

- All team members are now onboarded
- Project Phase 1: Rendering Modularisation is underway with the goal of reaching a stable phase that will allow a pre-release, before going full steam on Metal implementation.

## Status (March 2023)

The Metal project team has started working with the goal of delivering a Metal beta release by the end of 2023. AWS and Meta are supporting this initiative.
