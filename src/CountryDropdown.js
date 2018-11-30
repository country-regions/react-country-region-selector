import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountryRegionData from '../node_modules/country-region-data/data.json';
import C from './constants';
import * as helpers from './helpers';

export default class CountryDropdown extends Component {

	constructor (props) {
		super(props);

		this.state = {
			countries: helpers.filterCountries(CountryRegionData, props.priorityOptions, props.whitelist, props.blacklist)
		};
	}

	getCountries () {
		const { valueType, labelType } = this.props;

		return this.state.countries.map(([countryName, countrySlug]) => (
			<option value={(valueType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName} key={countrySlug}>
				{(labelType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName}
			</option>
		));
	}

	getDefaultOption () {
		const { showDefaultOption, defaultOptionLabel } = this.props;
		if (!showDefaultOption) {
			return null;
		}
		return (
			<option value="" key="default">{defaultOptionLabel}</option>
		);
	}

	render () {
		// unused properties deliberately added so arbitraryProps gets populated with anything else the user specifies
		const { name, id, classes, value, onChange, onBlur, disabled, showDefaultOption, defaultOptionLabel,
			labelType, valueType, whitelist, blacklist, customOptions, priorityOptions, ...arbitraryProps } = this.props;

		const attrs = {
			...arbitraryProps,
			name,
			value,
			onChange: (e) => onChange(e.target.value, e),
			onBlur: (e) => onBlur(e),
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
				{this.getDefaultOption()}
				{this.getCountries()}
			</select>
		);
	}
}

CountryDropdown.propTypes = {
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	id: PropTypes.string,
	classes: PropTypes.string,
	showDefaultOption: PropTypes.bool,
	defaultOptionLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	priorityOptions: PropTypes.array,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	labelType: PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
	valueType: PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
	whitelist: PropTypes.array,
	blacklist: PropTypes.array,
	disabled: PropTypes.bool
};
CountryDropdown.defaultProps = {
	value: '',
	name: 'rcrs-country',
	id: '',
	classes: '',
	showDefaultOption: true,
	defaultOptionLabel: 'Select Country',
	priorityOptions: [],
	onChange: () => {},
	onBlur: () => {},
	labelType: C.DISPLAY_TYPE_FULL,
	valueType: C.DISPLAY_TYPE_FULL,
	whitelist: [],
	blacklist: [],
	disabled: false
};