import React, { useContext, useEffect, useState } from 'react';
import { RCRSContext, ValueType } from './helpers';
import { CountryData, Region } from 'country-region-data';

export interface RegionDropdownProps<T = Element> {
	country: string;
	value: string;
	onChange: (val: string, e: React.ChangeEvent<T>) => void;
	onBlur?: (val: string, e: React.ChangeEvent<T>) => void;
	name?: string;
	id?: string;
	classes?: string;
	blankOptionLabel?: string;
	showDefaultOption?: boolean;
	defaultOptionLabel?: string;
	countryValueType?: ValueType;
	labelType?: ValueType;
	valueType?: ValueType;
	disableWhenEmpty?: boolean;
	disabled?: boolean;
	customOptions?: string[];
	whitelist?: string[];
	blacklist?: string[];
}

const getRegions = (country: string, countries: CountryData[], countryValueType: ValueType, whitelist: string[], blacklist: string[]) => {
	if (!country) {
		return [];
	}
	const searchIndex = (countryValueType === ValueType.full) ? 0 : 1;

	let selectedCountry: CountryData | null = null;
	countries.forEach((row) => {
		if (row[searchIndex] === country) {
			selectedCountry = row;
		}
	});

	// this could happen if the user is managing the state of the region/country themselves and screws up passing
	// in a valid country
	if (!selectedCountry) {
		console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionSelector');
		return [];
	}

	// const filteredRegions = filterRegions(selectedCountry, whitelist, blacklist);

	// return filteredRegions[2].split(C.REGION_LIST_DELIMITER).map((regionPair) => {
		// let [regionName, regionShortCode = null] = regionPair.split(C.SINGLE_REGION_DELIMITER);
		// return { regionName, regionShortCode };
	// });

	return selectedCountry[2];
};


const RegionSelector = ({
	country = '',
	value = '',
	name = 'rcrs-region',
	id = '',
	classes = '',
	blankOptionLabel = '-',
	showDefaultOption = true,
	defaultOptionLabel = 'Select Region',
	onChange = () => {},
	onBlur = () => {},
	countryValueType = ValueType.full,
	labelType = ValueType.full,
	valueType = ValueType.full,
	disabled = false,
	disableWhenEmpty = false,
	customOptions = []
}: RegionDropdownProps) => {
	const context = useContext(RCRSContext);
	const [regions, setRegions] = useState([]);

// 	// regions: this.getRegions(country);

	useEffect(() => {
		const defaultRegions: any[] = []; //getRegions(country, context.countries);

		// setRegions([
		// 	...defaultRegions,
		// 	// ...getCustomOptions(defaultRegions)
		// ]);
	}, [country, context.countries]);

	const getCustomOptions = (regions: Region[]) => {
		const duplicateRegions = getDuplicates(regions);

		if (duplicateRegions.length) {
			console.error('Error: Duplicate regions present: ' + duplicateRegions.toString() + '.\nThe above item(s) is/are already getting added to the region dropdown by the library.');
			return [];
		}

		return [];
		// TODO...
		// return customOptions.map((option: string) => {
		// 	if (option) {
		// 		return { regionName: option, regionShortCode: option };
		// 	}
		// });
	};

	const getDuplicates = (regions: Region[]) => {
		const index = valueType === ValueType.full ? 0 : 1;
		return regions.filter((region) => customOptions.indexOf(region[index]) !== -1).map(region => region[index]);
	};


// 	const getRegionList = () => {
// 		const { labelType, valueType } = this.props;
// 		return this.state.regions.map(({ regionName, regionShortCode }) => {
// 			const label = (labelType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode;
// 			const value = (valueType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode;
// 			return <option value={value} key={regionName}>{label}</option>;
// 		});
// 	};

	// there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
	// a "default" option which shows
	const getDefaultOption = () => {
		// const { blankOptionLabel, showDefaultOption, defaultOptionLabel, country } = this.props;
		// if (!country) {
		// 	return <option value="">{blankOptionLabel}</option>;
		// }
		// if (showDefaultOption) {
		// 	return <option value="">{defaultOptionLabel}</option>;
		// }
		return null;
	};

	let options: any = [];
//
// 	const {
// 		value, country, onChange, onBlur, id, name, classes, disabled, blankOptionLabel, showDefaultOption,
// 		defaultOptionLabel, labelType, valueType, countryValueType, disableWhenEmpty, customOptions,
// 		...arbitraryProps
// 	} = this.props;
//
	const isDisabled = disabled || (disableWhenEmpty && country === '');
	const attrs: React.HTMLProps<HTMLSelectElement> = {
		// ...arbitraryProps,
		name,
		value,
		onChange: (e: any) => onChange(e.target.value, e),
		onBlur: (e: any) => onBlur(e.target.value, e),
		disabled: isDisabled
	};
	if (id) {
		attrs.id = id;
	}
	if (classes) {
		attrs.className = classes;
	}

	return (
		<select {...attrs}>
			{getDefaultOption()}
			{options}
		</select>
	);
};

export default RegionSelector;
