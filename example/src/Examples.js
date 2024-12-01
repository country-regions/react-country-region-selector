import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Example1 = () => {
  const [codeVisible, setCodeVisible] = useState(false);
  const [country, setCountry] = useState(null);
  const [region, setRegion] = useState(null);

  const code = codeVisible ? (
    <SyntaxHighlighter language="html" style={theme}>{`
<CountryDropdown
  value={country}
  onChange={selectCountry}
/>
<RegionDropdown
  country={country}
  value={region}
  onChange={selectRegion}
/>
    `}</SyntaxHighlighter>
  ) : null;

  return (
    <section>
      <p>
        <span className="counter">1.</span> Simple, no-frills example.
        <span
          className="toggleCode"
          title="Toggle code"
          onClick={() => setCodeVisible(!codeVisible)}
        >
          &lt;/&gt;
        </span>
      </p>
      <div>
        <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
      </div>
      {code}
    </section>
  );
};

// const getExample1 = () => ({
//   label: 'Simple, no-frills example.',
//   jsx: () => {
//     return (
//       <div>
//         <CountryDropdown
//           value={getCountryValue(0)}
//           onChange={(val) => selectCountry(0, val)}
//         />
//         <RegionDropdown
//           country={getCountryValue(0)}
//           value={getRegionValue(0)}
//           onChange={(val) => selectRegion(0, val)}
//         />
//       </div>
//     );
//   },
//   codeVisible: false,
//   code: `<CountryDropdown
//   value={country}
//   onChange={selectCountry}
// />
// <RegionDropdown
//   country={country}
//   value={region}
//   onChange={selectRegion}
// />`,
//   country: '',
//   region: '',
// });

