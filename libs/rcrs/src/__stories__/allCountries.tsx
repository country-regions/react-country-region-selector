import React, { useState } from 'react';
import { CountrySelector, Provider, RegionSelector } from '@rcrs/rcrs';
import { allCountries } from 'country-region-data';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const AllCountries = () => {
	const [country, setCountry] = useState("");
	const [region, setRegion] = useState("");

	return (
		<div>
			<h1>All Countries</h1>

			<p>
				The country-region-data package provides a named export called <code>allCountries</code> that
				contains all country data. While this is a very useful option, do be careful about bundle sizes.
				All of the strings for the country and region names are quite large.
			</p>

			<h3>Demo</h3>
			<Provider value={{ countries: allCountries }}>
				<CountrySelector value={country} onChange={(val) => setCountry(val)} />
				<RegionSelector country={country} value={region} onChange={(val) => setRegion(val)}/>
			</Provider>

			<h3>Code</h3>
			<SyntaxHighlighter language="typescript" style={atomOneDark}>{`import React, { useState } from 'react';
import { CountrySelector, Provider, RegionSelector } from 'react-country-region-data';
import { allCountries } from "country-region-data";

const Example = () => {
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    return (
        <Provider value={{ countries: allCountries }}>
            <CountrySelector value={country} onChange={(val) => setCountry(val)} />
            <RegionSelector country={country} value={region} onChange={(val) => setRegion(val)}/>
        </Provider>
    );
};`}</SyntaxHighlighter>
		</div>
	);
};

export default AllCountries;
