import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const CustomOptions = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
        customOptions={[
          'Custom option 1',
          'Custom option 2',
          'Custom option 3',
        ]}
      />
    </>
  );
};

export default CustomOptions;
