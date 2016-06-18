import React from 'react';
import ReactDOM from 'react-dom';
import { CountryDropdown, RegionDropdown } from '../dist/rcrs';


class ExamplesPage extends React.Component {
  constructor (props) {
    super(props);

    // this just creates storage for all the selections made in the various examples in the page
    this.state = {
      examples: [
        { country: '', region: '' },
        { country: '', region: '' },
        { country: '', region: '' },
        { country: '', region: '' },
        { country: '', region: '' },
        { country: '', region: '' },
        { country: '', region: '' },
        { country: '', region: '' },
        { country: '', region: '' }
      ]
    };
  }

  selectCountry (exampleIndex, val) {
    const updatedValues = this.state.examples;
    updatedValues[exampleIndex].country = val;
    this.setState({ examples: updatedValues });
  }

  selectRegion (exampleIndex, val) {
    const updatedValues = this.state.examples;
    updatedValues[exampleIndex].region = val;
    this.setState({ examples: updatedValues });
  }

  render () {
    const { examples } = this.state;
    return (
      <div>
        <h3>Settings - examples</h3>

        <p>
          This page illustrates all variations of the available settings.
        </p>

        <ol>
          <li>
            <p>Simple, no-frills example.</p>
            <CountryDropdown
              value={examples[0].country}
              onChange={(val) => this.selectCountry(0, val)} />
            <RegionDropdown
              country={examples[0].country}
              value={examples[0].region}
              onChange={(val) => this.selectRegion(0, val)} />
          </li>

          <li>
            <p>
              <code>showDefaultOption</code>. No country dropdown default option.
            </p>
            <CountryDropdown
              showDefaultOption={false}
              value={examples[1].country}
              onChange={(val) => this.selectCountry(1, val)} />
            <RegionDropdown
              country={examples[1].country}
              value={examples[1].region}
              onChange={(val) => this.selectRegion(1, val)} />
          </li>

          <li>
            <p>
              Custom default option texts for both the country and region dropdowns.
            </p>
            <CountryDropdown
              defaultOptionLabel="Select a country, man."
              value={examples[2].country}
              onChange={(val) => this.selectCountry(2, val)} />
            <RegionDropdown
              blankOptionLabel="No country selected, man."
              defaultOptionLabel="Now select a region, pal."
              country={examples[2].country}
              value={examples[2].region}
              onChange={(val) => this.selectRegion(2, val)} />
          </li>

          <li>
            <p>
              Custom name attributes (e.g. if you're using the fields in a standard form submit).
            </p>
            <div id="example4"></div>
          </li>

          <li>
            <p>
              Custom ID attribute.
            </p>
            <div id="example5"></div>
          </li>

          <li>
            <p>
              Custom class.
            </p>
            <div id="example6"></div>
          </li>

          <li>
            <p>
              Abbreviated country and region names. <code>labelType</code>, <code>valueType</code>
            </p>
            <div id="example7"></div>
          </li>

          <li>
            <p>
              Pre-filling the fields.
            </p>
            <div id="example8"></div>
          </li>

        </ol>


      </div>
    );
  }
}

//class StandardExample4 extends React.Component {
//  constructor (props) {
//    super(props);
//    this.state = { country: '', region: '' };
//  }
//
//  selectCountry (val) {
//    this.setState({ country: val });
//  }
//
//  selectRegion (val) {
//    this.setState({ region: val });
//  }
//
//  render () {
//    const { country, region } = this.state;
//    return (
//      <div>
//        <CountryDropdown
//          value={country}
//          name="my-country-field"
//          onChange={(val) => this.selectCountry(val)} />
//        <RegionDropdown
//          country={country}
//          value={region}
//          onChange={(val) => this.selectRegion(val)} />
//      </div>
//    );
//  }
//}
//
//class StandardExample5 extends React.Component {
//  constructor (props) {
//    super(props);
//    this.state = { country: '', region: '' };
//  }
//
//  selectCountry (val) {
//    this.setState({ country: val });
//  }
//
//  selectRegion (val) {
//    this.setState({ region: val });
//  }
//
//  render () {
//    const { country, region } = this.state;
//    return (
//      <div>
//        <CountryDropdown
//          value={country}
//          id="my-country-field-id"
//          onChange={(val) => this.selectCountry(val)} />
//        <RegionDropdown
//          country={country}
//          value={region}
//          onChange={(val) => this.selectRegion(val)} />
//      </div>
//    );
//  }
//}
//
//class StandardExample6 extends React.Component {
//  constructor (props) {
//    super(props);
//    this.state = { country: '', region: '' };
//  }
//
//  selectCountry (val) {
//    this.setState({ country: val });
//  }
//
//  selectRegion (val) {
//    this.setState({ region: val });
//  }
//
//  render () {
//    const { country, region } = this.state;
//    return (
//      <div>
//        <CountryDropdown
//          value={country}
//          classes="my-custom-class second-class"
//          onChange={(val) => this.selectCountry(val)} />
//        <RegionDropdown
//          country={country}
//          value={region}
//          onChange={(val) => this.selectRegion(val)} />
//      </div>
//    );
//  }
//}
//
//class StandardExample7 extends React.Component {
//  constructor (props) {
//    super(props);
//    this.state = { country: '', region: '' };
//  }
//
//  selectCountry (val) {
//    this.setState({ country: val });
//  }
//
//  selectRegion (val) {
//    this.setState({ region: val });
//  }
//
//  render () {
//    const { country, region } = this.state;
//    return (
//      <div>
//        <CountryDropdown
//          value={country}
//          labelType="short"
//          valueType="short"
//          onChange={(val) => this.selectCountry(val)} />
//        <RegionDropdown
//          country={country}
//          countryValueType="short"
//          value={region}
//          onChange={(val) => this.selectRegion(val)} />
//      </div>
//    );
//  }
//}
//
//class StandardExample8 extends React.Component {
//  constructor (props) {
//    super(props);
//    this.state = { country: 'Canada', region: 'British Columbia' };
//  }
//
//  selectCountry (val) {
//    this.setState({ country: val });
//  }
//
//  selectRegion (val) {
//    this.setState({ region: val });
//  }
//
//  render () {
//    const { country, region } = this.state;
//    return (
//      <div>
//        <CountryDropdown
//          value={country}
//          onChange={(val) => this.selectCountry(val)} />
//        <RegionDropdown
//          country={country}
//          value={region}
//          onChange={(val) => this.selectRegion(val)} />
//      </div>
//    );
//  }
//}

ReactDOM.render(<ExamplesPage />, document.getElementById('examples'));
