
// reduces the subset of countries depending on whether the user specified a white/blacklist
export const filterCountries = (countries, whitelist, blacklist) => {
    let filteredCountries = countries;

    // N.B. I'd rather use ES6 array.includes() but it requires a polyfill on various browsers. Bit surprising that
    // babel doesn't automatically convert it to ES5-friendly code, like the new syntax additions, but that requires
    // a separate polyfill which is a total kludge
    if (whitelist.length > 0) {
        filteredCountries = countries.filter(([, countrySlug]) => whitelist.indexOf(countrySlug) > -1);
    } else if (blacklist.length > 0) {
        filteredCountries = countries.filter(([, countrySlug]) => blacklist.indexOf(countrySlug) === -1);
    }

    return filteredCountries;
};

