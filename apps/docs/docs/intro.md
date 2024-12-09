---
sidebar_position: 1
slug: /
---

# Docs

### About

This library provides a pair of React components to display _connected_ country and region dropdowns (pick a country, it shows the relevant regions). If you're not using React, check out the [plain vanilla JS version](https://github.com/country-regions/country-region-selector) instead (warning: it's a bit dated now). The list of countries and regions is maintained separately and found in the [country-region-data](https://github.com/country-regions/country-region-data) repo.

Check out the [Basic Usage](./demos/BasicUsage.mdx) demo for a plain vanilla example of what the script does.

This doc is for demoing the tool, explaining the features and how to integrate it with external component libraries. For building the script locally,
see [DEVELOPER.md](https://github.com/country-regions/react-country-region-selector/blob/master/DEVELOPER.md). For the changelog [see here](https://github.com/country-regions/react-country-region-selector/blob/master/CHANGELOG.md).

### Features

It's pretty versatile.

- There are two separate components (`<CountryDropdown />`, `<RegionDropdown>`) that you can embed in your
  DOM wherever you need. That sounded like a vulgar euphemism, but it wasn't, honest.
- The source data used by the library is also exported, should you need it.
- If you need to fine-tune it, you can customize exactly which countries and regions appear.
- [A lot of options](./props.md) are provided, for things like styling, event callbacks and so on.
- To keep file sizes down you have the option of creating a custom build of the library containing only a list of
  those countries you want to show up. See [Advanced](./advanced/) for more info.
- by default the script renders plain ol' HTML `<select>` elements. But if you want to use it with Material UI or other component frameworks, that's fine too. See the [integration demos](./demos/integrations/).

### Installation

You know the ropes! Install it using your favourite package manager like so:

```bash
npm install react-country-region-selector
yarn add react-country-region-selector
pnpm add react-country-region-selector
```

### Gotchas

Please note the following gotchas:

- _Page charset_: some country names contain UTF-8 chars, so your page will need an appropriate charset to handle them.
  If you see some invalid characters appearing in the dropdown, make sure you have UTF-8 specified in your page
  <code>&lt;head&gt;</code>, like so: `<meta charset="UTF-8">`
- _Return values_: for the `onChange` callback, the selected value is returned as the first value and the full `event` as the
  second. I know that's non-standard, but even _years_ after creating this script, I think it's a more convenient API
  than having to fish around to find the selected value in `event.target.value`.
