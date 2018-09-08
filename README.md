# React-Country-Region-Selector

> *** I'm just updating this library today to release 1.4.0, group things into a single github organization, update the 
> documentation and update the github pages (demo URLs). When you don't see this message it's all fixed! ***  

A feature you often need in forms is a connected country and region dropdown, where the region field gets automatically 
updated when the user selects a country. Coding this is perfectly simple, but it's a royal pain having to track down all 
the raw country/region data. This library contains a pair of components to let you add this feature quickly and easily to your 
forms. It's the React version of [this script](https://github.com/country-regions/country-region-selector).

It's pretty versatile.

- There are two separate components (`<CountryDropdown />`, `<RegionDropdown>`) that you can embed in your 
DOM wherever you need. That sounded like a vulgar euphemism, but it wasn't, honest.
- Let's you customize the list of countries that appears via a whitelist, blacklist, or even custom build to keep file 
size down.
- Works as ES6 module, commonJS, AMD, whatever you fancy.
- [Lots of options](#options) for the most common use-cases, allowing you style is as you need (via classes/IDs),
change name attributes, add you own custom onChange handlers to do whatever you want etc.


#### Other notes

- *Page charset*: your page will need an appropriate charset to handle UTF-8 chars used in some country names. So if 
you see some invalid characters appearing in the dropdown, make sure you have UTF-8 specified in your page 
<code>&lt;head&gt;</code>, like so: ```<meta charset="UTF-8">```
- *Data source*: the list of countries and regions is maintained separately and pulled from the 
[country-region-data](https://github.com/country-regiond/country-region-data) repo. 
- *Return values*: on an onChange event `event.target.value` is returned as the first value and the full `event` as the second.

### Table of Contents 

- [Examples](#examples)  
- Installation
- Usage
- List of component options
- Command-line
- Changelog


<a name="examples"></a>
### Examples

Check out the [github pages](http://benkeen.github.io/react-country-region-selector/) section for some examples + example
JSX code.


### Installation

Ah, modern web development: so many choices! Here's how to install it with the most common build tools:

#### npm

```javascript
npm i -D react-country-region-selector 
```

#### Bower

```javascript
bower install react-country-region-selector 
```


### Usage

The generated `dist/` folder 
 

```javascript
import React from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file sizes down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class Example extends React.Component {
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

### Options


The following table outlines the properties that 

Note: *any other properties you pass onto the component will be output onto the select element in the DOM.*


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
| defaultOptionLabel | No | `"Select Country"` | `string` | The default option label. |
| labelType | No | `"full"` | `string` | Either `"full"` or `"short"`. This governs whether you see country names or country short codes in the dropdown. |
| valueType | No | `"full"` | `string` | Either `"full"` or `"short"`. This controls the actual `value` attribute of  each `<option>` in the dropdown. Please note, if you set this to `"short"` you will need to let the corresponding `<RegionDropdown />` component know as well, by passing a `countryValueType="short"` attribute. |
| whitelist | No | `[]` | `array` | This setting lets you target specific countries to appear in the dropdown. Only those specified here will appear. This should be an array of country shortcodes. See the [country-region-data](https://github.com/benkeen/country-region-data) repo for the data and the shortcodes. |
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


### Command-line

- `npm start` - regenerate everything.
- `gulp --countries="UK,US"` - generate a custom build of the script in the `/lib` and `/dist` folder containing only those
countries you specify here. This *seriously* reduces file size (60KB down to as small as 16KB), so if you can do it, do it.



### Changelog

- `1.4.0` - Sept 8, 2018 (to be released shortly):
    - *Breaking change*: the library is no longer exported in UMD format. Now only exported in es6 
    (`dist/rcrs.es.js`) and commonJS (`dist/rcrs.js`) format. This library is intended for use in _React_ applications. 
    If you need UMD, check out the []plain vanilla version](https://github.com/country-regions/country-region-selector).
    - country-region-data updated to latest version (1.4.4)
    - You can now pass arbitrary attributes to the components (e.g. `style={{ color: 'red' }}` and have them output in the 
    markup)
    - the old gulp build process updated to use rollup.
    - this component library, the source data set and the plain vanilla JS version are now all grouped under a single github 
organization.
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


### Thanks

Big thanks to the [create-react-library](https://github.com/transitive-bullshit/create-react-library) tool which I use 
here (un-ejected) to rollup this component library.


### License

MIT.
