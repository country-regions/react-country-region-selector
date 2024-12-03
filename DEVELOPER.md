## Developer Notes

This was a very old script which I revamped in Dec 2024 to bring it into the 21st century. Version `4.0.0` now uses Turborepo, Typescript,
modern rollup + babel, jest for testing, modern React, Docusaurus for the doc, eslint and prettier.

`pnpm install` - bootstraps the monorepo
`npm run dev` - starts dev mode.
`npm run test` - runs the tests

### Tests

The Jest/RTL unit tests are found in the `packages/react-country-region-selector/src/__tests__` folder.

<a name="localDev"></a>

### Local Dev

This is pretty dated, I'm afraid. But to run this locally, do the following:

- `yarn install`
- in one terminal window: `yarn start`
- in another terminal window, go to the `/example` subfolder and do the same: `yarn install`, `yarn start`
- open `http://localhost:3000` in your browser.

### Notes for next 4.x release

Remaining checklist:

[ ] finish tests
[ ] update examples and check them all over
[ ] get types generated properly & update package.json to link
[ ] check build size
[ ] check commands for generating subset of data
[ ] publish alpha (remember dist-tag) and check consumption
