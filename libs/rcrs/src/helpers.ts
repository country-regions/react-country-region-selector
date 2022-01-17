// @ts-nocheck
import React from 'react';
import { CountryData, CountrySlug, Region, RegionName } from 'country-region-data';

export const enum ValueType {
	full = 'full',
	short = 'short'
}

export type CountryMap = {
	[countrySlug: CountrySlug]: Region[];
}

export type CustomCountryName = string;
export type CustomCountrySlug= string;

export type CustomCountryData = [
	CustomCountryName,
	CustomCountrySlug,
	Region[]
];

export type CustomShortCountryData = [
	CustomCountryName,
	RegionName[]
];

export interface RCRSContextInterface {
	countries: CountryData[] | ShortCountryData[];
	whitelist?: CountryMap;
	blacklist?: CountryMap;
}

export const RCRSContext = React.createContext<RCRSContextInterface>({
	countries: [],
	whitelist: {},
	blacklist: {}
});

// reduces the subset of countries depending on whether the user specified a white/blacklist, and lists priority
// countries first
export const getCountries = (countries, priorityCountries, whitelist, blacklist) => {
	let countriesListedFirst = [];
	let filteredCountries = countries;

	// if the user provided a short format for the country data, it's been manually provided: no whitelist/blacklist'
	// should be applied
	if (countries.length && countries[0].length > 2) {
		if (whitelist.length > 0) {
			filteredCountries = countries.filter(([, countrySlug]) => whitelist.indexOf(countrySlug) > -1);
		} else if (blacklist.length > 0) {
			filteredCountries = countries.filter(([, countrySlug]) => blacklist.indexOf(countrySlug) === -1);
		}
	}

	// ensure the countries are added in the order in which they are specified by the user
	if (priorityCountries.length > 0) {
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

// called when requesting new regions. It reduces the subset of regions depending on whether the user specifies
// a white/blacklist
export const filterRegions = (regionsObject, whitelistObject, blacklistObject) => {
	const [country, countryCode, regions] = regionsObject;
	const whitelist = whitelistObject.hasOwnProperty(countryCode) ? whitelistObject[countryCode] : [];
	const blacklist = blacklistObject.hasOwnProperty(countryCode) ? blacklistObject[countryCode] : [];
	let filteredRegions = regions.split('|');

	if (whitelist.length > 0 && filteredRegions.length > 0) {
		filteredRegions = filteredRegions.filter((region) => {
			for (let i = 0, n = whitelist.length; i < n; i++) {
				if (region.indexOf(whitelist[i]) > -1) {
					return true;
				}
			}
			return false;
		});
	} else if (blacklist.length > 0 && filteredRegions.length > 0) {
		filteredRegions = filteredRegions.filter((region) => {
			for (let i = 0, n = blacklist.length; i < n; i++) {
				if (region.indexOf(blacklist[i]) > -1) {
					return false;
				}
			}

			return true;
		});
	}

	return [
		country,
		countryCode,
		filteredRegions.join('|')
	];
};
