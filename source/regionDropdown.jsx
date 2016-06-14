import React from 'react';
import _ from 'underscore';
import CountryRegionData from '../source/source-data.js';
import C from '../source/constants.js';


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
      console.error('Error. Unknown country passed:', country, '. If you\'re passing a country shortcode, be sure to include valueType="short" on the RegionDropdown');
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
    return (
      <select style={{color: this.context.color}}>
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
//RegionDropdown.contextTypes = {}



//- `data-default-option` - optional. Default: "Select region". This determines the default, blank option display value
//that shows up after a user has selected a country.
//- `data-show-default-option` - optional. True by default. This shows the "Select Region" default option (or whatever
//string you've set). Set it to "false" to turn it off.
//- `data-default-value` - optional. The default selected value in the region dropdown (e.g. "British Columbia", or "BC" if using the data-value="shortcode" option)
//- `data-value="shortcode"` - optional. By default, region dropdowns will display the full region name. This option lets
//you show a 2-code abbreviation instead. **Please note that all the abbreviations have not yet been added. See
//  [this thread](https://github.com/benkeen/country-region-selector/issues/2) that explains how the structure works.** If
//                  a region field is set to 2-char and a user user selects a country that doesn't have a region, it will show the full
//country name instead.


// ------------------------- helpers --------------------------------


// called on country field initialization. It reduces the subset of countries depending on whether the user
// specified a white/blacklist
//function _filterCountries (countries, whitelist, blacklist) {
//  var filteredCountries = countries;
//
//  if (whitelist.length > 0) {
//    filteredCountries = _.filter(countries, function ([countryName, countrySlug]) {
//      return _.contains(whitelist, countrySlug);
//    });
//  } else if (blacklist.length > 0) {
//    filteredCountries = _.filter(countries, function ([countryName, countrySlug]) {
//      return !_.contains(blacklist, countrySlug);
//    });
//  }
//
//  return filteredCountries;
//}



export default RegionDropdown;
