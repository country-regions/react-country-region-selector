import React, { useMemo, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const RegionWhitelist = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const countryWhitelist = useMemo(() => ["CA", "US"], []);
  const regionWhitelist = useMemo(
    () => ({
      CA: ["AB", "BC"],
      US: ["WA", "TX"],
    }),
    [],
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
        whitelist={regionWhitelist}
      />
    </>
  );
};

export default RegionWhitelist;
