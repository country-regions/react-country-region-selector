import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const RegionBlacklist = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        whitelist={['CA', 'US']}
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
        blacklist={{
          CA: ['AB', 'BC'],
          US: ['WA', 'TX'],
        }}
      />
    </>
  );
};

export default RegionBlacklist;
