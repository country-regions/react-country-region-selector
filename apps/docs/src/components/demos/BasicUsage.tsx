import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const BasicUsage = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const onChangeCountry = (val) => {
    setCountry(val);
    if (!val) {
      setRegion("");
    }
  };

  return (
    <>
      <CountryDropdown value={country} onChange={onChangeCountry} />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
      />
    </>
  );
};

export default BasicUsage;
