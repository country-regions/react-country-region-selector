import React from 'react';
import _ from 'underscore';
import CountryRegionData from '../source/source-data.js';
import C from '../source/constants.js';


class CountryDropdown extends React.Component {

  getCountries () {
    return _.map(CountryRegionData, function (countryData) {
      const countryName = countryData[0];
      const countrySlug = countryData[1];
      return <option value="">{countryName}</option>;
    });
  }

  render () {
    return (
      <select>
        {this.getCountries()}
      </select>
    );
  }
}
CountryDropdown.contextTypes = {
  color: React.PropTypes.string
};
CountryDropdown.PropTypes = {
  value: React.PropTypes.string, // TODO or number
  showDefaultOption: React.PropTypes.bool,
  defaultOption: React.PropTypes.string, // TODO or number
  labelType: React.PropTypes.string, // "full", "short"
  valueType: React.PropTypes.string, // "full", "short"
  whitelist: React.PropTypes.array,
  blacklist: React.PropTypes.array
};
CountryDropdown.defaultProps = {
  value: '',
  showDefaultOption: true,
  defaultOption: 'Select Country',
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_SHORT,
  whitelist: [],
  blacklist: []
};

export default CountryDropdown;
