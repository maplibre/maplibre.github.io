# maplibre.org

Content of the https://maplibre.org

Features:

- News and blog posts can be published
- External dependencies are handled via NPM
- Hugo is bundling the CSS and JS

## Building

1. [Install Hugo](https://gohugo.io/getting-started/installing/)
1. Run `npm install` to setup the dependencies
1. Run `npm run serve`
1. Open the URL which is printed in the terminal

After making any changes, make sure to run `npm run format`.

## Building for Production

In order to build the website run `npm run build`. The built website is available in `public/`.
