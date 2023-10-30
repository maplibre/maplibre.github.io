---
title: "MapLibre Newsletter October 2023"
date: 2023-10-30
categories: ["newsletter"]
authors: [wipfli, harel, bart]
draft: false
---

# MapLibre Newsletter - October 2023

## MapLibre GL JS

Just in time for this newsletter, MapLibre GL JS has gained over [5000 Stars on GitHub](https://github.com/maplibre/maplibre-gl-js/stargazers). Great that we got so far and thanks to everyone who contributed in the past and made this possible!

In the last month, 5 releases of MapLibre GL JS were made. Below you find some highlights, for a full list of improvements please have a look at the [changelog](https://github.com/maplibre/maplibre-gl-js/blob/main/CHANGELOG.md).

- Safari DEM fix: In a new version of the Safari browser, Apple has introduced some random noise in images in private mode. While usually users don't notice this effect, it had drastic consequences for terrain3d and client-side hillshading. Mike Barry fixed this issue by using a JavaScript library for decoding PNGs rather than the browser api. See [pull request](https://github.com/maplibre/maplibre-gl-js/pull/3185).
- High-resolution CJK: Users of Chinese Japanese and Korean (CJK) languages get to enjoy labels now at twice the resolution. This makes CJK text labels more readable and the map overall more appealing. Thanks Brandon Liu for contributing this! See [pull request](https://github.com/maplibre/maplibre-gl-js/pull/3006).
- Custom raster DEM encoding: Isaac Besora Vilardaga from Felt made the encoding of raster digital elevation model (DEM) tiles configurable. This means that the user can now specify a custom base and interval value for the DEM tiles. See [pull request](https://github.com/maplibre/maplibre-gl-js/pull/3087).

Finally, we are working on moving some of the old callback-based design to more modern JavaScript Promises allowing the use of async and await. While this change is still in the making, it will most likely lead to a series of breaking changes. Feedback on this design change is more than welcome. Feel free to share your thoughts in this [pull request](https://github.com/maplibre/maplibre-gl-js/pull/3233).

## MapLibre Native

The iOS pre-release with Metal support has received numerous performance optimizations. We are inviting users of MapLibre Native on iOS to try out a recent pre-release and [share feedback](https://github.com/maplibre/maplibre-native/issues/1609). The upcoming MapLibre Native iOS 6.0.0 release will use Metal for rendering.

The project to implement a Metal backend for MapLibre Native is now nearing its completion. Steve Gifford, who led the effort, is now exploring options for a follow-up project. He has made [various proposals](https://github.com/maplibre/maplibre/discussions?discussions_q=is%3Aopen+author%3Asjg-wdw+Native). Please have a look and share your thoughts.

Keeping binary size low is very important for some users of MapLibre Native. We now have [Bloaty](https://github.com/google/bloaty) running on CI to analyze and report on binary size differences on PRs. We are welcoming contributions that reduce binary size. Going forward, binary size (increase) will be an acceptance criterion for contributions. Ideally it should be possible to opt-out of future functionality that significantly adds to binary size using compile options.

There is an open PR from Alan Wei Chen that [integrates HarfBuzz into the toolkit](https://github.com/maplibre/maplibre-native/pull/1439) to be able to render Khmer, Burmese and Hindi.

Related to the point above, Oliver Wipfli wrote a great article on [text rendering in MapLibre](https://github.com/wipfli/about-text-rendering-in-maplibre). He concludes:

> It is an exciting time to work on text rendering in MapLibre because it is not perfect yet and any improvement will likely mean that millions if not billions of people get to enjoy vector maps in their native language. So it is well worth the effort...

Tadej Novak is making progress on splitting out the Qt platform to [its own repository](https://github.com/maplibre/maplibre-native-qt). The Qt platform will be used to experiment with platform bindings living in a separate repository.

## Upcoming Events

### State of the Map Europe

MapLibre will be represented by [Bart Louwers](https://github.com/louwers) and [Luke Seelenbinder](https://github.com/lseelenbinder) at [State of the Map Europe](https://stateofthemap.eu/) in [Antwerp](https://www.openstreetmap.org/search?query=Filip%20Williotstraat%209%2C%202600%20Antwerpen%2C%20Belgien#map=19/51.18690/4.43596) November 10-12th, 2023.

### FOSS4G (Seoul)

For late November, [Jashanpreet Singh](https://github.com/jashanbhullar) plans to hold a talk on the state of MapLibre at [FOSS4G in Seoul](https://foss4g.asia/2023/).

Come by and get to know us in person.

### MapLibre Meetup Japan

The MapLibre User Group Japan will organize an in-person meetup in November. If you are interested in joining the meetup in Japan, contact Yasunori Kirimoto in the [MapLibre Slack channel](https://slack.openstreetmap.us/). They even have MapLibre t-shirts!

### MapLibre Online Conference Day

We plan to do an online conference day. The date is still to be defined, but if you are interested in giving a talk, you can fill out the following form already now: [link](https://forms.gle/AKg63TnASSWXfZi66)

More info on the conference day will follow in the MapLibre Slack channel, on social media, and here in the Newsletter.
