import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const BasicUsage = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
      />
    </>
  );
};

export default BasicUsage;
