# maplibre.org

Content of the https://maplibre.org

Features:

- News and blog posts can be published
- External dependencies are handled via NPM

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                                    | Action                                                                  |
| :----------------------------------------- | :---------------------------------------------------------------------- |
| `npm install`                              | Installs dependencies                                                   |
| `npm run dev`                              | Starts local dev server at `localhost:4321`                             |
| `npm run build`                            | Build your production site to `./dist/`                                 |
| `npm run preview`                          | Preview your build locally, before deploying                            |
| `npm run astro ...`                        | Run CLI commands like `astro add`, `astro check`                        |
| `npm run astro -- --help`                  | Get help using the Astro CLI                                            |
| `npm run format` && `npm run format-check` | Formats code and checks if all the files complies with formatting rules |

## MapLibre community map

The data for https://maplibre.org/community/ is managed at `src/content/community.json`.
It shows a map of the MapLibre community members.

The map shows contributors to MapLibre projects as recorded in the public git committer history.

Location information was taken from people's public GitHub profiles.

### Please Add Me

If you would like to be included in the MapLibre community map, fork this repo, edit `src/content/community.json`, and make a pull request. Or just open an issue...

### Please Remove Me

If you are on the map, but don't want to be, please open a pull request or issue.
