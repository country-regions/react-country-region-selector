import * as React from 'react';
import {
  Select,
  useId,
  FluentProvider,
  webLightTheme,
} from '@fluentui/react-components';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

const customRender = ({ options, ...selectProps }) => {
  return (
    <Select {...selectProps}>
      {options.map(({ label, value, key }) => (
        <option value={value} key={key}>
          {label}
        </option>
      ))}
    </Select>
  );
};

const FluentUISelect = () => {
  const [country, setCountry] = React.useState('');
  const [region, setRegion] = React.useState('');
  const countrySelectId = useId();
  const regionSelectId = useId();

  return (
    <FluentProvider theme={webLightTheme}>
      <label htmlFor={countrySelectId}>Country</label>
      <CountryDropdown
        value={country}
        id={countrySelectId}
        onChange={(val) => {
          setCountry(val);
          setRegion('');
        }}
        customRender={customRender}
      />
      <label htmlFor={regionSelectId}>Region</label>
      <RegionDropdown
        country={country}
        value={region}
        id={regionSelectId}
        onChange={(val) => setRegion(val)}
        disableWhenEmpty={true}
        customRender={customRender}
      />
    </FluentProvider>
  );
};

export default FluentUISelect;
