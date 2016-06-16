import React from 'react';


// Helper element to wrap <CountryDropdown /> and <RegionDropdown /> and tie them together so the user doesn't
// explicitly have to handle their own state
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
