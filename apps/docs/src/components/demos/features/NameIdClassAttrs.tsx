import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const CustomAttributes = () => {
  const [country, setCountry] = useState("Canada");
  const [region, setRegion] = useState("British Columbia");

  return (
    <>
      <CountryDropdown
        value={country}
        id="my-country-field-id"
        name="my-country-field"
        className="my-custom-class second-class"
        onChange={(val) => setCountry(val)}
      />
      <RegionDropdown
        country={country}
        value={region}
        name="my-region-field-name"
        id="my-region-field-id"
        className="another-custom-class"
        onChange={(val) => setRegion(val)}
      />
    </>
  );
};

export default CustomAttributes;
