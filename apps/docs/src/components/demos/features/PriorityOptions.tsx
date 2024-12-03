import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const PriorityOptions = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        priorityOptions={['CA', 'US', 'GB']}
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
      />
    </>
  );
};

export default PriorityOptions;
