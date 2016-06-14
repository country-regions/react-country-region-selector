import React from 'react';
import ReactDOM from 'react-dom';
import { CountryDropdown, RegionDropdown } from '../dist/rcrs';
import { CountryRegionsHelper } from '../dist/rcrs-helper';



// Super-duper simple usage example
// --------------------------------
// this uses <CountryRegionsHelper> component to handle the mapping and update of the regions automatically. All you
// need to do is include this in a form and when the form is submitted, the values will be sent along in the POST
// request.
//class SimpleExample extends React.Component {
//  render () {
//    return (
//      <CountryRegionsHelper>
//        <CountryDropdown />
//        <RegionDropdown />
//      </CountryRegionsHelper>
//    );
//  }
//}


// a more idiomatic React example. This relies on you to store the selected country and region
// and pass the selected values to the components
class StandardExample1 extends React.Component {
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


class StandardExample2 extends React.Component {
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

ReactDOM.render(<StandardExample1 />, document.getElementById('example1'));
