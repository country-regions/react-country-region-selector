import {
  RenderData,
  CountryRegionDataMinified,
  RegionsWhiteList,
  RegionsBlackList,
  RenderDataOption,
  CountryRegionJson,
} from './types';

/**
 * Helper to reduce country list depending on whether the user specified a white/blacklist, and lists priority
 * countries first.
 */
export const filterCountries = (
  countries: CountryRegionDataMinified[],
  priorityCountries: string[],
  whitelist: string[],
  blacklist: string[]
) => {
  let countriesListedFirst: CountryRegionDataMinified[] = [];
  let filteredCountries = countries;

  if (whitelist.length > 0) {
    filteredCountries = countries.filter(
      ([, countrySlug]) => whitelist.indexOf(countrySlug) > -1
    );
  } else if (blacklist.length > 0) {
    filteredCountries = countries.filter(
      ([, countrySlug]) => blacklist.indexOf(countrySlug) === -1
    );
  }

  if (priorityCountries.length > 0) {
    // ensure the countries are added in the order in which they are specified by the user
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
  let filteredRegions = regionsMinified.split('|');

  if (whitelist.length > 0 && filteredRegions.length > 0) {
    filteredRegions = filteredRegions.filter((region) =>
      whitelist.some((row) => region.indexOf(row) > -1)
    );
  } else if (blacklist.length > 0 && filteredRegions.length > 0) {
    filteredRegions = filteredRegions.filter((region) =>
      blacklist.some((row) => region.indexOf(row) > -1)
    );
  }

  return [country, countryCode, filteredRegions.join('|')];
};

export const findDuplicates = (
  regions: RenderDataOption[],
  customOptions: string[]
) => {
  return regions
    .filter(({ value }) => customOptions.indexOf(value) !== -1)
    .map(({ label }) => label);
};

export const defaultRender = (data: RenderData) => {
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
