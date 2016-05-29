import React from 'react';


// a helper method that handles the mapping of the two dropdowns so you don't have to maintain state explicitly
class CountryRegionsHelper extends React.Component {
  getChildContext () {
    return {
      countries: [],
      regions: []
    };
  }

  componentDidMount () {

    // validation: confirm that a single <RegionDropdown /> and <CountryDropdown> are in its children

  }

  render () {
    return <div>{this.props.children}</div>
  }
}
CountryRegionsHelper.childContextTypes = {
  countries: React.PropTypes.array,
  regions: React.PropTypes.array
};


class CountryDropdown extends React.Component {
  render () {
    return (
      <select>
        <option>COUNTRY</option>
      </select>
    );
  }
}
CountryDropdown.contextTypes = {
  color: React.PropTypes.string
};


class RegionDropdown extends React.Component {
  render () {
    return (
      <select style={{color: this.context.color}}>
        <option>REGION</option>
      </select>
    );
  }
}
RegionDropdown.contextTypes = {
  color: React.PropTypes.string
};


export { CountryRegionsHelper, CountryDropdown, RegionDropdown };
