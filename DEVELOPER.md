## Developer Notes

This was an old, old script which I revamped in Dec 2024 to bring it into the 21st century. Version `4.0.0` now uses Typescript,
modern rollup + babel and jest for testing.

The dev environment needs work, but it's functional. Oddities:

- The country-regions data set is very large, so to keep bundle sizes down, the rollup build for this script parses
  the data and minifies it as much as it can. That's done in via rollup plugin. It works fine, but makes local dev a
  bit awkward, e.g. running the tests while tweaking the code. For that you have to run `yarn && yarn test` to first rebuild,
  then run the tests - and the tests are ran on the `/dist` result. Awkward. This'd be nice to rethink.
- The `/example` folder is a mess. It's very data, requires a bit of custom setup to bootstrap both the main repo and that. Plus,
  just like the tests it won't auto-reload when you change the source: you have to do a rebuild and even restart the server.

Others:

- needs linting + prettier set up.

### Notes for next 4.x release

- Minimum react version updated to 16.8.0 (hooks)
- typings now permit _any_ native props on <select> fields.
- `classes` prop has been renamed `className`
