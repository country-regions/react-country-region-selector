import React from 'react';
import CountryRegionData from './source-data.js';


const C = {
  DISPLAY_TYPE_FULL: 'full',
  DISPLAY_TYPE_SHORT: 'short',
  REGION_LIST_DELIMITER: '|',
  SINGLE_REGION_DELIMITER: '~'
};


class CountryDropdown extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      countries: _filterCountries(CountryRegionData, props.whitelist, props.blacklist)
    };
  }

  getCountries () {
    const { valueType, labelType } = this.props;

    return this.state.countries.map(([countryName, countrySlug]) => {
      return (
        <option value={(valueType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName} key={countrySlug}>
          {(labelType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName}
        </option>
      );
    });
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
    const { name, id, classes, value, onChange } = this.props;
    const attrs = {
      name,
      value,
      onChange: (e) => onChange(e.target.value)
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
  blacklist: React.PropTypes.array
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
  blacklist: []
};


class RegionDropdown extends React.Component {
  constructor (props) {
    super(props);
    this.state = { regions: this.getRegions(props.country) };
    this.getRegions = this.getRegions.bind(this);
  }

  shouldComponentUpdate (nextProps) {
    return (nextProps.country !== this.props.country) || (nextProps.value !== this.props.value);
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.country === this.props.country) {
      return;
    }
    this.setState({ regions: this.getRegions(nextProps.country) })
  }

  getRegions (country) {
    if (!country) {
      return [];
    }

    const { countryValueType } = this.props;
    const searchIndex = (countryValueType === C.DISPLAY_TYPE_FULL) ? 0 : 1;
    const regions = CountryRegionData.find((i) => { return i[searchIndex] === country; });

    // this could happen if the user is managing the state of the region/country themselves and screws up passing
    // in a valid country
    if (!regions) {
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
    const { value, country, onChange, id, name, classes, disableWhenEmpty } = this.props;
    const disabled = (disableWhenEmpty && country == '');
    const attrs = {
      name,
      value,
      onChange: (e) => onChange(e.target.value),
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
        {this.getRegionList()}
      </select>
    );
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
  disableWhenEmpty: React.PropTypes.bool
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
  disableWhenEmpty: false
};


// ------------------------- helpers --------------------------------


// called on country field initialization. It reduces the subset of countries depending on whether the user
// specified a white/blacklist
function _filterCountries (countries, whitelist, blacklist) {
  var filteredCountries = countries;

  // N.B. I'd rather use ES6 array.includes() but it requires a polyfill on various browsers. Bit surprising that
  // babel doesn't automatically convert it to ES5-friendly code, like the new syntax additions, but that requires
  // a separate polyfill which is a total kludge
  if (whitelist.length > 0) {
    filteredCountries = countries.filter(([, countrySlug]) => { return whitelist.indexOf(countrySlug) > -1; });
  } else if (blacklist.length > 0) {
    filteredCountries = countries.filter(([, countrySlug]) => { return blacklist.indexOf(countrySlug) === -1; });
  }

  return filteredCountries;
}


export { CountryDropdown, RegionDropdown };
