import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const ShortcodeValues = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        valueType="short"
      />
      <RegionDropdown
        country={country}
        value={region}
        countryValueType="short"
        valueType="short"
        onChange={(val) => setRegion(val)}
      />
    </>
  );
};

export default ShortcodeValues;
