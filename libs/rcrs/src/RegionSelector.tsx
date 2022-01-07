import React, { useContext, useEffect, useMemo, useState } from 'react';
import { RCRSContext, ValueType } from './helpers';
import { CountryData, Region } from 'country-region-data';

export interface RegionDropdownProps {
	country: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => any;
	onBlur?: (e: React.ChangeEvent<HTMLSelectElement>) => any;
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
}

const RegionSelector = ({
	// required
	country,
	value,
	onChange,

	// optional
	onBlur = () => {},
	name = 'rcrs-region',
	id = '',
	classes = '',
	blankOptionLabel = '-',
	showDefaultOption = true,
	defaultOptionLabel = 'Select Region',
	countryValueType = ValueType.full,
	labelType = ValueType.full,
	valueType = ValueType.full,
	disabled = false,
	disableWhenEmpty = false,
	customOptions = []
}: RegionDropdownProps) => {
	const { countries, whitelist, blacklist } = useContext(RCRSContext);
	const [regions, setRegions] = useState([]);

	const getDuplicates = (regions: Region[]) => {
		const index = valueType === ValueType.full ? 0 : 1;
		return regions.filter((region) => customOptions.indexOf(region[index]) !== -1).map(region => region[index]);
	};

	const getRegions = (country: string, countries: CountryData[]) => {
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

	const safeCustomOptions = useMemo(() => {
		const duplicateRegions = getDuplicates(regions);

		if (duplicateRegions.length) {
			console.error('Error: Duplicate regions present: ' + duplicateRegions.toString() + '.\nThe above item(s) is/are already getting added to the region dropdown by the library.');
			return [];
		}

		return customOptions.map((option: string) => [option, option]);
	}, [regions, customOptions]);

	// useEffect(() => {
	// 	// const regions = getRegions(country, countries);
	//
	// 	setRegions([
	// 		...regions,
	// 		...safeCustomOptions
	// 	]);
	// }, [country, safeCustomOptions, countries]);

	const getRegionList = () => {
		return regions.map(([regionName, regionShortCode]: Region) => {
			const label = (labelType === ValueType.full) ? regionName : regionShortCode;
			const value = (valueType === ValueType.full) ? regionName : regionShortCode;
			return <option value={value} key={regionName}>{label}</option>;
		});
	};

	// there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
	// a "default" option which shows
	const getDefaultOption = () => {
		if (!country) {
			return <option value="">{blankOptionLabel}</option>;
		}
		if (showDefaultOption) {
			return <option value="">{defaultOptionLabel}</option>;
		}
		return null;
	};

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
		onChange: (e: React.ChangeEvent<HTMLSelectElement>) => onChange(e),
		onBlur: (e: React.ChangeEvent<HTMLSelectElement>) => onBlur(e),
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
			{getRegionList()}
		</select>
	);
};

export default RegionSelector;
