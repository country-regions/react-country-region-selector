import { FC, useMemo } from 'react';
import CountryRegionData from 'country-region-data/data.json';
import { filterCountries } from './helpers';
import type { CountryDropdownProps } from './rcrs.types';

export const CountryDropdown: FC<CountryDropdownProps> = ({
  value = '',
  name = 'rcrs-country',
  id = '',
  className = '',
  showDefaultOption = true,
  defaultOptionLabel = 'Select Country',
  priorityOptions = [],
  onChange = (value: string, e: any) => null,
  onBlur = () => null,
  labelType = 'full',
  valueType = 'full',
  whitelist = [],
  blacklist = [],
  disabled = false,
  ...arbitraryProps
}) => {
  const countries = useMemo(() => {
    const countries = filterCountries(
      CountryRegionData,
      priorityOptions,
      whitelist,
      blacklist
    );

    return countries.map(([countryName, countrySlug]) => (
      <option
        value={valueType === 'short' ? countrySlug : countryName}
        key={countrySlug}
      >
        {labelType === 'short' ? countrySlug : countryName}
      </option>
    ));
  }, [priorityOptions, whitelist, blacklist, valueType, labelType]);

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
    ...arbitraryProps,
    name,
    value,
    onChange: (e: any) => onChange(e.target.value, e),
    onBlur: (e: any) => onBlur(e),
    disabled,
  };
  if (id) {
    attrs.id = id;
  }
  if (className) {
    attrs.className = className;
  }

  return (
    <select {...attrs}>
      {defaultOption}
      {countries}
    </select>
  );
};
