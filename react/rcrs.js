var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import CountryRegionData from './source-data.js';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const C = {
  DISPLAY_TYPE_FULL: 'full',
  DISPLAY_TYPE_SHORT: 'short',
  REGION_LIST_DELIMITER: '|',
  SINGLE_REGION_DELIMITER: '~'
};

class CountryDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: _filterCountries(CountryRegionData, props.whitelist, props.blacklist),
      selectedValue: ''
    };
  }

  getCountries() {
    const { valueType, labelType, isMaterial } = this.props;

    return this.state.countries.map(([countryName, countrySlug]) => {
      const label = labelType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName;
      const value = valueType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName;
      if (isMaterial) {
        return React.createElement(MenuItem, { value: value, key: countrySlug,
          primaryText: label });
      }
      return React.createElement(
        'option',
        { value: value, key: countrySlug },
        label
      );
    });
  }

  getDefaultOption() {
    const { showDefaultOption, defaultOptionLabel, isMaterial } = this.props;
    if (!showDefaultOption) {
      return null;
    }
    if (isMaterial) {
      return React.createElement(MenuItem, { key: 'default',
        primaryText: defaultOptionLabel });
    }
    return React.createElement(
      'option',
      { value: '', key: 'default' },
      defaultOptionLabel
    );
  }

  render() {
    const { name, id, classes, value, onChange, isMaterial } = this.props;
    const attrs = {
      name,
      defaultValue: value,
      onChange: e => {
        onChange(e.target.value);
      }
    };
    if (id) {
      attrs.id = id;
    }
    if (classes) {
      attrs.className = classes;
    }
    if (isMaterial) {
      attrs.onChange = (event, index, value) => {
        this.setState({
          selectedValue: value
        });
        onChange(value);
      };
      return React.createElement(
        SelectField,
        _extends({}, attrs, { value: this.state.selectedValue }),
        this.getDefaultOption(),
        this.getCountries()
      );
    } else {
      return React.createElement(
        'select',
        attrs,
        this.getDefaultOption(),
        this.getCountries()
      );
    }
  }
}
CountryDropdown.propTypes = {
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  name: React.PropTypes.string,
  id: React.PropTypes.string,
  classes: React.PropTypes.string,
  showDefaultOption: React.PropTypes.bool,
  defaultOptionLabel: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  onChange: React.PropTypes.func,
  labelType: React.PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  valueType: React.PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  whitelist: React.PropTypes.array,
  blacklist: React.PropTypes.array,
  isMaterial: React.PropTypes.bool
};
CountryDropdown.defaultProps = {
  value: '',
  name: 'rcrs-country',
  id: '',
  classes: '',
  showDefaultOption: true,
  defaultOptionLabel: 'Select Country',
  onChange: () => {},
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_FULL,
  whitelist: [],
  blacklist: [],
  isMaterial: false
};

class RegionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      regions: this.getRegions(props.country),
      selectedRegion: ''
    };
    this.getRegions = this.getRegions.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.country !== this.props.country;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.country === this.props.country) {
      return;
    }
    this.setState({ regions: this.getRegions(nextProps.country) });
  }

  getRegions(country) {
    if (!country) {
      return [];
    }

    const { countryValueType } = this.props;
    const searchIndex = countryValueType === C.DISPLAY_TYPE_FULL ? 0 : 1;
    const regions = CountryRegionData.find(i => {
      return i[searchIndex] === country;
    });

    // this could happen if the user is managing the state of the region/country themselves and screws up passing
    // in a valid country
    if (!regions) {
      console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown');
      return [];
    }
    return regions[2].split(C.REGION_LIST_DELIMITER).map(regionPair => {
      let [regionName, regionShortCode = null] = regionPair.split(C.SINGLE_REGION_DELIMITER);
      return { regionName, regionShortCode };
    });
  }

  getRegionList() {
    const { labelType, valueType, isMaterial } = this.props;
    return this.state.regions.map(({ regionName, regionShortCode }) => {
      const label = labelType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
      const value = valueType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
      if (isMaterial) {
        return React.createElement(MenuItem, { value: value, key: regionName, primaryText: label });
      }
      return React.createElement(
        'option',
        { value: value, key: regionName },
        label
      );
    });
  }

  // there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
  // a "default" option which shows
  getDefaultOption() {
    const { blankOptionLabel, showDefaultOption, defaultOptionLabel, country, isMaterial } = this.props;
    if (!country) {
      if (isMaterial) {
        return React.createElement(MenuItem, { value: '', key: blankOptionLabel,
          primaryText: blankOptionLabel });
      }
      return React.createElement(
        'option',
        { value: '' },
        blankOptionLabel
      );
    }
    if (showDefaultOption) {
      if (isMaterial) {
        return React.createElement(MenuItem, { value: '', key: defaultOptionLabel,
          primaryText: defaultOptionLabel });
      }
      return React.createElement(
        'option',
        { value: '' },
        defaultOptionLabel
      );
    }
    return null;
  }

  render() {
    const { value, country, onChange, id, name, classes, disableWhenEmpty, isMaterial } = this.props;
    const disabled = disableWhenEmpty && country == '';
    const attrs = {
      name,
      disabled,
      onChange: e => {
        onChange(e.target.value);
      }
    };
    if (id) {
      attrs.id = id;
    }
    if (classes) {
      attrs.className = classes;
    }
    if (isMaterial) {
      attrs.onChange = (event, index, value) => {
        this.setState({
          selectedRegion: value
        });
        onChange(value);
      };
      console.log(this.state.selectedRegion);
      return React.createElement(
        SelectField,
        _extends({}, attrs, { value: this.state.selectedRegion }),
        this.getDefaultOption(),
        this.getRegionList()
      );
    } else {
      attrs.onChange = e => onChange(e.target.value);
      defaultValue = value;
      return React.createElement(
        'select',
        attrs,
        this.getDefaultOption(),
        this.getRegionList()
      );
    }
  }
}
RegionDropdown.propTypes = {
  country: React.PropTypes.string,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  name: React.PropTypes.string,
  id: React.PropTypes.string,
  classes: React.PropTypes.string,
  blankOptionLabel: React.PropTypes.string,
  showDefaultOption: React.PropTypes.bool,
  defaultOptionLabel: React.PropTypes.string,
  onChange: React.PropTypes.func,
  labelType: React.PropTypes.string,
  valueType: React.PropTypes.string,
  disableWhenEmpty: React.PropTypes.bool,
  isMaterial: React.PropTypes.bool
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
  countryValueType: C.DISPLAY_TYPE_FULL,
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_FULL,
  disableWhenEmpty: false,
  isMaterial: false
};

// ------------------------- helpers --------------------------------


// called on country field initialization. It reduces the subset of countries depending on whether the user
// specified a white/blacklist
function _filterCountries(countries, whitelist, blacklist) {
  var filteredCountries = countries;

  // N.B. I'd rather use ES6 array.includes() but it requires a polyfill on various browsers. Bit surprising that
  // babel doesn't automatically convert it to ES5-friendly code, like the new syntax additions, but that requires
  // a separate polyfill which is a total kludge
  if (whitelist.length > 0) {
    filteredCountries = countries.filter(([, countrySlug]) => {
      return whitelist.indexOf(countrySlug) > -1;
    });
  } else if (blacklist.length > 0) {
    filteredCountries = countries.filter(([, countrySlug]) => {
      return blacklist.indexOf(countrySlug) === -1;
    });
  }

  return filteredCountries;
}

export { CountryDropdown, RegionDropdown };