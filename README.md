# react-country-region-selector

> Warning! I'm actively working on 4.0.0 so the master branch will be a little broken until it's ready. Stay tuned.

### About

This library provides a pair of React components to display _connected_ country and region dropdowns (pick a country, it shows the relevant regions). If you're not using React, check out the [plain vanilla JS version](https://github.com/country-regions/country-region-selector) instead. The list of countries and regions is maintained separately and found in the [country-region-data](https://github.com/country-regions/country-region-data) repo.

Check out the [github pages](http://country-regions.github.io/react-country-region-selector/) section for some examples + example
JSX code.

<a name="features"></a>

### Usage

It's very easy to use, but note that you will need to track the country and region value somewhere - either in your
component state or in a store somewhere. Here's a simple example that uses state:

```javascript
import React, { useState } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to
// keep file size down
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from 'react-country-region-selector';

const Example = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <div>
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
      />
    </div>
  );
};
```

<a name="changelog"></a>

### Changelog

- [See CHANGELOG.md](./CHANGELOG.md)

<a name="license"></a>

### License

MIT.
