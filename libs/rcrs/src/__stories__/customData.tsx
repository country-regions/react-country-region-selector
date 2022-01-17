import React, { useState } from 'react';
import { CountrySelector, Provider, RegionSelector } from '@rcrs/rcrs';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { CustomCountryData, CustomShortCountryData } from '../helpers';

export const CustomData = () => {
	const [country1, setCountry1] = useState("");
	const [region1, setRegion1] = useState("");

	const customData1: CustomCountryData[] = [
		["Tesla", "tes", [["Region 1", "C1RE1"], ["Region 2", "C1RE2"]]],
		["Chevrolet", "chev", [["Another region", "C2RE1"], ["Yet another region", "C2RE2"]]],
		["Chevrolet", "C2", [["Bolt", "B"], ["Yet another region", "C2RE2"]]]
	];

	const [country2, setCountry2] = useState("");
	const [region2, setRegion2] = useState("");

	const customData2: CustomShortCountryData[] = [
		["Country 1", ["Region 1", "Region 2"]],
		["Country 2", ["Another region", "Yet another region"]]
	];

	return (
		<div>
			<h1>Custom Data</h1>

			<p>
				By default this script is designed to work with the data provided by the <a href="">country-region-data</a>
				repo, but if you want to ditch that dependency and provide your own info, go for it! In fact, you don't
				even need to limit yourselves to
			</p>

			<h3>Demo 1: separate value & labels</h3>

			<Provider value={{ countries: customData1 }}>
				<CountrySelector value={country1} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountry1(e.target.value)} />
				<RegionSelector country={country1} value={region1} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRegion1(e.target.value)}/>
			</Provider>

			<h3>Code</h3>
			<SyntaxHighlighter language="typescript" style={atomOneDark}>{`import React, { useState } from 'react';
import { CountrySelector, Provider, RegionSelector } from 'react-country-region-data';

const customData = [
	["Country X", ["Region 1", "Region 2"]],
	["Country Y", ["Another region", "Yet another region"]]
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

			<h3>Demo 2: labels the same as the value</h3>
			<p>
				This option lets you provide a slightly more convenient data structure where you don't bother differentiating
				between the selector labels and values.
			</p>

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

			<Provider value={{ countries: customData2 }}>
				<CountrySelector value={country2} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCountry2(e.target.value)} />
				<RegionSelector country={country2} value={region2} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRegion2(e.target.value)}/>
			</Provider>

			<p>
				Note that when you provide your own custom data in this short format, the <code>whitelist</code> and
				<code>blacklist</code> do not apply. Those settings work by filtering them out based on the country
				and region shortcode which isn't supplied here. But regardless, when you provide your own
				custom data you shouldn't need to filter anything. Just provide the correct data to be displayed.
			</p>
		</div>
	);
};

export default CustomData;
