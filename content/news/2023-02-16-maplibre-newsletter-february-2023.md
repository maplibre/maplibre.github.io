---
title: "MapLibre Newsletter February 2023"
date: 2023-02-16
categories: ["newsletter"]
authors: [wipfli]
draft: false
---

# MapLibre Newsletter - February 2023

## General

We have successfully registered the MapLibre trademark in the [US](https://tsdr.uspto.gov/#caseNumber=97744197&caseType=SERIAL_NO&searchType=statusSearch) and in the [EU](https://euipo.europa.eu/eSearch/#details/trademarks/018773096). Open Source Collective, our fiscal host, holds the MapLibre trademarks.

MapLibre React Native has been published. Thanks Ian, Luke, and Jérôme for contributing this package. Read more [here](https://maplibre.org/news/2023-02-08-maplibre-react-native-announcement/).

There is an ongoing discussion if a style editor should be maintained under the MapLibre umbrella. See <a href="https://github.com/maplibre/maplibre/discussions/153#discussioncomment-4776796">style editor discussion</a>.

## Events

- On Jan 30th, 2023, about 20 people came together for the first MapLibre Switzerland meetup in Olten. After a short overview presentation by Oliver Wipfli, we had a discussion about what people need. Feature-state in Native, rendering of 3D buildings, and improving the style specification were discussed. After that we went for Pizza. Thanks Robin Schmid for hosting us in the SBB office and thanks everyone for coming!
- On Feb 1st, 2023, more than 40 people joined the first MapLibre User Group Japan online meeting. Thanks Yasunori Kirimoto and Kanahiro Iguchi for organizing this!
- On Feb 8th, 2023, Alan Chen Wei from GrabMaps gave a presentation about how Grab implemented Khmer text rendering with HarfBuzz. Video recording is available [here](https://zoom.us/rec/share/X4c7fjSQiFkl1jNNMRiqt9jqeLK3ZCJZ5SuMhi8-qzzcVnDisfcABqLqIZcHflTv.3loRYzsO4OhqSsYt?startTime=1675843326000) Passcode: `JHnxr8*3`. Thanks for the interesting talk, Alan!

## MapLibre Native

We are happy to welcome Bart Louwers and Ovidiu Voda as Maintainers of MapLibre Native. They started in January 2023 and we can see how their work has a positive impact on MapLibre Native with many new people contributing to the repo. Thank you both for your efforts!

MapLibre Native for Android [v10.0.0](https://github.com/maplibre/maplibre-gl-native/releases/tag/android-v10.0.0) is out now. Try it out and let us know what you think. All bug reports are welcome! The new features, bug fixes and breaking changes are documented in the [release notes](https://github.com/maplibre/maplibre-gl-native/releases/tag/android-v10.0.0).

### Bounties 💰

MapLibre Native published Bounties for code development tasks. Read our [step-by-step bounties guide](https://maplibre.org/roadmap/step-by-step-bounties-guide/) to learn how you can work on Bounties and get paid.

Currently, the following Bounties are available (see [here](https://github.com/maplibre/maplibre-gl-native/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%92%B0+bounty+L%22%2C%22%F0%9F%92%B0+bounty+S%22%2C%22%F0%9F%92%B0+bounty+M%22+) for an up-to-date list):

- Documentation: Getting started guide iOS: [#809](https://github.com/maplibre/maplibre-gl-native/issues/809)
- Documentation: Getting started guide Android: [#808](https://github.com/maplibre/maplibre-gl-native/issues/808)
- Documentation: Tutorial annotations iOS: [#810](https://github.com/maplibre/maplibre-gl-native/issues/810)
- Documentation: Tutorial annotations Android: [#811](https://github.com/maplibre/maplibre-gl-native/issues/811)
- Documentation: Example current location iOS: [#813](https://github.com/maplibre/maplibre-gl-native/issues/813)
- Documentation: Example current location Android: [#812](https://github.com/maplibre/maplibre-gl-native/issues/812)

### Contributions

Code contributions since January 15th, 2023:

- [louwers](https://github.com/maplibre/maplibre-gl-native/commits?author=louwers) contributed 20 pull requests.
  - Continuous integration for Android is now green again. We no longer use a custom Docker image.
  - The various README files throughout the repository where refreshed.
  - The [Android API docs](https://maplibre.org/maplibre-gl-native/android/api/) now use Dokka, which is a documentation generator with better support for Kotlin than the previously used Javadoc.
  - New [Core C++ docs](https://maplibre.org/maplibre-gl-native/cpp/api/) were published as well, using Doxygen as documentation generator.
  - C++17 is used for compilation and some parts of the codebase were updated to take advantage of this.
- [tdcosta100](https://github.com/maplibre/maplibre-gl-native/commits?author=tdcosta100) contributed 4 pull requests to prepare Windows support.
- [KiwiKilian](https://github.com/maplibre/maplibre-gl-native/commits?author=KiwiKilian) improved the node documentation.
- [fynngodau](https://github.com/maplibre/maplibre-gl-native/commits?author=fynngodau) contributed 2 pull requests to improve Kotlin code and fix an issue with bitmaps.
- [hallahan](https://github.com/maplibre/maplibre-gl-native/commits?author=hallahan) improved the iOS docs.
- [birkskyum](https://github.com/maplibre/maplibre-gl-native/commits?author=birkskyum) updated the Android Gradle Plugin.
- [alanchenboy](https://github.com/maplibre/maplibre-gl-native/commits?author=alanchenboy) contributed 2 pull requests to fix a snapshotting crash and enable C++ unit tests.

## MapLibre GL JS

In the last Technical Steering Committee meeting on Feb 8th, 2023, we had the pleasure to welcome some new faces, including people from OSM Americana and Felt.

There were some discussions around how to move the style specification forward and how the contribution process can be more stream-lined.

We published MapLibre GL JS v3.0.0-pre.4 on npm. Try it out and let us know what you think. All bug reports are welcome! The new features, bug fixes and breaking changes are documented in the [CHANGELOG](https://github.com/maplibre/maplibre-gl-js/blob/main/CHANGELOG.md).

Ah, and MapLibre GL JS has now 4k Stars on GitHub ([star-history.com](https://star-history.com/#maplibre/maplibre-gl-js&Date)). Congratulations MapLibre GL JS!

### Bounties 💰

MapLibre GL JS published Bounties for code development tasks. Read our [step-by-step bounties guide](https://maplibre.org/roadmap/step-by-step-bounties-guide/) to learn how you can work on Bounties and get paid.

Currently, the following Bounties are available (see [here](https://github.com/maplibre/maplibre-gl-js/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%92%B0+bounty+L%22%2C%22%F0%9F%92%B0+bounty+S%22%2C%22%F0%9F%92%B0+bounty+M%22+) for an up-to-date list):

- Documentation: Move docs repo into GL JS codebase: [#2150](https://github.com/maplibre/maplibre-gl-js/issues/2150)
- Documentation: Factor out the style specification into a separate repo: [#2149](https://github.com/maplibre/maplibre-gl-js/issues/2149)
- Terrain3D: Fix a panning issue:[ #2094](https://github.com/maplibre/maplibre-gl-js/issues/2094)
- Performance: Improve the benchmarks code: [#982](https://github.com/maplibre/maplibre-gl-js/issues/2094)

### Contributions

Code contributions since January 15th, 2023:

- [zhangyiatmicrosoft](https://github.com/maplibre/maplibre-gl-js/commits?author=zhangyiatmicrosoft) from Microsoft contributed 10 pull requests for better testing, fewer build warnings, and improved developer experience on Window.
- [pramilk](https://github.com/maplibre/maplibre-gl-js/commits?author=pramilk) from Microsoft 3 pull requests with a focus on improved performance.
- [kevinschaul](https://github.com/maplibre/maplibre-gl-js/commits?author=kevinschaul) contributed 2 pull requests for better full-screen control on mobile devices.
- [ZeLonewolf](https://github.com/maplibre/maplibre-gl-js/commits?author=ZeLonewolf) from OSM Americana contributed 3 pull requests around style images and better contributing guides.
- [llambanna](https://github.com/maplibre/maplibre-gl-js/commits?author=llambanna) fixed a problem with Terrain3D at the anti-meridian.
- [jcary741](https://github.com/maplibre/maplibre-gl-js/commits?author=jcary741) fixed an issue in the new setSprite functionality.
- [rotu](https://github.com/maplibre/maplibre-gl-js/commits?author=rotu) contributed 3 pull requests to improve continuous integration.
- [maxammann](https://github.com/maplibre/maplibre-gl-js/commits?author=maxammann) contributed a security policy explaining how people can report security issues.
- [smellyshovel](https://github.com/maplibre/maplibre-gl-js/commits?author=smellyshovel) contributed 2 pull requests in a series of refactoring to improve the code quality.
- [HarelM](https://github.com/maplibre/maplibre-gl-js/commits?author=HarelM) finalized a pull request for improved window resize handling.

## Upcoming Events

- MapLibre User Group Japan: The next Japanese-speaking Twitter Space meeting will be on March 1st, 2023 at 19:00 JST. More info at [https://bit.ly/mug--jp](https://bit.ly/mug--jp)
- Meta maps meetup Zurich: On March 9th, 2023, Meta is inviting everybody to its Zurich office for a local maps meetup. More info can be found at [https://www.eventbrite.com/e/zurich-maps-geo-stammtisch-tickets-529414020587](https://www.eventbrite.com/e/zurich-maps-geo-stammtisch-tickets-529414020587)
- MapLibre Technical Steering Committee meeting: Our monthly meetings are open to everybody. They always take place on the second Wednesday of the month. The next monthly meeting is on March 8th, 2023 with the Native meeting at 7 PM - 8 PM CET and the Web meeting at 8 PM to 9 PM CET. Zoom link can be found in our #maplibre Slack channel roughly one hour before the meetings. Join our slack at [https://slack.openstreetmap.us](https://slack.openstreetmap.us).
