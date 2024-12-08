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
      value={reactSelectValue}
      onChange={(data: any) => {
        onChange({ target: { value: data } }, null);
      }}
    />
  );
};

const ReactSelect = () => {
  const [country, setCountry] = useState<{ value: '' }>();
  const [region, setRegion] = useState();

  return (
    <>
      <div style={{ width: 200, display: 'inline-block', marginRight: 8 }}>
        <CountryDropdown
          value={country?.value || ''}
          className="country"
          name="country-field"
          onChange={(val) => {
            setCountry(val ? val : undefined);
            setRegion(null);
          }}
          customRender={customRender}
          customProps={{
            reactSelectValue: country,
            classNamePrefix: 'country-',
          }}
        />
      </div>
      <div style={{ width: 200, display: 'inline-block' }}>
        <RegionDropdown
          country={country?.value || ''}
          value={region?.value || null}
          className="region"
          name="region-field"
          onChange={(val) => {
            setRegion(val);
          }}
          customRender={customRender}
          customProps={{
            reactSelectValue: region,
            classNamePrefix: 'region-',
          }}
        />
      </div>
    </>
  );
};

export default ReactSelect;
