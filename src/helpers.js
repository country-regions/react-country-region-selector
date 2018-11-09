// reduces the subset of countries depending on whether the user specified a white/blacklist, and lists priority
// countries first
export const filterCountries = (countries, priorityCountries, whitelist, blacklist) => {
	let countriesListedFirst = [];
	let filteredCountries = countries;

	if (whitelist.length > 0) {
		filteredCountries = countries.filter(([, countrySlug]) => whitelist.indexOf(countrySlug) > -1);
	} else if (blacklist.length > 0) {
		filteredCountries = countries.filter(([, countrySlug]) => blacklist.indexOf(countrySlug) === -1);
	}

	if (priorityCountries.length > 0) {

		// ensure the countries are added in the order in which they are specified by the user
		priorityCountries.forEach((slug) => {
			const result = filteredCountries.find(([, countrySlug]) => countrySlug === slug);
			if (result) {
				countriesListedFirst.push(result);
			}
		});

		filteredCountries = filteredCountries.filter(([, countrySlug]) => priorityCountries.indexOf(countrySlug) === -1);
	}

	return countriesListedFirst.length ? [...countriesListedFirst, ...filteredCountries] : filteredCountries;
};
