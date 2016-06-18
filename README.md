## React-Country-Region-Selector

> Incomplete! This isn't finished yet. 

### Demo

You can see it in action here: [...]

### Installation

Depending on your setup, pick one of the following. 

1. Installing via npm

```javascript
npm install react-country-region-selector --save
```

2. Use Bower

```javascript
bower install react-country-region-selector 
```

3. Alternatively, you can just use the UMD version of the file. That'll work for AMD, CommonJS or just plain old 
non-namespaced JS code. For the latter, it'll expose a `window.rsrc` object.

The scripts only dependency is React (tested with 15.0.1, but should work on earlier versions).


### Usage

Using it is really simple. Here are a few examples in a few of the more common formats JS is taking.

- AMD Example
- CommonJS Example
- ES6 with JSX Example
- ES6 Example


#### AMD Example

```javascript
define([
    'react',
    'react-country-region-selector'
], function (React, rcrs) {

    var CountryDropdown = rcrs.CountryDropdown;
    var RegionDropdown = rcrs.CountryDropdown;

});

```


#### CommonJS example


#### ES6 with JSX example

```javascript
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';


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

#### ES6 example



### Options

```<CountryDropdown />```

| Parameter | Required? | Type | Description |
|:---|:---:|:---|:---|
| value | Yes | `string` | The currently selected country. |
| onChange | Yes | `Function` | Callback that gets called when the user selects a country. |


```<RegionDropdown />```

| Parameter | Required? | Type | Description |
|:---|:---:|:---|:---|
| country | Yes | `string` | The currently selected country option value. |
| value | Yes | `string` | The currently selected region option value. |
| onChange | Yes | `Function` | Callback that gets called when the user selects a region. |


### Changelog

- `0.1.0` - Under development.


### License

MIT.
