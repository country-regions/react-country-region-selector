import { FC, useMemo } from 'react';
import CountryRegionData from './_data';
import { filterCountries, defaultRender } from './helpers';
import type {
  CountryDropdownProps,
  CountryRegionDataMinified,
  RenderDataOption,
} from './types';

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
  customRender = defaultRender,
  ...arbitraryProps
}) => {
  const countries: RenderDataOption[] = useMemo(() => {
    const countries = filterCountries(
      CountryRegionData as unknown as CountryRegionDataMinified[],
      priorityOptions,
      whitelist,
      blacklist
    );

    return countries.map(([countryName, countrySlug]) => ({
      value: valueType === 'short' ? countrySlug : countryName,
      key: countrySlug,
      label: labelType === 'short' ? countrySlug : countryName,
    }));
  }, [priorityOptions, whitelist, blacklist, valueType, labelType]);

  const defaultOption = useMemo(() => {
    if (showDefaultOption) {
      return {
        value: '',
        key: 'default',
        label: defaultOptionLabel,
      };
    }
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

  return customRender({
    ...attrs,
    options: [defaultOption, ...countries],
  });
};
