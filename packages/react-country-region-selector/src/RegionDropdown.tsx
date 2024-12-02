import { FC, useMemo } from 'react';
import CountryRegionData from '../node_modules/country-region-data/data.json';
import { defaultRender, filterRegions, findDuplicates } from './helpers';
import * as C from './constants';
import type { RegionDropdownProps, RenderDataOption } from './rcrs.types';

export const RegionDropdown: FC<RegionDropdownProps> = ({
  onChange,
  value,
  country = '',
  onBlur = () => null,
  id = '',
  name = 'rcrs-region',
  className = '',
  disabled = false,
  blankOptionLabel = '-',
  showDefaultOption = true,
  defaultOptionLabel = 'Select Region',
  labelType = 'full',
  valueType = 'full',
  countryValueType = 'full',
  disableWhenEmpty = false,
  customOptions = [],
  whitelist = {},
  blacklist = {},
  customRender = defaultRender,
  ...arbitraryProps
}) => {
  const regions: RenderDataOption[] = useMemo(() => {
    if (!country) {
      return [];
    }

    const searchIndex = countryValueType === 'full' ? 0 : 1;
    let regionArray: any = [];
    CountryRegionData.forEach((i) => {
      if (i[searchIndex] === country) {
        regionArray = i;
      }
    });

    // this could happen if the user is managing the state of the region/country themselves and screws up passing
    // in a valid country
    if (!regionArray || regionArray.length === 0) {
      console.error(
        'Error. Unknown country passed: ' +
          country +
          '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown'
      );
      return [];
    }
    const filteredRegions = filterRegions(regionArray, whitelist, blacklist);
    if (!filteredRegions.length) {
      return [];
    }

    return filteredRegions[2]
      .split(C.REGION_LIST_DELIMITER)
      .map((regionPair: string) => {
        let [regionName, regionShortCode = null] = regionPair.split(
          C.SINGLE_REGION_DELIMITER
        );
        const label = labelType === 'full' ? regionName : regionShortCode;
        const value = valueType === 'full' ? regionName : regionShortCode;
        return { label, value, key: value };
      });
  }, [country, countryValueType, whitelist, blacklist]);

  const customRegions: RenderDataOption[] = useMemo(() => {
    if (!country) {
      return [];
    }

    const duplicateRegions = findDuplicates(regions, customOptions);
    if (duplicateRegions.length) {
      console.error(
        'Error: Duplicate regions present: ' +
          duplicateRegions.toString() +
          '.\nThe above item(s) is/are already getting added to the region dropdown by the library.'
      );
      return [];
    }

    return customOptions.map((option) => {
      if (option) {
        return { value: option, key: option, label: option };
      }
    });
  }, [regions, country, customOptions]);

  // there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
  // a "default" option which shows
  const defaultOption: RenderDataOption | undefined = useMemo(() => {
    if (!country) {
      return {
        value: '',
        key: 'default',
        label: blankOptionLabel,
      };
    }
    if (showDefaultOption) {
      return {
        value: '',
        key: 'default',
        label: defaultOptionLabel,
      };
    }
  }, [country, blankOptionLabel, defaultOptionLabel]);

  const isDisabled = disabled || (disableWhenEmpty && country === '');
  const attrs: any = {
    ...arbitraryProps,
    name,
    value,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) =>
      onChange(e.target.value, e),
    onBlur: (e: any) => onBlur(e),
    disabled: isDisabled,
  };
  if (id) {
    attrs.id = id;
  }
  if (className) {
    attrs.className = className;
  }

  return customRender({
    ...attrs,
    options: [defaultOption, ...regions, ...customRegions],
  });
};
