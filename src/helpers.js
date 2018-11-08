// reduces the subset of countries depending on whether the user specified a white/blacklist
export const filterCountries = (countries, priorityCountries, whitelist, blacklist) => {
	let countriesListedFirst = [];
	let filteredCountries = countries;

	if (whitelist.length > 0) {
		filteredCountries = countries.filter(([, countrySlug]) => whitelist.indexOf(countrySlug) > -1);
	} else if (blacklist.length > 0) {
		filteredCountries = countries.filter(([, countrySlug]) => blacklist.indexOf(countrySlug) === -1);
	}

	if (priorityCountries.length > 0) {
		countriesListedFirst = priorityCountries.filter(([, countrySlug]) => priorityCountries.indexOf(countrySlug) !== -1);
		filteredCountries = filteredCountries.filter(([, countrySlug]) => priorityCountries.indexOf(countrySlug) === -1);
	}

	return countriesListedFirst.length ? [...countriesListedFirst, ...filteredCountries] : filteredCountries;
};