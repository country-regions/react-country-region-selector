import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const Example1 = () => {
  const [codeVisible, setCodeVisible] = useState(false);
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <p>
        <span className="counter">1.</span> Simple, no-frills example.
      </p>

      <div>
        <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
      </div>
    </>
  );
};

export default Example1;
