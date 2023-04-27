---
title: "Metal Announcement"
date: 2022-10-28
categories: ["maplibre-native"]
authors: [wipfli]
draft: false
---

MapLibre Native is planning for modularization and migration to Metal, Apple's graphics framework, for rendering on iOS mobile devices.

<p>
<img src="metal.png" alt="Metal" style="max-width:600px;width:100%">
</p>

A design proposal for the modularization of the map rendering architecture can be found at https://github.com/maplibre/maplibre-native/pull/547. This modularization will allow new rendering architectures to be implemented quickly and more easily, and we anticipate that the modularization will give us a concrete framework to better interrogate various migration strategies. Feel free to share your thoughts on this approach in the Pull Request.

The modularization design proposal process will be immediately followed by a second proposal to migrate the renderer to Metal.

Stamen Design, with technical leadership by Wet Dog Weather and funding from AWS, are coordinating this effort. Stamen provides full-stack cartographic services to clients who rely heavily on projects like MapLibre, which tie all the parts of the modern mapping stack – tiles, styles, and SDKs – together.

Steve Gifford from Wet Dog Weather will be the technical lead for this project, and Stephanie May, Damon Burgett, and Camilla Mahon from Stamen will support the effort to get these plans in front of the community.

For AWS, a true Metal renderer is crucial because they identified that their iOS customers have a strong need for a Metal map renderer and are glad to support the MapLibre community with this contribution.

We are looking forward to the collaboration, and hope this can act as a catalyst to bring the project, its contributors, and MapLibre users into the Metal future.
