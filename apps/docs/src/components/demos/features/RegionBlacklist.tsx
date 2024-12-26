import React, { useMemo, useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const RegionBlacklist = () => {
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');
  const countryWhitelist = useMemo(() => ['CA', 'US'], []);
  const regionBlacklist = useMemo(
    () => ({
      CA: ['AB', 'BC'],
      US: ['WA', 'TX'],
    }),
    []
  );

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        whitelist={countryWhitelist}
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
        blacklist={regionBlacklist}
      />
    </>
  );
};

export default RegionBlacklist;
