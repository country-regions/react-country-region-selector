import { useState } from 'react';
import { CountrySelector, Provider, RegionSelector } from '@rcrs/rcrs';
import { allCountries } from "country-region-data";
import React from 'react';

export const Intro = () => {
	const [country, setCountry] = useState("");
	const [region, setRegion] = useState("");

	return (
		<div>
			<h1>Example usage</h1>

			<p>
				Intro doc here. The idea is to split out all the many possible demos, configurations and scenarios
				for this component all as separate stories listed on the left. This first page will contain a
				typical usage scenario using <code>allCountries</code> imported from country-region-data.
			</p>

			<Provider value={{ countries: allCountries }}>
				<CountrySelector value={country} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountry(e.target.value)} />
				<RegionSelector country={country} value={region} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRegion(e.target.value)}/>
			</Provider>
		</div>
	);
};

export default Intro;
