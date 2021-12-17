const countries = require('./countries.json');
const fs = require('fs');

fs.writeFileSync(
	'./countries-formatted.json',
	JSON.stringify(countries.map(({ name: { common: countryName }, cca2: countrySlug }) => [countryName, countrySlug]))
);
