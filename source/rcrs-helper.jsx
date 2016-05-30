import React from 'react';


// a helper method that handles the mapping of the two dropdowns so the user doesn't have to explicitly maintain state
// and provide all the related boilerplate
class CountryRegionsHelper extends React.Component {
  getChildContext () {
    return {
      countries: [],
      regions: []
    };
  }

  componentDidMount () {
    // validation: confirm that a single <RegionDropdown /> and <CountryDropdown> are contained in its children
  }

  render () {
    return <div>{this.props.children}</div>
  }
}
CountryRegionsHelper.childContextTypes = {
  countries: React.PropTypes.array,
  regions: React.PropTypes.array
};


export { CountryRegionsHelper };
