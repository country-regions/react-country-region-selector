import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountryRegionData from '../node_modules/country-region-data/data.json';
import C from './constants';

export default class RegionDropdown extends Component {
	constructor (props) {
		super(props);
		this.state = {
			regions: this.getRegions(props.country)
		};
		this.getRegions = this.getRegions.bind(this);
	}

	shouldComponentUpdate (nextProps) {
		return (nextProps.country !== this.props.country) || (nextProps.value !== this.props.value);
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.country === this.props.country) {
			return;
		}

		const defaultRegions = this.getRegions(nextProps.country);

		this.setState({ regions: [
			...defaultRegions,
			...this.getCustomOptions(defaultRegions)
		]});
	}

	getCustomOptions (regions) {
		const { customOptions } = this.props;

		const duplicateRegions = this.getDuplicates(regions);

		if (duplicateRegions.length) {
			console.error('Error: Duplicate regions present: ' + duplicateRegions.toString() + '.\nThe above item(s) is/are already getting added to the region dropdown by the library.');
			return [];
		}

		return customOptions.map((option) => {
			if (option) {
				return {regionName: option, regionShortCode: option};
			}
		});
	}

	getDuplicates (regions) {
		const { customOptions, valueType } = this.props;
		const regionKey = valueType === C.DISPLAY_TYPE_FULL ? 'regionName' : 'regionShortCode';

		return regions.filter((region) => {
			return customOptions.indexOf(region[regionKey]) != -1;
		}).map(region => region[regionKey]);
	}

	getRegions (country) {
		if (!country) {
			return [];
		}

		const { countryValueType } = this.props;
		const searchIndex = (countryValueType === C.DISPLAY_TYPE_FULL) ? 0 : 1;
		let regions = [];
		CountryRegionData.forEach((i) => {
			if (i[searchIndex] === country) {
				regions = i;
			}
		});

		// this could happen if the user is managing the state of the region/country themselves and screws up passing
		// in a valid country
		if (!regions || regions.length === 0) {
			console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown');
			return [];
		}
		return regions[2].split(C.REGION_LIST_DELIMITER).map((regionPair) => {
			let [regionName, regionShortCode = null] = regionPair.split(C.SINGLE_REGION_DELIMITER);
			return { regionName, regionShortCode };
		});
	}

	getRegionList () {
		const { labelType, valueType } = this.props;
		return this.state.regions.map(({ regionName, regionShortCode }) => {
			const label = (labelType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode;
			const value = (valueType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode;
			return <option value={value} key={regionName}>{label}</option>;
		});
	}

	// there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
	// a "default" option which shows
	getDefaultOption () {
		const { blankOptionLabel, showDefaultOption, defaultOptionLabel, country } = this.props;
		if (!country) {
			return <option value="">{blankOptionLabel}</option>;
		}
		if (showDefaultOption) {
			return <option value="">{defaultOptionLabel}</option>;
		}
		return null;
	}

	render () {
		const { value, country, onChange, onBlur, id, name, classes, disabled, blankOptionLabel, showDefaultOption,
			defaultOptionLabel, labelType, valueType, countryValueType, disableWhenEmpty, customOptions,
			...arbitraryProps } = this.props;

		const isDisabled = disabled || (disableWhenEmpty && country === '');
		const attrs = {
			...arbitraryProps,
			name,
			value,
			onChange: (e) => onChange(e.target.value, e),
			onBlur: (e) => onBlur(e),
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
				{this.getDefaultOption()}
				{this.getRegionList()}
			</select>
		);
	}
}

RegionDropdown.propTypes = {
	country: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	name: PropTypes.string,
	id: PropTypes.string,
	classes: PropTypes.string,
	blankOptionLabel: PropTypes.string,
	showDefaultOption: PropTypes.bool,
	defaultOptionLabel: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	labelType: PropTypes.string,
	valueType: PropTypes.string,
	disabled: PropTypes.bool,
	disableWhenEmpty: PropTypes.bool,
	customOptions: PropTypes.array
};
RegionDropdown.defaultProps = {
	country: '',
	value: '',
	name: 'rcrs-region',
	id: '',
	classes: '',
	blankOptionLabel: '-',
	showDefaultOption: true,
	defaultOptionLabel: 'Select Region',
	onChange: () => {},
	onBlur: () => {},
	countryValueType: C.DISPLAY_TYPE_FULL,
	labelType: C.DISPLAY_TYPE_FULL,
	valueType: C.DISPLAY_TYPE_FULL,
	disabled: false,
	disableWhenEmpty: false,
	customOptions: []
};
