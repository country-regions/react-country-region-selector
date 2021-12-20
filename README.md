# react-country-region-selector

> Dec 20th, 2021. This repo will be in limbo for a little while. We're converting the repo to Nx, changing the code 
> to typescript and various other updates. 

[![Build Status](https://travis-ci.com/country-regions/react-country-region-selector.svg?branch=master)](https://travis-ci.com/country-regions/react-country-region-selector)

- [About](#about)  
    - [Features](#features)
    - [Gotchas](#gotchas)
- [Demo](#demo)  
- [Installation](#installation)
- [Usage](#usage)
- [List of component options](#options)
- [Command-line](#command-line)
- [Changelog](#changelog)
- [Tests](#tests)
- [Thanks!](#thanks)
- [License](#license) (spoiler: MIT!)

------------------

<a name="about"></a>
### About

This library provides a pair of React components to display _connected_ country and region dropdowns (pick a country, it shows the relevant regions). If you're not using React, check out the [plain vanilla JS version](https://github.com/country-regions/country-region-selector) instead. The list of countries and regions is maintained separately and found in the [country-region-data](https://github.com/country-regions/country-region-data) repo.


<a name="features"></a>
#### Features

It's pretty versatile.

- There are two separate components (`<CountryDropdown />`, `<RegionDropdown>`) that you can embed in your 
DOM wherever you need. That sounded like a vulgar euphemism, but it wasn't, honest.
- The source data used by the library is also exposed, should you need it.
- It let's you customize the list of countries that appears via a whitelist, blacklist.
- [A lot of options](#options) are provided, for things like styling, event callbacks and so on.
- To keep file sizes down you have the option of creating a custom build of the library containing only a list of 
those countries you want to show up. See [command line options](#command-line) for more info.


<a name="gotchas"></a>
#### Gotchas

- *Page charset*: some country names contain UTF-8 chars, so your page will need an appropriate charset to handle them. 
If you see some invalid characters appearing in the dropdown, make sure you have UTF-8 specified in your page 
<code>&lt;head&gt;</code>, like so: ```<meta charset="UTF-8">```
- *Return values*: on an onChange event `event.target.value` is returned as the first value and the full `event` as the second.


<a name="demo"></a>
### Demo

Check out the [github pages](http://country-regions.github.io/react-country-region-selector/) section for some examples + example
JSX code.


<a name="installation"></a>
### Installation

Using npm or yarn:

```javascript
npm i react-country-region-selector
yarn add react-country-region-selector
```

<a name="features"></a>
### Usage

It's very easy to use, but note that you will need to track the country and region value somewhere - either in your
component state or in a store somewhere. Here's a simple example that uses state:

```javascript
import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class Example extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}
```

Generally you don't need `CountryRegionData`, but if you should need it, the raw data is accessible like in the above example.


<a name="options"></a>
### Options

These are the attributes that can be passed to the two components. _Note: any other attributes that aren't
specified here will be added directly to the `<select>` DOM element._


```<CountryDropdown />```

| Parameter | Required? | Default | Type | Description |
|:---|:---:|:---|:---|:---|
| value | Yes | `""` | `string` | The currently selected country. This should either be the shortcode, or the full country name depending on what you're using for your value attribute (see the `valueType` option). By default it's the full country name. |
| onChange | Yes | `-` | `function` | Callback that gets called when the user selects a country. Use this to store the value in whatever store you're using (or just the parent component state). |
| onBlur | No | `-` | `function` | Callback that gets called when the user blurs off the country field. |
| name | No | `"rcrs-country"` | `string` | The name attribute of the generated select box. |
| id | No | `""` | `string` | The ID of the generated select box. Not added by default. |
| classes | No | `""` | `string` | Any additional space-separated classes you want to add. |
| showDefaultOption | No | `true` | `boolean` | Whether you want to show a default option. |
| priorityOptions | No | `array` | `[]` | Lets you target countries that should appear at the top of the dropdown. Should also be an array of country shortcodes. | 
| defaultOptionLabel | No | `"Select Country"` | `string` | The default option label. |
| labelType | No | `"full"` | `string` | Either `"full"` or `"short"`. This governs whether you see country names or country short codes in the dropdown. |
| valueType | No | `"full"` | `string` | Either `"full"` or `"short"`. This controls the actual `value` attribute of  each `<option>` in the dropdown. Please note, if you set this to `"short"` you will need to let the corresponding `<RegionDropdown />` component know as well, by passing a `countryValueType="short"` attribute. |
| whitelist | No | `[]` | `array` | This setting lets you target specific countries to appear in the dropdown. Only those specified here will appear. This should be an array of country shortcodes. See the [country-region-data](https://github.com/country-regions/country-region-data) repo for the data and the shortcodes. |
| blacklist | No | `[]` | `array` | Lets you target countries that should *not* appear in the dropdown. Should also be an array of country shortcodes. |
| disabled | No | `false` | `boolean` | Disables the country field. |

```<RegionDropdown />```

| Parameter | Required? | Default | Type | Description |
|:---|:---:|:---|:---|:---|
| country | Yes | `""` | `string` | The currently selected country. |
| value | Yes | `""` | `string` | The currently selected region. |
| onChange | Yes | - | `function` | Callback that gets called when the user selects a region. Use this to store the value in whatever store you're using (or just the parent component state). |
| onBlur | No | - | `function` | Callback that gets called when the user blurs off the region field. |
| name | No | `"rcrs-region"` | `string` | The name attribute of the generated select box. |
| id | No | `""` | `string` | The ID of the generated select box. Not added by default. |
| classes | No | `""` | `string` | Any additional space-separated classes you want to add. |
| blankOptionLabel | No | `-` | `string` | The label that appears in the region dropdown when the user hasn't selected a country yet.|
| showDefaultOption | No | `true` | `boolean` | Whether you want to show a default option. This is what the user sees in the region dropdown after selecting a country. It defaults to the `defaultOptionLabel` setting (see next). |
| defaultOptionLabel | No | `Select Region` | `string` | The default region option. |
| onChange | No | `-` | `function` | Called when the user selects a region. Use this to store the region value. |
| countryValueType | No | `full` | `string` | If you've changed the country dropdown `valueType` to `short` you will need to set this value to `short` as well, so the component knows what's being passed in the `country` property. |
| labelType | No | `"full"` | `string` | Either `"full"` or `"short"`. This governs whether you see region names or region short codes in the dropdown. |
| valueType | No | `"full"` | `string` | Either `"full"` or `"short"`. This controls the actual `value` attribute of each `<option>` in the dropdown.  |
| disableWhenEmpty | No | `false` | `boolean` | Disables the region field when the user hasn't selected a country. |
| disabled | No | `false` | `boolean` | Disables the region field. If set to true, it overrides `disableWhenEmpty` | 
| customOptions | No | `[]` | `Array<string>` | Appends a list of string to the every region dropdown, regardless of the country selected.
| whitelist | No | `{ CountryCode: [] }` | `object` | This setting lets you target specific regions to appear in the dropdown. Only those specified here will appear. This should be an array of region codes keyed by the country code. |
| blacklist | No | `{ CountryCode: [] }` | `object` | This setting lets you target specific regions that should *not* appear in the dropdown. This should be an array of region codes keyed by the country code. || disableWhenEmpty | No | `false` | `boolean` | Disables the region field when the user hasn't selected a country. |
| disabled | No | `false` | `boolean` | Disables the region field. If set to true, it overrides `disableWhenEmpty` |


<a name="command-line"></a>
### Command-line

Check out the `scripts` section of the package.json file to see them all, but these are the highlights:

- `npm start` - regenerate everything, plus a watcher for local development.
- `npm build` - build the dist files again. No watcher.
- `rollup -c --config-countries=UK,US` - generate a custom build of the script `/dist` folder containing only those
countries you specify here. This *seriously* reduces file size, so if you can do it, do it.


<a name="changelog"></a>
### Changelog
- `3.4.0` - Oct 24, 2021
    - Typings fix.
    - Upgrade country-region-data to 1.11.0.
- `3.3.0` - Aug 17, 2021
    - Upgrade country-region-data to 1.10.0.
- `3.2.0` - Jul 30, 2021
    - Upgrade country-region-data to 1.9.0.
- `3.1.0` - May 11, 2021
    - React 17 support added, thanks [madhums](https://github.com/madhums)!
- `3.0.2` - Jan 18, 2021
    - typings file fix.
- `3.0.1` - Sep 26, 2020
    - typings file fix. 
- `3.0.0` - Sep 8, 2020
	- blacklist option added for the Region component (thanks [Mitch Rickman](https://github.com/mitch-rickman)!)
	- typings fix and onBlur callback standardized with value passed as first param, with full event as second. This 
is a *breaking change*. Thanks [Vinod Ramakrishnan](https://github.com/vinod-rp)!
- `2.1.0` - Mar 28, 2020
	- country-region-data updated to 1.6.0
- `2.0.0` - Mar 21, 2020
    - Typings fixes
	- Dependency updates
- `1.4.7` - Dec 24, 2019:
    - Fix to include typings in published bundle.
- `1.4.6` - Dec 22, 2019:
    - Typescript typings added. Thanks, [Kyle Davis](https://github.com/kyledavisdev)!
    - [country region data](https://github.com/country-regions/country-region-data) updated to 1.5.1 
- `1.4.5` - Oct 9, 2019.
    - [country region data](https://github.com/country-regions/country-region-data) updated to 1.5.0
    - RegionDropdown component updates to refactor deprecated componentWillReceiveProps method
    - misc dependency updates
- `1.4.4` - Aug 2, 2019. Country data updates.
- `1.4.3` - Dev 2, 2018: 
    - RegionDropdown converted to PureComponent; now updates on any prop change
    - [country region data](https://github.com/country-regions/country-region-data) updated to 1.4.5
- `1.4.2` - Nov 8, 2018:
    - `customOptions` setting added for the Region dropdown. 
    - `priorityOptions` option added to the CountryDropdown to allow placing items at the top of the country dropdown.
- `1.4.1` - Sept 9, 2018: bug fix for invalid JSON data source conversion. 
- `1.4.0` - Sept 8, 2018:
    - *Breaking change*: the library is no longer exported in UMD format. Now it's only exported in es6 
    (`dist/rcrs.es.js`) and commonJS (`dist/rcrs.js`) format. This library is intended for use in _React_ applications.
    - *Breaking change*: no longer available via Bower. I don't recall ANY react component used via Bower, so if I'm
    mistaken here, open a github issue to explain your use-case and I can re-add it.  
    If you need UMD, check out the [plain vanilla version](https://github.com/country-regions/country-region-selector).
    - country-region-data updated to latest version (1.4.4)
    - You can now pass arbitrary attributes to the components (e.g. `style={{ color: 'red' }}` and have them output in the 
    markup)
    - the old gulp build process updated to use rollup
    - this component library, the source data set and the plain vanilla JS version are now all grouped under a single github 
organization
- `1.3.0` - Mar 20, 2018. Bug fix for invalid country, [@n-david](https://github.com/n-david)! onBlur event added.
- `1.2.3` - Nov 7, 2017. Country data updates. React moved to peer dependency, thanks [@iamdey](https://github.com/iamdey)!
- `1.2.2` - Oct 4, 2017 - Update to pass event on change. Thanks [@robertnealan](https://github.com/robertnealan)! 
- `1.2.1` - Sept 6, 2017 - IE11 bug fix.
- `1.2.0` - Aug 7, 2017 - updated country-region-data; dependency updates. 
- `1.1.0` - May 18, 2017 - dependency updates. `disabled` option added to `<CountryDropdown />` and `<RegionDropdown />`.
- `1.0.4` - April 12, 2017 - bug fix. Thanks @bebbi and @tchaffee!
- `1.0.3` - Jan 2, 2016 - updated country-region-data, repo link fix. 
- `1.0.2` - October 16, 2016 - Fix issue where source-data.js in lib had no country data.
- `1.0.0` - July 1, 2016 - initial version.


<a name="tests"></a>
### Tests

The Jest/Enzyme unit tests are found in the `src/tests` folder. The repo is hooked up to Travis CI to automatically run the tests for each commit.


<a name="localDev"></a>
### Local Dev

This is pretty dated, I'm afraid. But to run this locally, do the following:
- `npm install`
- in one terminal window: `npm start`
- in another terminal window, go to the `/example` subfolder and do the same: `npm install`, `npm start`
- open `http://localhost:3000` in your browser.


<a name="thanks"></a>
### Thanks!

Big thanks to a whole boatload of people:
- contributors to this project and the source data.
- Special thanks to the [create-react-library](https://github.com/transitive-bullshit/create-react-library) tool which 
I use here (un-ejected) to rollup this component library. Great stuff.


<a name="license"></a>
### License

MIT.
