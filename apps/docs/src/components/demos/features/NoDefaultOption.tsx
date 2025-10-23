import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const NoDefaultOption = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        showDefaultOption={false}
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
        showDefaultOption={false}
      />
    </>
  );
};

export default NoDefaultOption;
