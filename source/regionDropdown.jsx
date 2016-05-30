import React from 'react';
import _ from 'underscore';
import CountryRegionData from '../source/source-data.js';
import C from '../source/constants.js';


class RegionDropdown extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <select style={{color: this.context.color}}>
        <option>REGION</option>
      </select>
    );
  }
}

//RegionDropdown.contextTypes = {}

RegionDropdown.propTypes = {
  name: React.PropTypes.string,
  country: React.PropTypes.string,
  value: React.PropTypes.oneOf([React.PropTypes.string, React.PropTypes.number]),
  showBlankOption: React.PropTypes.bool,
  blankOptionLabel: React.PropTypes.string,
  onChange: React.PropTypes.func,
  labelType: React.PropTypes.string,
  valueType: React.PropTypes.string
};
RegionDropdown.defaultProps = {
  name: 'rcrs-region',
  country: '',
  value: '',
  showBlankOption: true,
  blankOptionLabel: '-',
  onChange: () => {},
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_SHORT
};

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
