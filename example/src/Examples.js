import React, {Component} from 'react';


class ExamplesPage extends React {
    constructor(props) {
        super(props);

        this.getCountryValue = this.getCountryValue.bind(this);
        this.getRegionValue = this.getRegionValue.bind(this);

        // we really only need to stash the selected region + country in state, but I was feeling wacky
        this.state = {
            examples: [
                {
                    label: 'Simple, no-frills example.',
                    jsx: () => {
                        return (
                            <div>
                                <CountryDropdown
                                    value={this.getCountryValue(0)}
                                    onChange={(val) => this.selectCountry(0, val)}/>
                                <RegionDropdown
                                    country={this.getCountryValue(0)}
                                    value={this.getRegionValue(0)}
                                    onChange={(val) => this.selectRegion(0, val)}/>
                            </div>
                        );
                    },
                    codeVisible: false,
                    code: '&lt;CountryDropdown\n  value={country}\n  onChange={selectCountry} />\n&lt;RegionDropdown\n  country={country}\n  value={region}\n  onChange={selectRegion} />',
                    country: '',
                    region: ''
                },

                {
                    label: 'Region field disabled until a country is selected.',
                    jsx: () => {
                        return (
                            <div>
                                <CountryDropdown
                                    value={this.getCountryValue(1)}
                                    onChange={(val) => this.selectCountry(1, val)}/>
                                <RegionDropdown
                                    disableWhenEmpty={true}
                                    country={this.getCountryValue(1)}
                                    value={this.getRegionValue(1)}
                                    onChange={(val) => this.selectRegion(1, val)}/>
                            </div>
                        );
                    },
                    codeVisible: false,
                    code: '&lt;CountryDropdown\n  value={country}\n  onChange={selectCountry} />\n&lt;RegionDropdown\n  disableWhenEmpty={true}\n  country={country}\n  value={region}\n  onChange={selectRegion} />',
                    country: '',
                    region: ''
                },

                {
                    label: 'No country or region dropdown default option.',
                    jsx: () => {
                        return (
                            <div>
                                <CountryDropdown
                                    showDefaultOption={false}
                                    value={this.getCountryValue(2)}
                                    onChange={(val) => this.selectCountry(2, val)}/>
                                <RegionDropdown
                                    showDefaultOption={false}
                                    country={this.getCountryValue(2)}
                                    value={this.getRegionValue(2)}
                                    onChange={(val) => this.selectRegion(2, val)}/>
                            </div>
                        );
                    },
                    codeVisible: false,
                    code: '&lt;CountryDropdown\n  showDefaultOption={false}\n  value={country}\n  onChange={selectCountry} />\n&lt;RegionDropdown\n  showDefaultOption={false}\n  country={country}\n  value={region}\n  onChange={selectRegion} />',
                    country: '',
                    region: ''
                },

                {
                    label: 'Custom default option texts for both the country and region dropdowns.',
                    jsx: () => {
                        return (
                            <div>
                                <CountryDropdown
                                    defaultOptionLabel="Select a country, man."
                                    value={this.getCountryValue(3)}
                                    onChange={(val) => this.selectCountry(3, val)}/>
                                <RegionDropdown
                                    blankOptionLabel="No country selected, man."
                                    defaultOptionLabel="Now select a region, pal."
                                    country={this.getCountryValue(3)}
                                    value={this.getRegionValue(3)}
                                    onChange={(val) => this.selectRegion(3, val)}/>
                            </div>
                        );
                    },
                    codeVisible: false,
                    code: '&lt;CountryDropdown\n  defaultOptionLabel="Select a country, man."\n  value={country}\n  onChange={selectCountry} />\n&lt;RegionDropdown\n  blankOptionLabel="No country selected, man."\n  defaultOptionLabel="Now select a region, pal."\n  country={country}\n  value={region}\n  onChange={selectRegion} />',
                    country: '',
                    region: ''
                },

                {
                    label: 'Custom name, class and ID attributes for both dropdowns.',
                    jsx: () => {
                        return (
                            <div>
                                <CountryDropdown
                                    value={this.getCountryValue(4)}
                                    id="my-country-field-id"
                                    name="my-country-field"
                                    classes="my-custom-class second-class"
                                    onChange={(val) => this.selectCountry(4, val)}/>
                                <RegionDropdown
                                    country={this.getCountryValue(4)}
                                    value={this.getRegionValue(4)}
                                    name="my-region-field-name"
                                    id="my-region-field-id"
                                    classes="another-custom-class"
                                    onChange={(val) => this.selectRegion(4, val)}/>
                            </div>
                        );
                    },
                    codeVisible: false,
                    code: '&lt;CountryDropdown\n  value={country}\n  id="my-country-field-id"\n  name="my-country-field"\n  classes="my-custom-class second-class"\n  onChange={selectCountry} />\n&lt;RegionDropdown\n  country={country}\n  value={region}\n  name="my-region-field-name"\n  id="my-region-field-id"\n  classes="another-custom-class"\n  onChange={selectRegion} />',
                    country: '',
                    region: ''
                },

                {
                    label: 'Abbreviated country and region names.',
                    jsx: () => {
                        return (
                            <div>
                                <CountryDropdown
                                    value={this.getCountryValue(5)}
                                    labelType="short"
                                    valueType="short"
                                    onChange={(val) => this.selectCountry(5, val)}/>
                                <RegionDropdown
                                    country={this.getCountryValue(5)}
                                    value={this.getRegionValue(5)}
                                    countryValueType="short"
                                    labelType="short"
                                    valueType="short"
                                    onChange={(val) => this.selectRegion(5, val)}/>
                            </div>
                        );
                    },
                    codeVisible: false,
                    code: '&lt;CountryDropdown\n  value={country}\n  labelType="short"\n  valueType="short"\n  onChange={selectCountry} />\n&lt;RegionDropdown\n  country={country}\n  value={region}\n  countryValueType="short"\n  labelType="short"\n  valueType="short"\n  onChange={selectRegion} />',
                    country: '',
                    region: ''
                },

                {
                    label: 'Specify which countries should appear. This just shows the UK, United States and Canada. See the countryShortCode property in the source data for the country shortcodes you need to pass here.',
                    jsx: () => {
                        return (
                            <div>
                                <CountryDropdown
                                    value={this.getCountryValue(6)}
                                    onChange={(val) => this.selectCountry(6, val)}
                                    whitelist={['GB', 'US', 'CA']}/>
                                <RegionDropdown
                                    country={this.getCountryValue(6)}
                                    value={this.getRegionValue(6)}
                                    onChange={(val) => this.selectRegion(6, val)}/>
                            </div>
                        );
                    },
                    codeVisible: false,
                    code: '&lt;CountryDropdown\n  value={country}\n  labelType="short"\n  valueType="short"\n  onChange={selectCountry} />\n&lt;RegionDropdown\n  country={country}\n  value={region}\n  countryValueType="short"\n  labelType="short"\n  valueType="short"\n  onChange={selectRegion} />',
                    country: '',
                    region: ''
                },

                {
                    label: 'Specify which countries should NOT appear. This omits all countries that start with "A".',
                    jsx: () => {
                        return (
                            <div>
                                <CountryDropdown
                                    value={this.getCountryValue(7)}
                                    onChange={(val) => this.selectCountry(7, val)}
                                    blacklist={['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ']}/>
                                <RegionDropdown
                                    country={this.getCountryValue(7)}
                                    value={this.getRegionValue(7)}
                                    onChange={(val) => this.selectRegion(7, val)}/>
                            </div>
                        );
                    },
                    codeVisible: false,
                    code: "&lt;CountryDropdown\n  value={country}\n  onChange={selectCountry}\n  blacklist={['AF','AX','AL','DZ','AS','AD','AO','AI','AQ','AG']} />\n&lt;RegionDropdown\n  country={country}\n  value={region}\n  onChange={selectRegion} />",
                    country: '',
                    region: ''
                },

                {
                    label: 'Explicitly disabling the country and region dropdowns (with defaults).',
                    jsx: () => {
                        return (
                            <div>
                                <CountryDropdown
                                    value={this.getCountryValue(8)}
                                    onChange={(val) => this.selectCountry(8, val)}
                                    blacklist={['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ']}
                                    disabled={true}/>
                                <RegionDropdown
                                    country={this.getCountryValue(8)}
                                    value={this.getRegionValue(8)}
                                    onChange={(val) => this.selectRegion(8, val)}
                                    disabled={true}/>
                            </div>
                        );
                    },
                    codeVisible: false,
                    code: "&lt;CountryDropdown\n  value=\"United States\"\n  onChange={selectCountry}\n  disabled={true} />\n&lt;RegionDropdown\n  country={country}\n  value=\"Washington\"\n  onChange={selectRegion}\n disabled={true} />",
                    country: 'United States',
                    region: 'Washington'
                }

            ]
        };
    }

