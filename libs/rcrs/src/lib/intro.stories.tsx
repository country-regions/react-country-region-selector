import React, { useState } from 'react';
import { Provider, CountrySelector, RegionSelector } from '@rcrs/rcrs';
import { allCountries } from 'country-region-data';
import { Meta } from '@storybook/react';

export const Intro = () => {
	const [country, setCountry] = useState("");
	const [region, setRegion] = useState("");

	console.log("in demo: ", { country, region });

	return (
		<div>
			<h1>react-country-region-selector</h1>

			<p>
				Intro doc here. The idea is to split out all the many possible demos, configurations and scenarios
				for this component all as separate stories listed on the left. This first page will contain a
				typical usage scenario using `allCountries` imported from country-region-data.
			</p>

			<Provider value={{ countries: allCountries }}>
				<CountrySelector value={country} onChange={(val) => setCountry(val)} />
				<RegionSelector country={country} value={region} onChange={(val) => setRegion(val)}/>
			</Provider>
		</div>
	);
};

export default {
	component: Intro,
	title: 'Demos'
} as Meta;

// const Template: Story<any> = (args) => <Intro2 {...args} />;
//
// export const Intro = Template.bind({});
// Intro.args = {};
