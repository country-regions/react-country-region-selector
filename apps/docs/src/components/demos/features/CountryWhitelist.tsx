import React, { useMemo, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const CountryWhitelist = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const whitelist = useMemo(() => ["GB", "US", "CA"], []);

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        whitelist={whitelist}
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
      />
    </>
  );
};

export default CountryWhitelist;
