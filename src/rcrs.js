import React from 'react';
import CountryRegionData from './source-data.js';
import _ from 'underscore';
import C from './constants.js';


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
      defaultValue: value,
      onChange: (e) => onChange(e.target.value)
    };
    if (id) {
      attrs.id = id;
    }
    if (classes) {
      attrs.classes = classes;
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
    return nextProps.country !== this.props.country;
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
    const regions = _.find(CountryRegionData, (i) => { return i[searchIndex] === country; });

    // this could happen if the user is managing the state of the region/country themselves and screws up passing
    // in a valid country
    if (!regions) {
      console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown');
      return [];
    }

    // clean up the region info here. TODO MEMOIZE
    return _.map(regions[2].split(C.REGION_LIST_DELIMITER), (regionPair) => {
      let [regionName, regionShortCode = null] = regionPair.split(C.SINGLE_REGION_DELIMITER);
      return { regionName, regionShortCode };
    });
  }

  getRegionList () {
    const { labelType, valueType } = this.props;
    return _.map(this.state.regions, ({ regionName, regionShortCode }) => {
      const label = (labelType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode;
      const value = (valueType === C.DISPLAY_TYPE_FULL) ? regionName : regionShortCode;
      return <option value={value} key={regionShortCode}>{label}</option>;
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
    const { value, onChange } = this.props;
    return (
      <select defaultValue={value} onChange={(e) => onChange(e.target.value)}>
        {this.getDefaultOption()}
        {this.getRegionList()}
      </select>
    );
  }
}
RegionDropdown.propTypes = {
  name: React.PropTypes.string,
  country: React.PropTypes.string,
  value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  blankOptionLabel: React.PropTypes.string,
  showDefaultOption: React.PropTypes.bool,
  defaultOptionLabel: React.PropTypes.string,
  onChange: React.PropTypes.func,
  labelType: React.PropTypes.string,
  valueType: React.PropTypes.string
};
RegionDropdown.defaultProps = {
  name: 'rcrs-region',
  country: '',
  value: '',
  blankOptionLabel: '-',
  showDefaultOption: true,
  defaultOptionLabel: 'Select region',
  onChange: () => {},
  countryValueType: C.DISPLAY_TYPE_FULL,
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_FULL
};


// ------------------------- helpers --------------------------------


// called on country field initialization. It reduces the subset of countries depending on whether the user
// specified a white/blacklist
function _filterCountries (countries, whitelist, blacklist) {
  var filteredCountries = countries;

  if (whitelist.length > 0) {
    filteredCountries = _.filter(countries, ([countryName, countrySlug]) => { return _.contains(whitelist, countrySlug); });
  } else if (blacklist.length > 0) {
    filteredCountries = _.filter(countries, ([countryName, countrySlug]) => { return !_.contains(blacklist, countrySlug); });
  }

  return filteredCountries;
}


export { CountryDropdown, RegionDropdown };
