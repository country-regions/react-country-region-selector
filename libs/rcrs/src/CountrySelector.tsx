import React, { useContext, useEffect, useState } from 'react';
import { CountryData } from 'country-region-data';
import { filterCountries, RCRSContext, ValueType } from './helpers';

export interface CountryDropdownProps<T = Element> {
	/**
	 * The currently selected country. This should either
	 * be the shortcode, or the full country name depending
	 * on what you're using for your value attribute
	 * (see the valueType option). By default it's the full country name.
	 */
	value: string;

	/**
	 * Callback that gets called when the user selects a country. Use
	 * this to store the value in whatever store you're
	 * using (or just the parent component state).
	 *
	 * The original event is also provided optionally.
	 */
	onChange: (val: string, e: React.ChangeEvent<T>) => void;

	/**
	 * Callback that gets called when the user blurs off the country field.
	 *
	 * The original event is also provided optionally.
	 *
	 * Default value: undefined
	 */
	onBlur?: (val: string, e: React.ChangeEvent<T>) => void;

	/**
	 * The name attribute of the generated select box.
	 *
	 * Default value: "rcrs-country"
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
	 *  Whether you want to show a default option.
	 *
	 * Default value: true
	 */
	showDefaultOption?: boolean;

	/**
	 * Lets you target countries that should appear at the top
	 * of the dropdown. Should also be an array of country shortcodes.
	 *
	 * Default value: array
	 */
	priorityOptions?: string[];

	/**
	 * The default option label.
	 *
	 * Default value: "Select Country"
	 */
	defaultOptionLabel?: string;

	/**
	 * Either "full" or "short". This governs whether you see
	 * country names or country short codes in the dropdown.
	 *
	 * Default value: "full"
	 */
	labelType?: ValueType;

	/**
	 * Either "full" or "short". This controls the actual value
	 * attribute of each <option> in the dropdown. Please note,
	 * if you set this to "short" you will need to let the
	 * corresponding <RegionDropdown /> component know as well,
	 * by passing a countryValueType="short" attribute.
	 *
	 * Default value: "full"
	 */
	valueType?: ValueType;

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

	/**
	 * Disables the country field.
	 *
	 * Default value: false
	 */
	disabled?: boolean;
}

const CountrySelector = ({
	// required [TODO add runtime check or just give default value?]
	value = '',
	onChange = () => {},

	// optional
	name = 'rcrs-country',
	disabled = false,
	id = '',
	classes = '',
	showDefaultOption = true,
	defaultOptionLabel = 'Select Country',
	priorityOptions = [],
	blacklist = [],
	whitelist = [],
	onBlur = () => {},
	labelType = ValueType.full,
	valueType = ValueType.short,
}: CountryDropdownProps) => {
	const context = useContext(RCRSContext);
	const [countries, setCountries] = useState([]);

	useEffect(() => {
		setCountries(filterCountries(context.countries, priorityOptions, whitelist, blacklist));
	}, [context.countries]);

	const options = React.useMemo(() => {
		return countries.map(([countryName, countrySlug]: CountryData) => (
			<option value={(valueType === ValueType.short) ? countrySlug : countryName} key={countrySlug}>
				{(labelType === ValueType.short) ? countrySlug : countryName}
			</option>
		));
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
			{options}
		</select>
	);
};

export default CountrySelector;
