---
title: "maplibre-rs monthly"
date: 2022-09-24
categories: ["maplibre-rs"]
authors: [maxammann]
draft: true
---

[maplibre-rs](https://github.com/maplibre/maplibre-rs) is an upcoming and cross-platform vector map renderer written in Rust. If you want to get in touch with the developers, visit the [#maplibre:matrix.org](https://matrix.to/#/#mapr:matrix.org) chat or join the MapLibre (#maplibre and #maplibre-rs) community within the OpenStreetMap Slack. You can get an invitation [here](https://osmus-slack.herokuapp.com/).

## 📰 News

It has been an exciting summer - FOSS4G happened and a [paper](https://maplibre.org/news/2022-08-24-maplibre-rs-paper/) about maplibre-rs was published. The whole MapLibre team was able to meet! We met our sponsors and other awesome people from the open-source community.

And because a picture is worth a thousand words:
{{< page-figure "collage.jpeg" >}}

Behind the scenes, I was working on providing an alternative multi-threading implementation for the web platform. Because atomics are only supported by [enabling specific HTTP headers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), we really need a more portable implementation which does not rely on these atomics. Instead of doing real multithreading in the browser, we want to do multiprocessing through WebWorkers. I designed an interface which should work well for most data-processing needs. The interface is called `AsyncProcedureCall`. 

```Rust
#[derive(Clone)]
pub enum Message<T: Transferables> {
    TileTessellated(T::TileTessellated),
    UnavailableLayer(T::UnavailableLayer),
    TessellatedLayer(T::TessellatedLayer),
}

#[derive(Clone, Serialize, Deserialize)]
pub enum Input {
    TileRequest(TileRequest),
}

pub type AsyncProcedure<C> = fn(input: Input, context: C) -> AsyncProcedureFuture;

pub trait AsyncProcedureCall<T: Transferables, HC: HttpClient>: 'static {
    type Context: Context<T, HC> + Send;

    fn receive(&mut self) -> Option<Message<T>>;

    fn schedule(&self, input: Input, procedure: AsyncProcedure<Self::Context>);
}

```


Instead of relying on mutexes and MPSC channels, the implementation of this `APC` for the web relies on WebWorkers and sending [ArrayBuffers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer).

I'm working on this in a rather large [PR](https://github.com/maplibre/maplibre-rs/pull/174). As not much else is going on in the project, merging probably won't cause issues.

## 🏠 House Keeping

The following will summarizes what happened last week on GitHub.

### 🎁 Merged Pull Requests

- [#169](https://github.com/maplibre/maplibre-rs/pull/169) Add watch functionality for web by [@maxammann](https://github.com/maxammann)<br>
  We have now build tools for the web which automatically reloads the demo in the browser for changes in Rust.

- [#167](https://github.com/maplibre/maplibre-rs/pull/167) Add citation instructions by [@maxammann](https://github.com/maxammann)<br>
  The maplibre-rs is now officially citable in others scientific work!

- [#160](https://github.com/maplibre/maplibre-rs/pull/160) Add CLI to demo by [@maxammann](https://github.com/maxammann)<br>
  A CLI allows users now to configure the demo on Linux, Windows and macOS.

- [#154](https://github.com/maplibre/maplibre-rs/pull/154) Run scheduled builds by [@maxammann](https://github.com/maxammann)<br>
  We regularly build our main branch now, to detect breaking dependencies.

- [#80](https://github.com/maplibre/maplibre-rs/pull/80) Refactor WebWorker pool by [@maxammann](https://github.com/maxammann)<br>
  This is the start of a major refactor for async tasks on the web.


### 🎁 New Issues

- [#166](https://github.com/maplibre/maplibre-rs/issues/166) ReferenceError: Can't find variable: Worker by [@maxammann](https://github.com/maxammann)<br>
  This bug blocks us currently on Safari (iOS/macOS). I'm actively working right now to provide a build which does not use atomics.

- [#164](https://github.com/maplibre/maplibre-rs/issues/164) INVALID_ENUM: framebuffertexture2d invalid attachment by [@maxammann](https://github.com/maxammann)<br>
  This is a bug in older versions in Safari. With the release of iOS 16 and Safari 16 this is fixed now.

- [#161](https://github.com/maplibre/maplibre-rs/issues/161) Limit the maximum and minimum zoom level by [@hanchao](https://github.com/hanchao)<br>
  We got a great bug report! It seems like people are experimenting with maplibre-rs in the wild!



### 🧵 Current Discussions

None.

### 👋 Contributors

- [@karisair](https://github.com/karisair)
- [@birkskyum](https://github.com/birkskyum)
- [@BezPowell](https://github.com/BezPowell)
- [@Quillasp](https://github.com/Quillasp) - Thanks for working on raster tile support!
