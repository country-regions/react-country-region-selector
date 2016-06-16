## React-Country-Region-Selector


### Changelog

- `0.1.0` - Under development.


### Installation

```
npm install react-country-region-selector --save
```

### Usage

It's really simple. 


#### ES6 example

```javascript
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

class Basic extends React.Component {
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

#### ES6 example



### License

MIT.
