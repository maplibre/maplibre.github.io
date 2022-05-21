# maplibre.org

Content of the https://maplibre.org

Features:

- News and blog posts can be published
- External dependencies are handled via NPM
- Hugo is bundling the CSS and JS

## Building

1. [Install Hugo](https://gohugo.io/getting-started/installing/), which meets the version requirement `>=v0.97.3+extended` (the `+extended` indicates that the "extended" version of Hugo is required).
   Alternative: If Hugo is not available in a recent version on your platform, then use the wrapper script `./hugow --get-extended`.
2. Run `npm install` to setup the dependencies
3. Run `npm run serve` or `./hugow --get-extended serve`
4. Open the URL which is printed in the terminal

After making any changes, make sure to run `npm run format`.

## Building for Production

In order to build the website run `npm run build`. The built website is available in `public/`.

# MapLibre community map

The data for https://maplibre.org/community/ is managed at `data/community.json`.
It shows a map of the MapLibre community members.

The map shows contributors to MapLibre projects as recorded in the public git committer history.

Location information was taken from people's public GitHub profiles.

### Please Add Me

If you would like to be included in the MapLibre community map, fork this repo, edit `data/community.json`, and make a pull request. Or just open an issue...

### Please Remove Me

If you are on the map, but don't want to be, please open a pull request or issue.
