import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const ArbitraryProps = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: 10,
          fontSize: 20,
        }}
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
        style={{
          backgroundColor: 'green',
          color: 'white',
          padding: 10,
          fontSize: 20,
        }}
      />
    </>
  );
};

export default ArbitraryProps;
