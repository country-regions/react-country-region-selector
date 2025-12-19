## Developer Notes

This was a very old script which I revamped in Dec 2024 to bring it into the 21st century. Version `4.0.0` now uses Turborepo, Typescript,
modern rollup + babel, jest, modern React, Docusaurus for the doc.

`npm run dev` - starts dev mode
`npm run test` - runs the tests

### Local Dev

- `pnpm install` - bootstraps the monorepo
- `npm run dev` - starts up a dev server loading the documentation + demos section. This gives you a working environment where you can test and rebuild the script without doing anything extra.

### Tests

The Jest/RTL unit tests are found in the `packages/react-country-region-selector/src/__tests__` folder. But to run,
just run `npm run test` in the root.

### Publishing

Package: Run `npm run publish` from the root. Requires 2FA.
Github pages: Run `npm run update-gh-pages` from the root.
