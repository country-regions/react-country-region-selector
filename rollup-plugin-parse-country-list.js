/**
 * The data for this package is pulled from country-region-data:
 * https://github.com/country-regions/country-region-data
 *
 * The full country-region data is quite large. For some use-cases, you don't need the full data set. This plugin
 * is used with the rollup build to generate a package with a smaller subset of data. See here for more info:
 * https://github.com/country-regions/react-country-region-selector?tab=readme-ov-file#command-line
 */
module.exports = (options = {}) => {
  const convertFormat = (countries) => {
    return countries.map((countryData) => [
      countryData.countryName,
      countryData.countryShortCode,
      countryData.regions
        .map((regionData) => `${regionData.name}~${regionData.shortCode}`)
        .join('|'),
    ]);
  };

  return {
    name: 'ParseCountryList',
    transform: (source, id) => {
      if (!/country-region-data\/data\.json$/.test(id)) {
        return;
      }

      let json = JSON.parse(source);

      // filter out those countries that the user wants
      if (options.countries.length > 0) {
        json = json.filter(
          (countryData) =>
            options.countries.indexOf(countryData.countryShortCode) !== -1
        );
      }

      // and return the converted data structure for bundling with the script
      return {
        code: JSON.stringify(convertFormat(json)),
        map: { mappings: '' },
      };
    },
  };
};
