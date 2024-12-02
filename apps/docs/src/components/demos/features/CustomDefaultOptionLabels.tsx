import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const CustomDefaultOptionLabels = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        defaultOptionLabel="Go ahead, select a country!"
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
        blankOptionLabel="No country selected..."
        defaultOptionLabel="Now select a region, pal"
      />
    </>
  );
};

export default CustomDefaultOptionLabels;
