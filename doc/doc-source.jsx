import React from 'react';
import ReactDOM from 'react-dom';
import { CountryDropdown, RegionDropdown } from '../dist/rcrs';
import { CountryRegionsHelper } from '../dist/rcrs-helper';



// Super-duper simple usage example
// --------------------------------
// this uses <CountryRegionsHelper> component to handle the mapping and update of the regions automatically. All you
// need to do is include this in a form and when the form is submitted, the values will be sent along in the POST
// request.
class SimpleExample1 extends React.Component {
  render () {
    return (
      <CountryRegionsHelper>
        <CountryDropdown />
        <RegionDropdown />
      </CountryRegionsHelper>
    );
  }
}


// a more idiomatic React example. This relies on you to store the selected country and region
// and pass the selected values to the components
class StandardExample1 extends React.Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
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
    this.state = { country: '', region: '' };
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
          showDefaultOption={false}
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

class StandardExample3 extends React.Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
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
          defaultOptionLabel="Select a country, man."
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          blankOptionLabel="No country selected, man."
          defaultOptionLabel="Now select a region, pal."
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}

class StandardExample4 extends React.Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
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
          name="my-country-field"
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}

class StandardExample5 extends React.Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
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
          id="my-country-field-id"
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}

class StandardExample6 extends React.Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
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
          classes="my-custom-class second-class"
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}

class StandardExample7 extends React.Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
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
          labelType="short"
          valueType="short"
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          countryValueType="short"
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}

class StandardExample8 extends React.Component {
  constructor (props) {
    super(props);
    this.state = { country: 'Canada', region: 'British Columbia' };
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
          countryValueType="short"
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
    );
  }
}

//ReactDOM.render(<SimpleExample1 />, document.getElementById('simple1'));

ReactDOM.render(<StandardExample1 />, document.getElementById('example1'));
ReactDOM.render(<StandardExample2 />, document.getElementById('example2'));
ReactDOM.render(<StandardExample3 />, document.getElementById('example3'));
ReactDOM.render(<StandardExample4 />, document.getElementById('example4'));
ReactDOM.render(<StandardExample5 />, document.getElementById('example5'));
ReactDOM.render(<StandardExample6 />, document.getElementById('example6'));
ReactDOM.render(<StandardExample7 />, document.getElementById('example7'));
ReactDOM.render(<StandardExample8 />, document.getElementById('example8'));
