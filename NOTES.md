## Notes

Nx commands:

- `npx nx build rcrs` - runs the rollup build for the rcrs lib
- `npx nx run rcrs:storybook` - runs storybook


#### Breaking changes from 2.x

- We're dropping React 15 support. Pretty old now. Check hooks support version & make that minimum version.
- The way we pass in the data is different now. Previously you had to do an awkward separate build. Now country-region-data
offers an tree-shakeable es6 version of the data which this package consumes.  
- Allows rendering of ANY lists, not just countries and regions.
- Added new `<Provider />` component where you pass in the country data. 
- Whitelist and blacklist props are passed on the provider level, e.g.
```jsx
<Provider whitelist={{ CA: ["BC", "AB"] }} countries={...}>
    ...
</Provider>
```
- components now forward refs.

#### Misc notes

- tooling exists for moving and removing libs. https://nx.dev/l/r/structure/grouping-libraries#move-generator
- `yarn nx dep-graph` -> dependency graph
- `nx run-many --target=build --all` - runs the build command on everything in the repo
- moved to Yarn
- After this refactor, it's allllmost become so generic it could be used for react-native or with react-select etc.

#### Dev notes

- include instructions on how to get Nx installed


### Demos:

- all combination of settings
- i18n
- ref forwarding (e.g. click to focus on a field)
- custom country/region list (needed to check typings)
- async loading of regions??? Be kinda cool....

