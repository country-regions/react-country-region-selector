import React from 'react';
import ReactDOM from 'react-dom';
import { CountryDropdown, RegionDropdown } from '../dist/rcrs';
import { CountryRegionsHelper } from '../dist/rcrs-helper';



// this example uses the CountryRegions component to handle the mapping and update of the regions automatically. All you
// need to do is include this in a form and when the form is submitted, the values will be sent along in the POST
// request
//class SimpleExample extends React.Component {
//
//  // just for illustration. You can programmatically access the values of the dropdowns via their getValue() methods
//  getValues () {
//    console.log({
//      "region: ": this.refs.region.getValue(),
//      "country: ": this.refs.country.getValue()
//    });
//  }
//
//  render () {
//    return (
//      <CountryRegionsHelper>
//        <CountryDropdown ref="country" />
//        <RegionDropdown ref="region" />
//      </CountryRegionsHelper>
//    );
//  }
//}


// a more idiomatic React example. This relies on you to maintain the selected country and region
// in your store and pass the selected values to the components explicitly
class StandardExample extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      country: '',
      region: ''
    };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}



const appRoot = document.createElement('div');
document.body.appendChild(appRoot);
ReactDOM.render(<StandardExample />, appRoot);
