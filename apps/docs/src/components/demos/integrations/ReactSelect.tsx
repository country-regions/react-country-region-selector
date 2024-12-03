import React, { useState } from 'react';
import Select from 'react-select';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const customRender = (props) => {
  const {
    options,
    value,
    disabled,
    onChange,
    reactSelectValue,
    onBlur,
    ...selectProps
  } = props;

  return (
    <Select
      {...selectProps}
      options={options}
      isDisabled={disabled}
      isSearchable={true}
      isClearable={true}
      value={reactSelectValue}
      onChange={(data: any) => {
        onChange({ target: { value: data } }, null);
      }}
    />
  );
};

const ReactSelect = () => {
  const [country, setCountry] = useState();
  const [region, setRegion] = useState();

  return (
    <>
      <div style={{ width: 200, display: 'inline-block', marginRight: 8 }}>
        <CountryDropdown
          value={country?.value || ''}
          reactSelectValue={country}
          className="country"
          name="country-field"
          classNamePrefix="country-"
          onChange={(val) => {
            setCountry(val ? val : undefined);
            setRegion(null);
          }}
          customRender={customRender}
        />
      </div>
      <div style={{ width: 200, display: 'inline-block' }}>
        <RegionDropdown
          country={country?.value || ''}
          value={region?.value || null}
          reactSelectValue={region}
          className="region"
          name="region-field"
          classNamePrefix="region-"
          onChange={(val) => {
            console.log('... ', val);
            setRegion(val);
          }}
          customRender={customRender}
        />
      </div>
    </>
  );
};

export default ReactSelect;
