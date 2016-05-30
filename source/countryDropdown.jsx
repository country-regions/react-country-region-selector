import React from 'react';
import _ from 'underscore';
import CountryRegionData from '../source/source-data.js';
import C from '../source/constants.js';


class CountryDropdown extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      countries: _filterCountries(CountryRegionData, props.whitelist, props.blacklist)
    };
  }

  getCountries () {
    const { valueType, labelType } = this.props;
    return _.map(this.state.countries, function ([countryName, countrySlug]) {
      return (
        <option value={(valueType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName} key={countrySlug}>
          {(labelType === C.DISPLAY_TYPE_SHORT) ? countrySlug : countryName}
        </option>
      );
    });
  }

  getDefaultOption () {
    const { showBlankOption, blankOption } = this.props;
    if (!showBlankOption) {
      return null;
    }
    return (
      <option value="" key="default">{blankOption}</option>
    );
  }

  render () {
    const { name, value, onChange } = this.props;
    return (
      <select name={name} defaultValue={value} onChange={onChange}>
        {this.getDefaultOption()}
        {this.getCountries()}
      </select>
    );
  }
}

CountryDropdown.contextTypes = {
  color: React.PropTypes.string
};
CountryDropdown.propTypes = {
  value: React.PropTypes.oneOf([React.PropTypes.string, React.PropTypes.number]),
  name: React.PropTypes.string,
  showBlankOption: React.PropTypes.bool,
  blankOptionLabel: React.PropTypes.oneOf([React.PropTypes.string, React.PropTypes.number]),
  onChange: React.PropTypes.func,
  labelType: React.PropTypes.string,
  valueType: React.PropTypes.string,
  whitelist: React.PropTypes.array,
  blacklist: React.PropTypes.array
};
CountryDropdown.defaultProps = {
  value: '',
  name: 'rcrs-country',
  showDefaultOption: true,
  defaultOption: 'Select Country',
  onChange: () => {},
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_SHORT,
  whitelist: [],
  blacklist: []
};



// ------------------------- helpers --------------------------------


// called on country field initialization. It reduces the subset of countries depending on whether the user
// specified a white/blacklist
function _filterCountries (countries, whitelist, blacklist) {
  var filteredCountries = countries;

  if (whitelist.length > 0) {
    filteredCountries = _.filter(countries, function ([countryName, countrySlug]) {
      return _.contains(whitelist, countrySlug);
    });
  } else if (blacklist.length > 0) {
    filteredCountries = _.filter(countries, function ([countryName, countrySlug]) {
      return !_.contains(blacklist, countrySlug);
    });
  }

  return filteredCountries;
}


export default CountryDropdown;
