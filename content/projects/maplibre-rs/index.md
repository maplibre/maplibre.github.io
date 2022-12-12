---
title: "maplibre-rs"
weight: 100
github: https://github.com/maplibre/maplibre-rs
documentation:
  - url: https://docs.rs/maplibre/
    name: Rust API Documentation
  - url: https://maplibre.org/maplibre-rs/book/
    name: Book
stable: false
---

maplibre-rs, an experimental project, is a portable and performant vector maps renderer. We aim to support web, mobile and desktop applications. This
is achieved by the novel [WebGPU](https://www.w3.org/TR/webgpu/) specification. Plenty of native implementations are
already implementing this specification. On the web, it is implemented by Firefox, Chrome and Safari. There are also
standalone implementations that directly use Vulkan, OpenGL or Metal as a backend. Those backends allow maplibre-rs to run on
mobile and desktop applications.

Rust is used as a Lingua-franka on all platforms. This is made possible by WebAssembly, which allows us to use Rust for
web development.

The goal of maplibre-rs is to render maps to visualize data. Right now the goal of maplibre-rs is not to replace existing
vector map renderers like Google Maps, Apple Maps or MapLibre. The current implementation serves as a proof-of-concept
of the used technology stack. It is unclear whether the high-performance requirements of rendering maps using vector
graphics are achievable using the current stack.
