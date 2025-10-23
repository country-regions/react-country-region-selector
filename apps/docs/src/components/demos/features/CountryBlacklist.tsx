import React, { useMemo, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const CountryBlacklist = () => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const blacklist = useMemo(
    () => [
      "AF",
      "AX",
      "AL",
      "DZ",
      "AS",
      "AD",
      "AO",
      "AI",
      "AQ",
      "AG",
      "AR",
      "AM",
      "AW",
      "AU",
      "AT",
      "AZ",
    ],
    [],
  );

  return (
    <>
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        blacklist={blacklist}
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={(val) => setRegion(val)}
      />
    </>
  );
};

export default CountryBlacklist;
