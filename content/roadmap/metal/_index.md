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

## Status (2023-03-24)

The Metal project team has started working with the goal of delivering a Metal beta release by the end of 2023. AWS and Meta are supporting this initiative.

## Status (2023-05-21)

The Metal project is ongoing. Below are the updates:

- All team members are now onboarded
- Project Phase 1: Rendering Modularisation is underway with the goal of reaching a stable phase that will allow a pre-release, before going full steam on Metal implementation.
