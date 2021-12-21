import React, { useState } from 'react';

export const enum DisplayType {
	full = 'full',
	short = 'short'
}

export interface CountryDropdownProps {
	value?: number | string;
	name?: string;
	disabled?: boolean;
	id?: string;
	classes?: string;
 	showDefaultOption?: boolean;
	defaultOptionLabel?: string | number;
	priorityOptions?: any; // TODO
	onChange?: any; //PropTypes.func;
	onBlur?: any; //
	labelType?: DisplayType;
	valueType?: DisplayType;
	whitelist?: string[]; // TODO PropTypes.array,
	blacklist?: string[]; // PropTypes.array,
}

const CountryDropdown = ({
	value,
	name = 'rcrs-country',
	disabled = false,
	id = '',
	classes = '',
	showDefaultOption = true,
	defaultOptionLabel = 'Select Country',
	priorityOptions = [],
	blacklist = [],
	whitelist = [],
	onChange = () => {},
	onBlur = () => {},
	labelType = DisplayType.full,
	valueType = DisplayType.short,
}: CountryDropdownProps) => {

	const [countries] = useState(() => {
		// TODO use context for the data
		// return helpers.filterCountries(CountryRegionData, priorityOptions, whitelist, blacklist)
	});

	const getCountries = React.useCallback(() => {
		// return countries.map(([countryName, countrySlug]) => (
		// 	<option value={(valueType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName} key={countrySlug}>
		// 		{(labelType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName}
		// 	</option>
		// ));
		return null;
	}, [countries]);

	const getDefaultOption = React.useCallback(() => {
		if (!showDefaultOption) {
			return null;
		}
		return (
			<option value="" key="default">{defaultOptionLabel}</option>
		);
	}, [showDefaultOption, defaultOptionLabel]);

	const attrs: React.HTMLProps<HTMLSelectElement> = {
		// ...arbitraryProps,
		name,
		value: "",
		onChange: (e: any) => onChange(e.target.value, e),
		onBlur: (e: any) => onBlur(e.target.value, e),
		disabled
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
			{getCountries()}
		</select>
	);
};

export default CountryDropdown;
