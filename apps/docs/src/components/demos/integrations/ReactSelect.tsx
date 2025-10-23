import React, { useState } from "react";
import Select from "react-select";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";

const customRender = (props) => {
  const {
    options,
    value,
    disabled,
    onChange,
    onBlur,
    customProps,
    ...selectProps
  } = props;

  return (
    <Select
      {...selectProps}
      options={options}
      isDisabled={disabled}
      isSearchable={true}
      isClearable={true}
      value={customProps.reactSelectValue}
      onChange={customProps.onChange}
    />
  );
};

type ReactSelectOption = {
  label: string;
  value: string;
};

const ReactSelect = () => {
  const [country, setCountry] = useState<ReactSelectOption | undefined>();
  const [region, setRegion] = useState<ReactSelectOption | undefined>();

  return (
    <>
      <div style={{ width: 200, display: "inline-block", marginRight: 8 }}>
        <CountryDropdown
          value={country?.value || ""}
          className="country"
          name="country-field"
          customRender={customRender}
          customProps={{
            reactSelectValue: country,
            classNamePrefix: "country-",
            onChange: (value: ReactSelectOption) => {
              setCountry(value ? value : undefined);
              setRegion(null);
            },
          }}
        />
      </div>
      <div style={{ width: 200, display: "inline-block" }}>
        <RegionDropdown
          country={country?.value || ""}
          value={region?.value || null}
          className="region"
          name="region-field"
          customRender={customRender}
          customProps={{
            reactSelectValue: region,
            classNamePrefix: "region-",
            onChange: (value: ReactSelectOption) => {
              setRegion(value ? value : undefined);
            },
          }}
        />
      </div>
    </>
  );
};

export default ReactSelect;
