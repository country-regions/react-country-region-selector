import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const ShortcodeLabels = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        labelType="short"
      />
      <RegionDropdown
        country={country}
        value={region}
        labelType="short"
        onChange={(val) => setRegion(val)}
      />
    </>
  );
};

export default ShortcodeLabels;
