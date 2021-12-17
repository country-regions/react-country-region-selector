const countries = require('./countries.json');
const fs = require('fs');

fs.writeFileSync(
	'./countries-formatted.json',
	JSON.stringify(
		countries
			.map(({ name: { common: countryName }, cca2: countrySlug }) => [countryName, countrySlug])
			.sort(([a], [b]) => {
				if (a < b) { return -1; }
				if (a > b) { return 1; }
				return 0;
			})
	)
);
