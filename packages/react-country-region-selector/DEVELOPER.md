## Developer Notes

This was a very old script which I revamped in Dec 2024 to bring it into the 21st century. Version `4.0.0` now uses Typescript,
modern rollup + babel and jest for testing, plus uses this crazy new thing called "hooks" in React.

The dev environment is functional but needs work.

`yarn build` -> builds the script.
`yarn` - bootstraps the app. Also builds it.
`yarn test` - runs the tests. Note, if you're altering the code run `yarn && yarn test` (see "Ugly bits" below).

Ugly bits:

- The country-regions data set is very large, so to keep bundle sizes down, the rollup build for this script parses
  the data and minifies it as much as it can. That's done in via a custom rollup plugin. It works fine, but makes local dev a
  bit awkward, e.g. running the tests while tweaking the code. For that you have to run `yarn && yarn test` to first rebuild,
  then run the tests - and the tests are ran on the `/dist` result. Awkward. This'd be nice to rethink.
- The `/example` folder is a mess. It's very data, requires a bit of custom setup to bootstrap both the main repo and that. Plus,
  just like the tests it won't auto-reload when you change the source: you have to do a rebuild and even restart the server.
- needs linting + prettier set up.

### Notes for next 4.x release

- Breaking changes:
  - Minimum react version updated to 16.8.0 (hooks)
  - `classes` prop has been renamed `className`
  - `onBlur` callback is no longer passed the selected value, just the event

Remaining checklist:

[ ] new documentation
[ ] finish tests
[ ] update examples and check them all over
[ ] get types generated properly & update package.json to link
[ ] check build size
[ ] check commands for generating subset of data
[ ] publish alpha (remember dist-tag) and check consumption
