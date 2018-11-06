// reduces the subset of countries depending on whether the user specified a white/blacklist
export const filterCountries = (countries, priorityCountries, whitelist, blacklist) => {
	let filteredCountries = countries;

	if (whitelist.length > 0) {
		filteredCountries = countries.filter(([, countrySlug]) => whitelist.indexOf(countrySlug) > -1);
	} else if (blacklist.length > 0) {
		filteredCountries = countries.filter(([, countrySlug]) => blacklist.indexOf(countrySlug) === -1);
	}

	return filteredCountries;
};
