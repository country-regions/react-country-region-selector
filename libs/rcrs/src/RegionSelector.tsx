import React, { useContext, useEffect, useState } from 'react';
import { filterRegions, RCRSContext, ValueType } from './helpers';
import { CountryData, CountrySlug, Region } from 'country-region-data';


export interface RegionDropdownProps<T = Element> {
	/**
	 * The currently selected country.
	 *
	 * Default value: ""
	 */
	country: string;

	/**
	 * The currently selected region.
	 *
	 * Default value: ""
	 */
	value: string;

	/**
	 * Callback that gets called when the user selects a region.
	 * Use this to store the value in whatever store you're
	 * using (or just the parent component state).
	 *
	 * The original event is also provided optionally.
	 *
	 * Default value: undefined
	 */
	onChange: (val: string, e: React.ChangeEvent<T>) => void;

	/**
	 * Callback that gets called when the user blurs off the region field.
	 *
	 * The original event is also provided optionally.
	 *
	 * Default value: undefined
	 */
	onBlur?: (val: string, e: React.ChangeEvent<T>) => void;

	/**
	 * The name attribute of the generated select box.
	 *
	 * Default value: "rcrs-region"
	 */
	name?: string;

	/**
	 * The ID of the generated select box. Not added by default.
	 *
	 * Default value: ""
	 */
	id?: string;

	/**
	 * Any additional space-separated classes you want to add.
	 *
	 * Default value: ""
	 */
	classes?: string;

	/**
	 * The label that appears in the region dropdown when the user
	 * hasn't selected a country yet.
	 *
	 * Default value: undefined
	 */
	blankOptionLabel?: string;

	/**
	 * Whether you want to show a default option. This is what the
	 * user sees in the region dropdown after selecting a country.
	 * It defaults to the defaultOptionLabel setting (see next).
	 *
	 * Default value: true
	 */
	showDefaultOption?: string;

	/**
	 * string	The default region option.
	 *
	 * Default value: "Select Region"
	 */
	defaultOptionLabel?: string;

	/**
	 * If you've changed the country dropdown valueType to short you
	 * will need to set this value to short as well, so the component
	 * knows what's being passed in the country property.
	 *
	 * Default value: "full"
	 */
	countryValueType?: ValueType;

	/**
	 * Either "full" or "short". This governs whether you see
	 * region names or region short codes in the dropdown.
	 *
	 * Default value: "full"
	 */
	labelType?: ValueType;

	/**
	 * Either "full" or "short". This controls the actual value
	 * attribute of each <option> in the dropdown.
	 *
	 * Default value: "full"
	 */
	valueType?: ValueType;

	/**
	 * Disables the region field when the user hasn't selected a country.
	 *
	 * Default value: false
	 */
	disableWhenEmpty?: boolean;

	/**
	 * Disables the region field. If set to true, it overrides disableWhenEmpty
	 *
	 * Default value: false
	 */
	disabled?: boolean;

	/**
	 * Appends a list of string to the every region dropdown,
	 * regardless of the country selected.
	 *
	 * Default value: []
	 */
	customOptions?: string[];

	/**
	 * This setting lets you target specific countries to appear
	 * in the dropdown. Only those specified here will appear.
	 * This should be an array of country shortcodes. See the
	 * country-region-data repo for the data and the shortcodes.
	 *
	 * Default value: []
	 */
	whitelist?: string[];

	/**
	 * Lets you target countries that should not appear in the
	 * dropdown. Should also be an array of country shortcodes.
	 *
	 * Default value: []
	 */
	blacklist?: string[];
}


const getRegions = (country: string, countries: CountryData[], countryValueType: ValueType, whitelist: string[], blacklist: string[]) => {
	if (!country) {
		return [];
	}
	const searchIndex = (countryValueType === ValueType.full) ? 0 : 1;

	let selectedCountry: CountryData;
	countries.forEach((i) => {
		if (i[searchIndex] === country) {
			selectedCountry = i;
		}
	});

	// this could happen if the user is managing the state of the region/country themselves and screws up passing
	// in a valid country
	if (!selectedCountry || selectedCountry.length === 0) { // TODO why the length check?
		console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown');
		return [];
	}

	const filteredRegions = filterRegions(selectedCountry, whitelist, blacklist);

	return filteredRegions[2].split(C.REGION_LIST_DELIMITER).map((regionPair) => {
		let [regionName, regionShortCode = null] = regionPair.split(C.SINGLE_REGION_DELIMITER);
		return { regionName, regionShortCode };
	});
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
	whitelist = {},
	blacklist = {},
	disabled = false,
	disableWhenEmpty = false,
	customOptions = []
}: RegionDropdownProps) => {
	const context = useContext(RCRSContext);

// 	// regions: this.getRegions(country);

	useEffect(() => {
		const defaultRegions = getRegions(country, context.countries);

		this.setState({
			regions: [
				...defaultRegions,
				...getCustomOptions(defaultRegions)
			]
		});
	}, [country, context.countries]);

// 	const getCustomOptions = (regions) => {
// 		const { customOptions } = this.props;
//
// 		const duplicateRegions = this.getDuplicates(regions);
//
// 		if (duplicateRegions.length) {
// 			console.error('Error: Duplicate regions present: ' + duplicateRegions.toString() + '.\nThe above item(s) is/are already getting added to the region dropdown by the library.');
// 			return [];
// 		}
//
// 		return customOptions.map((option) => {
// 			if (option) {
// 				return { regionName: option, regionShortCode: option };
// 			}
// 		});
// 	};
//
// 	const getDuplicates = (regions) = {
// 		const { customOptions, valueType } = this.props;
// 		const regionKey = valueType === C.DISPLAY_TYPE_FULL ? 'regionName' : 'regionShortCode';
//
// 		return regions.filter((region) => customOptions.indexOf(region[regionKey]) !== -1).map(region => region[regionKey]);
// 	}
//

// 	const getRegionList = () => {
// 		const { labelType, valueType } = this.props;
// 		return this.state.regions.map(({ regionName, regionShortCode }) => {
// 			const label = (labelType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode;
// 			const value = (valueType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode;
// 			return <option value={value} key={regionName}>{label}</option>;
// 		});
// 	};
//
// 	// there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
// 	// a "default" option which shows
// 	const getDefaultOption = () => {
// 		const { blankOptionLabel, showDefaultOption, defaultOptionLabel, country } = this.props;
// 		if (!country) {
// 			return <option value="">{blankOptionLabel}</option>;
// 		}
// 		if (showDefaultOption) {
// 			return <option value="">{defaultOptionLabel}</option>;
// 		}
// 		return null;
// 	}
//
// 	const {
// 		value, country, onChange, onBlur, id, name, classes, disabled, blankOptionLabel, showDefaultOption,
// 		defaultOptionLabel, labelType, valueType, countryValueType, disableWhenEmpty, customOptions,
// 		...arbitraryProps
// 	} = this.props;
//
	const isDisabled = disabled || (disableWhenEmpty && country === '');
	const attrs = {
		// ...arbitraryProps,
		name,
		value,
		onChange: (e) => onChange(e.target.value, e),
		onBlur: (e) => onBlur(e.target.value, e),
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
