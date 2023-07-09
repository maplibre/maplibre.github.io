---
title: "MapLibre Newsletter June 2023"
date: 2023-06-23
categories: ["newsletter"]
authors: [duje]
draft: false
---

# MapLibre Newsletter - June 2023

## Bounty Program 💰

As with every newsletter, we would like to call attention to the fact that we have monetary awards available for developers wanting to push MapLibre forward in [one of the Bounty Directions](https://github.com/maplibre/maplibre/issues?q=is%3Aissue+is%3Aopen+label%3A%22bounty+direction%22). For MapLibre Native in particular, we are looking for **iOS developers with Objective-C experience** to help [modernize the iOS codebase](https://github.com/maplibre/maplibre-native/issues/1248).

Check out the [Step-by-Step Bounties Guide](https://maplibre.org/roadmap/step-by-step-bounties-guide/) and get in touch via GitHub or [Slack](https://slack.openstreetmap.us/) (`#maplibre-native`).

## MapLibre Native

#### Getting Ready for the Mega Merge

As part of the effort to implement a Metal backend for iOS, first the renderer needed to be made [modular](https://github.com/maplibre/maplibre-native/blob/main/design-proposals/2022-10-27-rendering-modularization.md). A team of graphics engineers has been working steadily on this for the last few months, and the PRs for this big refactor of the existing OpenGL ES rendering architecture will be landing soon.

These are the most significant architectural changes to MapLibre Native since the fork. Not only will they allow the creation of alternate rendering backends (including using [Metal](https://en.wikipedia.org/wiki/Metal_(API))), the library will also be more extendible and 'hackable' in general.  **We are looking for external graphics engineers, in particular with OpenGL (ES) and C++ software design experience, to help review these changes.** See the suggested PR process from Steve Gifford, project lead of the Metal project, on [Slack](https://osmus.slack.com/archives/C02B2CBSNBU/p1686938801960959) and keep an eye out for the PRs that will start popping up near the end of this month.

## Design Proposals

- [Android Annotations proposal](https://github.com/fynngodau/maplibre-native/blob/annotations-proposal/design-proposals/2023-06-17-android-annotations.md) Fynn Godau wrote this design proposal with the aim to revamp the Annotations API on Android. Leave your thoughts on the PR: [#1255](https://github.com/maplibre/maplibre-native/pull/1255).
- [FFI Design Proposal](https://github.com/maplibre/maplibre-native/pull/1254). Joel Winarske proposes to add a C API to MapLibre Native to enable an ABI stable interface to the library. This would play well with code generation tools for performant Flutter and Rust bindings.

## Contributions

- Fynn Godau replaced over 10.000 references to `mapbox` for the Android platform ([#1201](https://github.com/maplibre/maplibre-native/pull/1201)).
- Siarhei Fedartsou implemented and added the slice and index-of expressions to the Core and added them to the Android API. ([#1113](https://github.com/maplibre/maplibre-native/pull/1113), [#1133](https://github.com/maplibre/maplibre-native/pull/1133)).
- Hsieh Chin Fan Android contributed two [getting started guides for Android](https://maplibre.org/maplibre-native/docs/book/android/annotation-guide.html). The code of these example guides has been added to the example app inside the repo and included by reference, which makes it possible to ensure they keep working.
- Fynn Godau fixed 5 Android instrumentation tests (i.e. tests running on actual hardware). We only have 1 failing test with 616 passing. We expect Android CI to be green again soon.
- After adding the render tests to the coverage report, we are now at [79% coverage](https://app.codecov.io/github/maplibre/maplibre-native).
- Birk Skyum contributed various PRs.