import {
  RenderData,
  CountryRegionDataMinified,
  RegionsWhiteList,
  RegionsBlackList,
  RenderDataOption,
  ValueType,
} from './types';
import { REGION_LIST_DELIMITER, SINGLE_REGION_DELIMITER } from './constants';

/**
 * Helper to reduce country list depending on whether the user specified a white/blacklist, and lists priority
 * countries first.
 */
export const filterAndSortCountries = (
  countries: CountryRegionDataMinified[],
  priorityCountries: string[],
  whitelist: string[],
  blacklist: string[],
  labelType: ValueType
) => {
  let countriesListedFirst: CountryRegionDataMinified[] = [];
  let filteredCountries = [...countries];

  if (whitelist.length > 0) {
    filteredCountries = countries.filter(
      ([, countrySlug]) => whitelist.indexOf(countrySlug) > -1
    );
  } else if (blacklist.length > 0) {
    filteredCountries = countries.filter(
      ([, countrySlug]) => blacklist.indexOf(countrySlug) === -1
    );
  }

  // sort all the countries by whatever is being used as the visible label. The priority countries get prepended next
  filteredCountries = sortMinifiedDataByLabel(filteredCountries, labelType);

  if (priorityCountries.length > 0) {
    priorityCountries.forEach((slug) => {
      const result = filteredCountries.find(
        ([, countrySlug]) => countrySlug === slug
      );
      if (result) {
        countriesListedFirst.push(result);
      }
    });

    filteredCountries = filteredCountries.filter(
      ([, countrySlug]) => priorityCountries.indexOf(countrySlug) === -1
    );
  }

  return countriesListedFirst.length
    ? [...countriesListedFirst, ...filteredCountries]
    : filteredCountries;
};

// called when requesting new regions. It reduces the subset of regions depending on whether the user specifies
// a white/blacklist
export const filterRegions = (
  selectedCountryData: CountryRegionDataMinified,
  whitelistData: RegionsWhiteList,
  blacklistData: RegionsBlackList
) => {
  const [country, countryCode, regionsMinified] = selectedCountryData;
  const whitelist = whitelistData[countryCode] || [];
  const blacklist = blacklistData[countryCode] || [];
  let filteredRegions = regionsMinified.split(REGION_LIST_DELIMITER);

  if (whitelist.length > 0 && filteredRegions.length > 0) {
    filteredRegions = filteredRegions.filter((regionLine) =>
      whitelist.some(
        (wlRegionCode) =>
          regionLine.indexOf(`${SINGLE_REGION_DELIMITER}${wlRegionCode}`) > -1
      )
    );
  } else if (blacklist.length > 0 && filteredRegions.length > 0) {
    filteredRegions = filteredRegions.filter((regionLine) =>
      blacklist.every(
        (blRegionCode) =>
          !regionLine.includes(`${SINGLE_REGION_DELIMITER}${blRegionCode}`)
      )
    );
  }

  return [country, countryCode, filteredRegions.join(REGION_LIST_DELIMITER)];
};

export const findDuplicates = (
  regions: RenderDataOption[],
  customOptions: string[]
) => {
  return regions
    .filter(({ value }) => customOptions.indexOf(value) !== -1)
    .map(({ label }) => label);
};

export const defaultRender = (data: RenderData): JSX.Element => {
  const { options, ...rest } = data;
  return (
    <select {...rest}>
      {options
        .filter((row) => row)
        .map(({ label, value, key }) => (
          <option value={value} key={key}>
            {label}
          </option>
        ))}
    </select>
  );
};

export const sortMinifiedDataByLabel = (
  arr: CountryRegionDataMinified[],
  labelType: ValueType
) => {
  const sortIndex = labelType === 'full' ? 0 : 1;

  // we use `localeCompare` to handle UTF-8 chars
  return arr.sort((a, b) => a[sortIndex].localeCompare(b[sortIndex]));
};

export const sortObjByLabel = (arr: RenderDataOption[]) =>
  arr.sort((a, b) => a.label.localeCompare(b.label));
