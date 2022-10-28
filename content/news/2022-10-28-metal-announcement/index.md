---
title: "Metal Announcement"
date: 2022-10-28
categories: ["maplibre-gl-native"]
authors: [wipfli]
draft: false
---

MapLibre GL Native is planning for modularization and migration to Metal, Apple's graphics framework, for rendering on iOS mobile devices.

<p>
<img src="metal.png" alt="Metal" style="max-width:600px;width:100%">
</p>

We are happy to announce that Stamen Design, with technical leadership by Wet Dog Weather and funding from AWS, have begun planning for the modularization of MapLibre rendering and a separate proposal for migrating the iOS SDK from OpenGL to Metal.

Stamen provides full-stack cartographic services to clients who rely heavily on projects like MapLibre, which tie all the parts of the modern mapping stack – tiles, styles, and SDKs – together. Steve Gifford from Wet Dog Weather will be the technical lead for this project, and Stephanie May, Damon Burgett, and Camilla Mahon from Stamen will support the effort to get these plans in front of the community.

AWS identified that their iOS customers have a strong need for a Metal map renderer and are glad to support the MapLibre community with this contribution.

We’ve begun work on the design proposal for modularization of the map rendering architecture. Have a look and share what you think at https://github.com/maplibre/maplibre-gl-native/pull/547. This modularization will allow new rendering architectures to be implemented quickly and more easily.

We anticipate modularization will give us a concrete framework to better interrogate various migration strategies. The modularization design proposal process will be immediately followed by a second proposal migration to Metal support.

We are looking forward to this collaboration, and hope this can act as a catalyst to bring the project, its contributors, and MapLibre users into the Metal future.
