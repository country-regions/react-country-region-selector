/**
 * This script is called on bootstrap to generate a minified version of the source data from
 * country-region-data:
 * https://github.com/country-regions/country-region-data
 *
 * Example: `npm run minify-data -- --config-countries=GB,CA,US
 */
const argv = require('minimist');
const args = argv(process.argv.slice(2));
const fs = require('fs');
const path = require('path');

let countryRegions = require('country-region-data/data.json');

let countries = [];
if (args.hasOwnProperty('config-countries')) {
  countries = args['config-countries'].split(',');
}

// filter out those countries that the user wants
if (countries.length > 0) {
  countryRegions = countryRegions.filter(
    (countryData) => countries.indexOf(countryData.countryShortCode) !== -1
  );
}

const srcFolder = path.resolve(__dirname, '../src');

const data = JSON.stringify(countryRegions, undefined, '  ');
const tsData = `
import { CountryRegionDataMinified } from './types';

const data = ${data};

export default data;
`;
fs.writeFileSync(`${srcFolder}/_data.ts`, tsData);
