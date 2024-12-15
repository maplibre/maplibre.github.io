---
title: "Bounty Directions"
date: "2023-01-20"
categories: ["announcements"]
authors: [wipfli]
---

The MapLibre Bounty Program will support the following cross-project directions: Terrain3D, globe view, documentation, performance, Brahmic/Indic scripts, MapLibre Innovation Lab.

We invited the broader community to give feedback and share ideas for cross-project directions in a [discussion group on GitHub](https://github.com/maplibre/maplibre/discussions/categories/bounties-cross-project-directions?discussions_q=category%3A%22Bounties+-+cross-project+directions%22+sort%3Atop).

As of Jan 18th, 2023, the following directions got the most votes:

- 3D terrain visualization (22 votes)
- Globe on zoom out via Adaptive Composite Map Projection (17 votes)
- Speed - initialization and rendering (11 votes)
- Support Brahmic/Indic scripts (9 votes)

The Governing Board found that these directions are indeed strategically important for the growth of the user and contributor base and decided to support them with Bounties.

Furthermore, the Board identified that promoting better documentation with Bounties will help the wider adoption of the MapLibre SDKs and help people migrate existing projects to MapLibre.

Finally, the Board recognizes that innovation is a critical factor for the long-term success of MapLibre and sees a need to foster an open environment where people can experiment freely. The MapLibre Innovation Lab shall be the place where people can come together and experiment, look at the latest technologies available, and prepare us for next-generation map rendering.

## Allocation on Directions

- USD 10,000 on 3D terrain visualization and parity web - native
  - Visualization of the elevation from DEM (RGBA tiles) including drawing the tracks, labels and points.
  - Improvements related to 3d terrain rendering - improvements and bug-fixing in existing Web implementation, implementation in Native, documentation.
- USD 10,000 on Globe View on zoom out via Adaptive Composite Map Projection
  - Ability to show and interact with Globe (or alternative view on earth) when map is zoomed out - while reusing and loading the same Mercator vector tile and raster data - client side reprojection of the data - using Adaptive Composite Map Projection - where deeply zoomed you are in Mercator - but from certain zoom level up there is transition to another projection.
- USD 10,000 on Documentation
  - Write tutorials and getting started guides to help people migrate existing projects to MapLibre or help them with new map rendering projects.
  - Modernize documentation tooling to meet today's best practices and most widely adopted solutions.
- USD 10,000 on Speed - initialization and rendering
  - Optimization related to initialization time of the rendering libraries, delay before the map appears in the app.
  - Rendering performance improvements, measurement, test and best-practice documentation.
- USD 5,000 on Support Brahmic/Indic scripts
  - Support text rendering for more languages, in particular Brahmic/Indic scripts.
- USD 5,000 on MapLibre Innovation Lab
  - Space for experimentation and innovation
  - Experiment with next-generation map rendering
  - Explore latest available technologies

## Next Steps

Now that the Governing Board has decided how to split the Bounty budget in strategically important directions, the maintainers and the coordinator are in charge of deciding on the allocation of Bounties on individual tasks.

The [Bounty System](https://github.com/maplibre/maplibre/wiki/Bounty-System) wiki page describes the full process.

For each Bounty Direction, there is a tracking [GitHub Issue in maplibre/maplibre](https://github.com/maplibre/maplibre/issues?q=is%3Aissue+is%3Aopen+label%3A%22bounty+direction%22). Individual Bounties tickets will be published in MapLibre GL JS, MapLibre Native and other repositories and they will reference their Bounty Direction ticket in maplibre/maplibre.

## Working on Bounties

If you are interested in working on Bounties, you first have to be cleared for the Developer Role. You can apply to the [Developer Role](https://github.com/maplibre/maplibre/wiki/Developer-Role) at https://maplibre.org/jobs.

Once you are in the [Developer Pool](https://github.com/maplibre/maplibre/wiki/Developer-Role#current-role-holders-developer-pool), you can apply for individual Bounties as they are published in Issues in our GitHub repositories.

We are looking forward to your contributions!