const Examples = () => {
  // const [examples, setExamples] = useState([
  //   getExample1()
  //       {
  //         label: 'Region field disabled until a country is selected.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={getCountryValue(1)}
  //                 onChange={(val) => selectCountry(1, val)}
  //               />
  //               <RegionDropdown
  //                 disableWhenEmpty={true}
  //                 country={getCountryValue(1)}
  //                 value={getRegionValue(1)}
  //                 onChange={(val) => selectRegion(1, val)}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value={country}
  // 	onChange={selectCountry}
  // />
  // <RegionDropdown
  // 	disableWhenEmpty={true}
  // 	country={country}
  // 	value={region}
  // 	onChange={selectRegion}
  // />`,
  //         country: '',
  //         region: '',
  //       },

  //       {
  //         label: 'No country or region dropdown default option.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 showDefaultOption={false}
  //                 value={this.getCountryValue(2)}
  //                 onChange={(val) => this.selectCountry(2, val)}
  //               />
  //               <RegionDropdown
  //                 showDefaultOption={false}
  //                 country={this.getCountryValue(2)}
  //                 value={this.getRegionValue(2)}
  //                 onChange={(val) => this.selectRegion(2, val)}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	showDefaultOption={false}
  // 	value={country}
  // 	onChange={selectCountry}
  // />
  // <RegionDropdown
  // 	showDefaultOption={false}
  // 	country={country}
  // 	value={region}
  // 	onChange={selectRegion}
  // />`,
  //         country: '',
  //         region: '',
  //       },

  //       {
  //         label:
  //           'Custom default option texts for both the country and region dropdowns.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 defaultOptionLabel="Select a country, man."
  //                 value={this.getCountryValue(3)}
  //                 onChange={(val) => this.selectCountry(3, val)}
  //               />
  //               <RegionDropdown
  //                 blankOptionLabel="No country selected, man."
  //                 defaultOptionLabel="Now select a region, pal."
  //                 country={this.getCountryValue(3)}
  //                 value={this.getRegionValue(3)}
  //                 onChange={(val) => this.selectRegion(3, val)}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	defaultOptionLabel="Select a country, man."
  // 	value={country}
  // 	onChange={selectCountry}
  // />
  // <RegionDropdown
  // 	blankOptionLabel="No country selected, man."
  // 	defaultOptionLabel="Now select a region, pal."
  // 	country={country}
  // 	value={region}
  // 	onChange={selectRegion}
  // />`,
  //         country: '',
  //         region: '',
  //       },

  //       {
  //         label: 'Custom name, class and ID attributes for both dropdowns.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(4)}
  //                 id="my-country-field-id"
  //                 name="my-country-field"
  //                 className="my-custom-class second-class"
  //                 onChange={(val) => this.selectCountry(4, val)}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(4)}
  //                 value={this.getRegionValue(4)}
  //                 name="my-region-field-name"
  //                 id="my-region-field-id"
  //                 className="another-custom-class"
  //                 onChange={(val) => this.selectRegion(4, val)}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value={country}
  // 	id="my-country-field-id"
  // 	name="my-country-field"
  // 	className="my-custom-class second-class"
  // 	onChange={selectCountry}
  // />
  // <RegionDropdown
  // 	country={country}
  // 	value={region}
  // 	name="my-region-field-name"
  // 	id="my-region-field-id"
  // 	className="another-custom-class"
  // 	onChange={selectRegion}
  // />`,
  //         country: '',
  //         region: '',
  //       },

  //       {
  //         label: 'Abbreviated country and region names.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(5)}
  //                 labelType="short"
  //                 valueType="short"
  //                 onChange={(val) => this.selectCountry(5, val)}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(5)}
  //                 value={this.getRegionValue(5)}
  //                 countryValueType="short"
  //                 labelType="short"
  //                 valueType="short"
  //                 onChange={(val) => this.selectRegion(5, val)}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value={country}
  // 	labelType="short"
  // 	valueType="short"
  // 	onChange={selectCountry}
  // />
  // <RegionDropdown
  // 	country={country}
  // 	value={region}
  // 	countryValueType="short"
  // 	labelType="short"
  // 	valueType="short"
  // 	onChange={selectRegion}
  // />`,
  //         country: '',
  //         region: '',
  //       },

  //       {
  //         label:
  //           'Specify which countries should appear. This just shows the UK, United States and Canada. See the countryShortCode property in the source data for the country shortcodes you need to pass here.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(6)}
  //                 onChange={(val) => this.selectCountry(6, val)}
  //                 whitelist={['GB', 'US', 'CA']}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(6)}
  //                 value={this.getRegionValue(6)}
  //                 onChange={(val) => this.selectRegion(6, val)}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value={country}
  // 	labelType="short"
  // 	valueType="short"
  // 	onChange={selectCountry}
  // />
  // <RegionDropdown
  // 	country={country}
  // 	value={region}
  // 	countryValueType="short"
  // 	labelType="short"
  // 	valueType="short"
  // 	onChange={selectRegion}
  // />`,
  //         country: '',
  //         region: '',
  //       },

  //       {
  //         label:
  //           'Specify which countries should NOT appear. This omits all countries that start with "A".',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(7)}
  //                 onChange={(val) => this.selectCountry(7, val)}
  //                 blacklist={[
  //                   'AF',
  //                   'AX',
  //                   'AL',
  //                   'DZ',
  //                   'AS',
  //                   'AD',
  //                   'AO',
  //                   'AI',
  //                   'AQ',
  //                   'AG',
  //                   'AR',
  //                   'AM',
  //                   'AW',
  //                   'AU',
  //                   'AT',
  //                   'AZ',
  //                 ]}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(7)}
  //                 value={this.getRegionValue(7)}
  //                 onChange={(val) => this.selectRegion(7, val)}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value={country}
  // 	onChange={selectCountry}
  // 	blacklist={['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG']}
  // />
  // <RegionDropdown
  // 	country={country}
  // 	value={region}
  // 	onChange={selectRegion}
  // />`,
  //         country: '',
  //         region: '',
  //       },

  //       {
  //         label:
  //           'Explicitly disabling the country and region dropdowns (with defaults).',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(8)}
  //                 onChange={(val) => this.selectCountry(8, val)}
  //                 blacklist={[
  //                   'AF',
  //                   'AX',
  //                   'AL',
  //                   'DZ',
  //                   'AS',
  //                   'AD',
  //                   'AO',
  //                   'AI',
  //                   'AQ',
  //                   'AG',
  //                   'AR',
  //                   'AM',
  //                   'AW',
  //                   'AU',
  //                   'AT',
  //                   'AZ',
  //                 ]}
  //                 disabled={true}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(8)}
  //                 value={this.getRegionValue(8)}
  //                 onChange={(val) => this.selectRegion(8, val)}
  //                 disabled={true}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value="United States"
  // 	onChange={selectCountry}
  // 	disabled={true}
  // />
  // <RegionDropdown
  // 	country={country}
  // 	value="Washington"
  // 	onChange={selectRegion}
  // 	disabled={true}
  // />`,
  //         country: 'United States',
  //         region: 'Washington',
  //       },

  //       {
  //         label:
  //           'Blacklist specific regions. Alberta is removed from the Canadian provinces list and Washington and Oregon are omitted from the US state list.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(9)}
  //                 onChange={(val) => this.selectCountry(9, val)}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(9)}
  //                 value={this.getRegionValue(9)}
  //                 onChange={(val) => this.selectRegion(9, val)}
  //                 blacklist={{
  //                   CA: ['Alberta'],
  //                   US: ['Washington', 'Oregon'],
  //                 }}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value={this.getCountryValue(9)}
  // 	onChange={(val) => this.selectCountry(9, val)}
  // 	whitelist={["CA", "US"]}
  // />
  // <RegionDropdown
  // 	country={this.getCountryValue(9)}
  // 	value={this.getRegionValue(9)}
  // 	onChange={(val) => this.selectRegion(9, val)}
  // 	blacklist={{
  // 		CA: ["Alberta"],
  // 		US: ["Washington", "Oregon"]
  // 	}}
  // />`,
  //         country: 'United States',
  //         region: 'Alabama',
  //       },

  //       {
  //         label: 'Whitelist specific regions.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(10)}
  //                 onChange={(val) => this.selectCountry(10, val)}
  //                 whitelist={['CA', 'US']}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(10)}
  //                 value={this.getRegionValue(10)}
  //                 onChange={(val) => this.selectRegion(10, val)}
  //                 whitelist={{
  //                   CA: ['BC', 'AB', 'MB'],
  //                   US: ['Washington', 'Oregon', 'Illinois'],
  //                 }}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value={this.getCountryValue(10)}
  // 	onChange={(val) => this.selectCountry(10, val)}
  // 	whitelist={["CA", "US"]}
  // />
  // <RegionDropdown
  // 	country={this.getCountryValue(10)}
  // 	value={this.getRegionValue(10)}
  // 	onChange={(val) => this.selectRegion(10, val)}
  // 	whitelist={{
  // 		CA: ["BC", "AB", "MB"],
  // 		US: ["Washington", "Oregon", "Illinois"]
  // 	}}
  // />`,
  //         country: 'United States',
  //         region: 'Washington',
  //       },

  //       {
  //         label:
  //           'Arbitrary attributes (style, tabindex) passed to Country and Region dropdown',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(11)}
  //                 onChange={(val) => this.selectCountry(11, val)}
  //                 style={{
  //                   backgroundColor: 'blue',
  //                   color: 'white',
  //                   fontSize: 20,
  //                 }}
  //                 tabIndex={1000}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(11)}
  //                 value={this.getRegionValue(11)}
  //                 onChange={(val) => this.selectRegion(11, val)}
  //                 style={{
  //                   backgroundColor: 'green',
  //                   color: 'white',
  //                 }}
  //                 tabIndex={1001}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value="United States"
  // 	onChange={selectCountry}
  // 	style={{
  // 		backgroundColor: 'blue',
  // 		color: 'white',
  // 		fontSize: 20
  // 	}}
  // 	tabIndex={1000}
  // 	disabled={true}
  // />
  // <RegionDropdown
  // 	country={country}
  // 	value="Washington"
  // 	onChange={selectRegion}
  // 	style={{
  // 		backgroundColor: 'green',
  // 		color: 'white'
  // 	}}
  // 	tabIndex={1001}
  // 	disabled={true}
  // />`,
  //         country: '',
  //         region: '',
  //       },

  //       {
  //         label: 'With custom options in the RegionDropdown.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(12)}
  //                 onChange={(val) => this.selectCountry(12, val)}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(12)}
  //                 value={this.getRegionValue(12)}
  //                 customOptions={['-- Custom option 1', '-- Custom option 2']}
  //                 onChange={(val) => this.selectRegion(12, val)}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value={country}
  // 	onChange={selectCountry}
  // />

  // <RegionDropdown
  // 	country={country}
  // 	value={region}
  // 	onChange={selectRegion}
  // 	customOptions={["-- Custom option 1", "-- Custom option 2"]}
  // />`,
  //         country: '',
  //         region: '',
  //       },

  //       {
  //         label:
  //           'Make Canada, United States and the UK appear first in the dropdown list.',
  //         jsx: () => {
  //           return (
  //             <div>
  //               <CountryDropdown
  //                 value={this.getCountryValue(13)}
  //                 onChange={(val) => this.selectCountry(13, val)}
  //                 priorityOptions={['CA', 'US', 'GB']}
  //               />
  //               <RegionDropdown
  //                 country={this.getCountryValue(13)}
  //                 value={this.getRegionValue(13)}
  //                 onChange={(val) => this.selectRegion(13, val)}
  //               />
  //             </div>
  //           );
  //         },
  //         codeVisible: false,
  //         code: `<CountryDropdown
  // 	value={country}
  // 	onChange={selectCountry}
  // 	priorityOptions={["CA", "US", "GB"]}
  // />
  // <RegionDropdown
  // 	country={country}
  // 	value={region}
  // 	onChange={selectRegion}
  // />`,
  //         country: '',
  //         region: '',
  //       },
  //   ],
  // };

  // const selectCountry = (exampleIndex, val) => {
  //   const updatedValues = this.state.examples;
  //   updatedValues[exampleIndex].country = val;
  //   this.setState({ examples: updatedValues });
  // };

  // const selectRegion = (exampleIndex, val) => {
  //   const updatedValues = this.state.examples;
  //   updatedValues[exampleIndex].region = val;
  //   this.setState({ examples: updatedValues });
  // };

  // const getCountryValue = (index) => examples[index].country;
  // const getRegionValue = (index) => examples[index].region;

  // const toggleCode = (exampleIndex) => {
  //   updatedValues[exampleIndex].codeVisible =
  //     !updatedValues[exampleIndex].codeVisible;
  //   this.setState({ examples: updatedValues });
  // };

  // const getExamples = () => {
  //   let i = 0;
  //   return examples.map((example) => {
  //     let j = i++;
  //     return (
  //       <section key={i}>
  //         <p>
  //           <span className="counter">{i}.</span>
  //           {example.label}
  //           <span
  //             className="toggleCode"
  //             title="Toggle code"
  //             onClick={() => this.toggleCode(j)}
  //           >
  //             &lt;/&gt;
  //           </span>
  //         </p>
  //         {example.jsx()}
  //         <div style={{ display: example.codeVisible ? 'block' : 'none' }}>
  //           <SyntaxHighlighter language="html" style={theme}>
  //             {example.code}
  //           </SyntaxHighlighter>
  //         </div>
  //       </section>
  //     );
  //   });
  // };

  return (
    <>
      <Example1 />
    </>
  );
};

export default Examples;
