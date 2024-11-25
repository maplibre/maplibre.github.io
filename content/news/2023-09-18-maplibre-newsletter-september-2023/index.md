---
title: "MapLibre Newsletter September 2023"
date: 2023-09-18
categories: ["newsletter"]
authors: [wipfli, harel, bart]
draft: false
---

### Governing Board Elections

It is already one year now that MapLibre has an elected Governing Board, and as the Board members serve a one-year-term, it was time for new Governing Board Elections. We held the Elections and all existing Board members have been re-elected. Read more [here](https://maplibre.org/news/2023-08-30-results-governing-board-election/).

### FOSS4G NL and Open Visualization Collaborator Summit

MapLibre was represented at two events in the last month:

- Bart Louwers, Maintainer Native, gave a talk at [FOSS4G NL](https://foss4g.nl/) in Middelburg.
- Yuri Astrakhan, MapLibre Governing Board Member, and Haowen You, Engineering Manager at AWS, gave talks at the [Open Visualization Collaborator Summit](https://deck.gl/events/new-york-summit-2023/) in New York City.

Thank you all for promoting MapLibre at these events!

<img src="speakers.jpg" style="width: 650px; max-width: 100%;">

<i>From left to right: Bart Louwers at FOSS4G NL, Yuri Astrakhan and Haowen You at the Open Visualization Collaborator Summit.</i>

### Engineering Proposals by Wet Dog Weather

Wet Dog Weather, the engineering contractor of AWS that led the Metal migration in MapLibre Native, has filed a series of engineering proposals, see [here](https://github.com/maplibre/maplibre/discussions?discussions_q=is%3Aopen+author%3Asjg-wdw+).

The proposals include things like **Terrain 3D**, **Globe View**, and many other exciting features for MapLibre Native. If your company is interested in these features, get in touch with Steve Gifford, CEO of Wet Dog Weather, to discuss funding opportunities. You can find him in the [MapLibre Slack channel](https://slack.openstreetmap.us/).

## MapLibre Style Specification

Last month, several design proposals were opened in the [MapLibre Style Spec repo on GitHub](https://github.com/maplibre/maplibre-style-spec). Here is an overview:

- Add a `pitch` style spec expression similar to the `zoom` expression. [#346](https://github.com/maplibre/maplibre-style-spec/issues/346).
- Support arbitrary base and interval values in RasterDEM sources [#326](https://github.com/maplibre/maplibre-style-spec/issues/326).
- Change default value for text-font to Noto Sans Regular [#311](https://github.com/maplibre/maplibre-style-spec/issues/311).

Furthermore, there is an ongoing discussion about how to support more writing systems such as Indic scripts with Harfbuzz text shaping. Read more [here](https://github.com/maplibre/maplibre-style-spec/discussions/312).

## MapLibre Native

### Metal Port

<img src="https://camo.githubusercontent.com/4b554e9a3a17846c585aab0acddb6ed2bc07f09a10dddf984cca212c2605d1b3/68747470733a2f2f6d61706c696272652e6f72672f6e6577732f323032332d30332d32332d6d6574616c2d70726f6a6563742d7465616d2d737461727465642f73637265656e73686f742e706e67" style="width: 300px; max-width: 100%" />

On January 4th, 2022 Steve Gifford posted a [thread on GitHub Discussions](https://github.com/maplibre/maplibre-native/discussions/202): have we considered a [Metal](https://developer.apple.com/metal/) port? It seemed like a momentous effort at the time, and not just from an engineering perspective, because it was. Thanks to the persistence of some key players and the hard work of graphics engineers who were part of the 'Metal team' this year, that Metal port is closer than ever.

This month, we have pushed out an [early access pre-release](https://github.com/maplibre/maplibre-native/issues/1609) of MapLibre Native for iOS with Metal support.

Thanks to everyone who gave it a spin thus far and that let us know their experiences with it. We will continue to push out pre-releases regularly as the last features are implemented and performance is further improved.

### Android Annotations

Fynn Godau's work on a [user-friendly Kotlin-based Annotations API](https://github.com/maplibre/maplibre-native/issues/1491) is ongoing. We are highly appreciative of Fynn's work done as part of the [Modernization](https://maplibre.org/roadmap/modernize-codebase/) bounty direction. Also thanks to Artak Kalantarian for helping review some of this work.

### iOS Modernization

With the release of Swift 5.9 with seamless C++ interoperability and a powerful macro system, new avenues are opening up for [modernizing the iOS codebase](https://github.com/maplibre/maplibre-native/issues/1248). Ian Wagner is playing with some ideas. Join us in the `#maplibre-ios` channel on Slack or leave a comment on GitHub if you are interested in this as well.

## MapLibre GL JS

We've released version 3.3.1 with a few minor bug fixes related to typings and improved license.txt file handling for packaging tools.

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
