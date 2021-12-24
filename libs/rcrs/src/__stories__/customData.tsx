import React, { useState } from 'react';
import { CountrySelector, Provider, RegionSelector } from '@rcrs/rcrs';
// import { CountryData } from 'country-region-data';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export const AllCountries = () => {
	const [country, setCountry] = useState("");
	const [region, setRegion] = useState("");

	const customData: any = [
		["Country 1", "C1", [["Region 1", "RE1"], ["Region 2", "RE2"]]],
		["Country 2", "C2", [["Another region", "Yet another region"]]]
	];

	return (
		<div>
			<h1>Custom Data</h1>

			<p>
				TODO sort out typings for this. Should add TS + JS demos too. Explain data structure format.
			</p>

			<h3>Demo</h3>
			<Provider value={{ countries: customData }}>
				<CountrySelector value={country} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountry(e.target.value)} />
				<RegionSelector country={country} value={region} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRegion(e.target.value)}/>
			</Provider>

			<h3>Code</h3>
			<SyntaxHighlighter language="typescript" style={atomOneDark}>{`import React, { useState } from 'react';
import { CountrySelector, Provider, RegionSelector } from 'react-country-region-data';

const customData = [
    ["Country 1", "C1", [["Region 1", "RE1"], ["Region 2", "RE2"]]],
    ["Country 2", "C2", [["Another region", "Yet another region"]]]
];

const Example = () => {
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");

    return (
        <Provider value={{ countries: customData }}>
            <CountrySelector value={country} onChange={(val) => setCountry(val)} />
            <RegionSelector country={country} value={region} onChange={(val) => setRegion(val)}/>
        </Provider>
    );
};`}</SyntaxHighlighter>
		</div>
	);
};

export default AllCountries;