    selectCountry(exampleIndex, val) {
        const updatedValues = this.state.examples;
        updatedValues[exampleIndex].country = val;
        this.setState({examples: updatedValues});
    }

    selectRegion(exampleIndex, val) {
        const updatedValues = this.state.examples;
        updatedValues[exampleIndex].region = val;
        this.setState({examples: updatedValues});
    }

    getCountryValue(index) {
        return this.state.examples[index].country;
    }

    getRegionValue(index) {
        return this.state.examples[index].region;
    }

    toggleCode(exampleIndex) {
        const updatedValues = this.state.examples;
        updatedValues[exampleIndex].codeVisible = !updatedValues[exampleIndex].codeVisible;
        this.setState({examples: updatedValues});
    }

    getExamples() {
        let i = 0;
        return this.state.examples.map((example) => {
            let j = i++;
            return (
                <section key={i}>
                    <p>
                        <span className="counter">{i}.</span>
                        {example.label}
                        <span className="toggleCode" title="Toggle code"
                              onClick={() => this.toggleCode(j)}>&lt;/&gt;</span>
                    </p>
                    {example.jsx()}
                    <pre className="hljs html" style={{display: example.codeVisible ? 'block' : 'none'}}>
            <code className="html" dangerouslySetInnerHTML={{__html: example.code}}/>
          </pre>
                </section>
            );
        });
    }

    render() {
        return (
            <div>
                {this.getExamples()}
            </div>
        );
    }
}

export default ExamplesPage;