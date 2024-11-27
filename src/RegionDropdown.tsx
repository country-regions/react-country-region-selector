import { FC, useMemo } from 'react';
import CountryRegionData from 'country-region-data/data.json';
import { filterRegions } from './helpers';
import * as C from './constants';
import type { RegionDropdownProps } from './rcrs.types';

export const RegionDropdown: FC<RegionDropdownProps> = ({
  onChange,
  country = '',
  value = '',
  onBlur = () => null,
  id = '',
  name = 'rcrs-region',
  classes = '',
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
  // ...arbitraryProps
}) => {
  const regions = useMemo(() => {
    if (!country) {
      return [];
    }

    const searchIndex = countryValueType === 'full' ? 0 : 1;
    let regionArray = [];
    CountryRegionData.forEach((i) => {
      if (i[searchIndex] === country) {
        regionArray = i;
      }
    });

    // this could happen if the user is managing the state of the region/country themselves and screws up passing
    // in a valid country
    if (!regions || regions.length === 0) {
      console.error(
        'Error. Unknown country passed: ' +
          country +
          '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown'
      );
      return [];
    }
    const filteredRegions = filterRegions(regions, whitelist, blacklist);

    return filteredRegions[2]
      .split(C.REGION_LIST_DELIMITER)
      .map((regionPair) => {
        let [regionName, regionShortCode = null] = regionPair.split(
          C.SINGLE_REGION_DELIMITER
        );

        const label = labelType === 'full' ? regionName : regionShortCode;
        const value = valueType === 'full' ? regionName : regionShortCode;

        return (
          <option value={value} key={regionName}>
            {label}
          </option>
        );
      });
  }, [country, countryValueType, whitelist, blacklist]);

  // useEffect(() => {

  // }, []);

  // componentDidUpdate(prevProps) {
  //   const { country } = this.props;
  //   if (country === prevProps.country) {
  //     return;
  //   }

  //   const defaultRegions = this.getRegions(country);

  //   this.setState({
  //     regions: [...defaultRegions, ...this.getCustomOptions(defaultRegions)],
  //   });
  // }

  // const getCustomOptions = (regions) => {
  //   const { customOptions } = this.props;

  //   const duplicateRegions = this.getDuplicates(regions);

  //   if (duplicateRegions.length) {
  //     console.error(
  //       'Error: Duplicate regions present: ' +
  //         duplicateRegions.toString() +
  //         '.\nThe above item(s) is/are already getting added to the region dropdown by the library.'
  //     );
  //     return [];
  //   }

  //   return customOptions.map((option) => {
  //     if (option) {
  //       return { regionName: option, regionShortCode: option };
  //     }
  //   });
  // };

  // getDuplicates(regions) {
  //   const { customOptions, valueType } = this.props;
  //   const regionKey =
  //     valueType === 'full' ? 'regionName' : 'regionShortCode';

  //   return regions
  //     .filter((region) => customOptions.indexOf(region[regionKey]) !== -1)
  //     .map((region) => region[regionKey]);
  // }

  // there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
  // a "default" option which shows
  const getDefaultOption = () => {
    if (!country) {
      return <option value="">{blankOptionLabel}</option>;
    }
    if (showDefaultOption) {
      return <option value="">{defaultOptionLabel}</option>;
    }
    return null;
  };

  const isDisabled = disabled || (disableWhenEmpty && country === '');
  const attrs: any = {
    ...arbitraryProps,
    name,
    value,
    onChange: (e) => onChange(e.target.value, e),
    onBlur: (e) => onBlur(e.target.value, e),
    disabled: isDisabled,
  };
  if (id) {
    attrs.id = id;
  }
  if (classes) {
    attrs.className = classes;
  }

  return (
    <select {...attrs}>
      {getDefaultOption()}
      {regions}
    </select>
  );
};
