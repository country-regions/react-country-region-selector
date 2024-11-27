import { FC, useMemo } from 'react';
import CountryRegionData from 'country-region-data/data.json';
import * as C from './constants';
import * as helpers from './helpers';
import type { CountryDropdownProps } from './rcrs.types';

export const CountryDropdown: FC<CountryDropdownProps> = ({
  value = '',
  name = 'rcrs-country',
  id = '',
  classes = '',
  showDefaultOption = true,
  defaultOptionLabel = 'Select Country',
  priorityOptions = [],
  onChange = () => {},
  onBlur = () => {},
  labelType = 'full',
  valueType = 'full',
  whitelist = [],
  blacklist = [],
  disabled = false,
  // ...arbitraryProps
}) => {
  //     countries: helpers.filterCountries(
  //       CountryRegionData,
  //       props.priorityOptions,
  //       props.whitelist,
  //       props.blacklist
  //     ),

  const getCountries = () => {
    // return countries.map(([countryName, countrySlug]) => (
    //   <option
    //     value={valueType === 'short' ? countrySlug : countryName}
    //     key={countrySlug}
    //   >
    //     {labelType === 'short' ? countrySlug : countryName}
    //   </option>
    // ));
  };

  const defaultOption = useMemo(() => {
    if (!showDefaultOption) {
      return null;
    }
    return (
      <option value="" key="default">
        {defaultOptionLabel}
      </option>
    );
  }, [showDefaultOption, defaultOptionLabel]);

  const attrs: any = {
    // ...arbitraryProps,
    name,
    value,
    onChange: (e) => onChange(e.target.value, e),
    onBlur: (e) => onBlur(e.target.value, e),
    disabled,
  };
  if (id) {
    attrs.id = id;
  }
  if (classes) {
    attrs.className = classes;
  }

  return (
    <select {...attrs}>
      {defaultOption}
      {getCountries()}
    </select>
  );
};
