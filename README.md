## React-Country-Region-Selector


### Changelog

- `0.1.0` - Under development.


### Installation

Installing it via npm is the simplest way:

```
npm install react-country-region-selector --save
```

Alternatively, you can just use the UMD version of the file. That'll work for AMD, CommonJS or just plain old `<script>`



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

    var CountryDropdown = rcrs.

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


### License

MIT.
