import React, { useMemo, useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const PriorityOptions = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const priorityOptions = useMemo(() => ['CA', 'US', 'GB'], []);

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        priorityOptions={priorityOptions}
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
