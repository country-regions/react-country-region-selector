require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _libRcrs = require('../../lib/rcrs');

var ExamplesPage = (function (_React$Component) {
  _inherits(ExamplesPage, _React$Component);

  function ExamplesPage(props) {
    _classCallCheck(this, ExamplesPage);

    _get(Object.getPrototypeOf(ExamplesPage.prototype), 'constructor', this).call(this, props);

    // this just creates storage for all the selections made in the various examples in the page
    this.state = {
      examples: [{ country: '', region: '' }, { country: '', region: '' }, { country: '', region: '' }, { country: '', region: '' }, { country: '', region: '' }, { country: '', region: '' }, { country: '', region: '' }, { country: '', region: '' }, { country: '', region: '' }]
    };
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

  _createClass(ExamplesPage, [{
    key: 'selectCountry',
    value: function selectCountry(exampleIndex, val) {
      var updatedValues = this.state.examples;
      updatedValues[exampleIndex].country = val;
      this.setState({ examples: updatedValues });
    }
  }, {
    key: 'selectRegion',
    value: function selectRegion(exampleIndex, val) {
      var updatedValues = this.state.examples;
      updatedValues[exampleIndex].region = val;
      this.setState({ examples: updatedValues });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var examples = this.state.examples;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'h3',
          null,
          'Settings - examples'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'This page illustrates all variations of the available settings.'
        ),
        _react2['default'].createElement(
          'ol',
          null,
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'p',
              null,
              'Simple, no-frills example.'
            ),
            _react2['default'].createElement(_libRcrs.CountryDropdown, {
              value: examples[0].country,
              onChange: function (val) {
                return _this.selectCountry(0, val);
              } }),
            _react2['default'].createElement(_libRcrs.RegionDropdown, {
              country: examples[0].country,
              value: examples[0].region,
              onChange: function (val) {
                return _this.selectRegion(0, val);
              } })
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'p',
              null,
              _react2['default'].createElement(
                'code',
                null,
                'showDefaultOption'
              ),
              '. No country dropdown default option.'
            ),
            _react2['default'].createElement(_libRcrs.CountryDropdown, {
              showDefaultOption: false,
              value: examples[1].country,
              onChange: function (val) {
                return _this.selectCountry(1, val);
              } }),
            _react2['default'].createElement(_libRcrs.RegionDropdown, {
              country: examples[1].country,
              value: examples[1].region,
              onChange: function (val) {
                return _this.selectRegion(1, val);
              } })
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'p',
              null,
              'Custom default option texts for both the country and region dropdowns.'
            ),
            _react2['default'].createElement(_libRcrs.CountryDropdown, {
              defaultOptionLabel: 'Select a country, man.',
              value: examples[2].country,
              onChange: function (val) {
                return _this.selectCountry(2, val);
              } }),
            _react2['default'].createElement(_libRcrs.RegionDropdown, {
              blankOptionLabel: 'No country selected, man.',
              defaultOptionLabel: 'Now select a region, pal.',
              country: examples[2].country,
              value: examples[2].region,
              onChange: function (val) {
                return _this.selectRegion(2, val);
              } })
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'p',
              null,
              'Custom name attributes (e.g. if you\'re using the fields in a standard form submit).'
            ),
            _react2['default'].createElement('div', { id: 'example4' })
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'p',
              null,
              'Custom ID attribute.'
            ),
            _react2['default'].createElement('div', { id: 'example5' })
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'p',
              null,
              'Custom class.'
            ),
            _react2['default'].createElement('div', { id: 'example6' })
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'p',
              null,
              'Abbreviated country and region names. ',
              _react2['default'].createElement(
                'code',
                null,
                'labelType'
              ),
              ', ',
              _react2['default'].createElement(
                'code',
                null,
                'valueType'
              )
            ),
            _react2['default'].createElement('div', { id: 'example7' })
          ),
          _react2['default'].createElement(
            'li',
            null,
            _react2['default'].createElement(
              'p',
              null,
              'Pre-filling the fields.'
            ),
            _react2['default'].createElement('div', { id: 'example8' })
          )
        )
      );
    }
  }]);

  return ExamplesPage;
})(_react2['default'].Component);

_reactDom2['default'].render(_react2['default'].createElement(ExamplesPage, null), document.getElementById('examples'));


},{"../../lib/rcrs":3,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var C = {
  DISPLAY_TYPE_FULL: 'full',
  DISPLAY_TYPE_SHORT: 'short',
  REGION_LIST_DELIMITER: '|',
  SINGLE_REGION_DELIMITER: '~'
};

exports['default'] = C;
module.exports = exports['default'];


},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i['return']) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }
  };
})();

var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
})();

var _get = function get(_x, _x2, _x3) {
  var _again = true;_function: while (_again) {
    var object = _x,
        property = _x2,
        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);if (parent === null) {
        return undefined;
      } else {
        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
      }
    } else if ('value' in desc) {
      return desc.value;
    } else {
      var getter = desc.get;if (getter === undefined) {
        return undefined;
      }return getter.call(receiver);
    }
  }
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sourceDataJs = require('./source-data.js');

var _sourceDataJs2 = _interopRequireDefault(_sourceDataJs);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _constantsJs = require('./constants.js');

var _constantsJs2 = _interopRequireDefault(_constantsJs);

var CountryDropdown = (function (_React$Component) {
  _inherits(CountryDropdown, _React$Component);

  function CountryDropdown(props) {
    _classCallCheck(this, CountryDropdown);

    _get(Object.getPrototypeOf(CountryDropdown.prototype), 'constructor', this).call(this, props);
    this.state = {
      countries: _filterCountries(_sourceDataJs2['default'], props.whitelist, props.blacklist)
    };
  }

  _createClass(CountryDropdown, [{
    key: 'getCountries',
    value: function getCountries() {
      var _props = this.props;
      var valueType = _props.valueType;
      var labelType = _props.labelType;

      return this.state.countries.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var countryName = _ref2[0];
        var countrySlug = _ref2[1];

        return _react2['default'].createElement('option', { value: valueType === _constantsJs2['default'].DISPLAY_TYPE_SHORT ? countrySlug : countryName, key: countrySlug }, labelType === _constantsJs2['default'].DISPLAY_TYPE_SHORT ? countrySlug : countryName);
      });
    }
  }, {
    key: 'getDefaultOption',
    value: function getDefaultOption() {
      var _props2 = this.props;
      var showDefaultOption = _props2.showDefaultOption;
      var defaultOptionLabel = _props2.defaultOptionLabel;

      if (!showDefaultOption) {
        return null;
      }
      return _react2['default'].createElement('option', { value: '', key: 'default' }, defaultOptionLabel);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var name = _props3.name;
      var id = _props3.id;
      var classes = _props3.classes;
      var value = _props3.value;
      var _onChange = _props3.onChange;

      var attrs = {
        name: name,
        defaultValue: value,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        }
      };
      if (id) {
        attrs.id = id;
      }
      if (classes) {
        attrs.classes = classes;
      }

      return _react2['default'].createElement('select', attrs, this.getDefaultOption(), this.getCountries());
    }
  }]);

  return CountryDropdown;
})(_react2['default'].Component);

CountryDropdown.propTypes = {
  value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  name: _react2['default'].PropTypes.string,
  id: _react2['default'].PropTypes.string,
  classes: _react2['default'].PropTypes.string,
  showDefaultOption: _react2['default'].PropTypes.bool,
  defaultOptionLabel: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  onChange: _react2['default'].PropTypes.func,
  labelType: _react2['default'].PropTypes.oneOf([_constantsJs2['default'].DISPLAY_TYPE_FULL, _constantsJs2['default'].DISPLAY_TYPE_SHORT]),
  valueType: _react2['default'].PropTypes.oneOf([_constantsJs2['default'].DISPLAY_TYPE_FULL, _constantsJs2['default'].DISPLAY_TYPE_SHORT]),
  whitelist: _react2['default'].PropTypes.array,
  blacklist: _react2['default'].PropTypes.array
};
CountryDropdown.defaultProps = {
  value: '',
  name: 'rcrs-country',
  id: '',
  classes: '',
  showDefaultOption: true,
  defaultOptionLabel: 'Select Country',
  onChange: function onChange() {},
  labelType: _constantsJs2['default'].DISPLAY_TYPE_FULL,
  valueType: _constantsJs2['default'].DISPLAY_TYPE_FULL,
  whitelist: [],
  blacklist: []
};

var RegionDropdown = (function (_React$Component2) {
  _inherits(RegionDropdown, _React$Component2);

  function RegionDropdown(props) {
    _classCallCheck(this, RegionDropdown);

    _get(Object.getPrototypeOf(RegionDropdown.prototype), 'constructor', this).call(this, props);
    this.state = { regions: this.getRegions(props.country) };
    this.getRegions = this.getRegions.bind(this);
  }

  _createClass(RegionDropdown, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.country !== this.props.country;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.country === this.props.country) {
        return;
      }
      this.setState({ regions: this.getRegions(nextProps.country) });
    }
  }, {
    key: 'getRegions',
    value: function getRegions(country) {
      if (!country) {
        return [];
      }

      var countryValueType = this.props.countryValueType;

      var searchIndex = countryValueType === _constantsJs2['default'].DISPLAY_TYPE_FULL ? 0 : 1;
      var regions = _underscore2['default'].find(_sourceDataJs2['default'], function (i) {
        return i[searchIndex] === country;
      });

      // this could happen if the user is managing the state of the region/country themselves and screws up passing
      // in a valid country
      if (!regions) {
        console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown');
        return [];
      }

      // clean up the region info here. TODO MEMOIZE
      return _underscore2['default'].map(regions[2].split(_constantsJs2['default'].REGION_LIST_DELIMITER), function (regionPair) {
        var _regionPair$split = regionPair.split(_constantsJs2['default'].SINGLE_REGION_DELIMITER);

        var _regionPair$split2 = _slicedToArray(_regionPair$split, 2);

        var regionName = _regionPair$split2[0];
        var _regionPair$split2$1 = _regionPair$split2[1];
        var regionShortCode = _regionPair$split2$1 === undefined ? null : _regionPair$split2$1;

        return { regionName: regionName, regionShortCode: regionShortCode };
      });
    }
  }, {
    key: 'getRegionList',
    value: function getRegionList() {
      var _props4 = this.props;
      var labelType = _props4.labelType;
      var valueType = _props4.valueType;

      return _underscore2['default'].map(this.state.regions, function (_ref3) {
        var regionName = _ref3.regionName;
        var regionShortCode = _ref3.regionShortCode;

        var label = labelType === _constantsJs2['default'].DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        var value = valueType === _constantsJs2['default'].DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        return _react2['default'].createElement('option', { value: value, key: regionShortCode }, label);
      });
    }

    // there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
    // a "default" option which shows
  }, {
    key: 'getDefaultOption',
    value: function getDefaultOption() {
      var _props5 = this.props;
      var blankOptionLabel = _props5.blankOptionLabel;
      var showDefaultOption = _props5.showDefaultOption;
      var defaultOptionLabel = _props5.defaultOptionLabel;
      var country = _props5.country;

      if (!country) {
        return _react2['default'].createElement('option', { value: '' }, blankOptionLabel);
      }
      if (showDefaultOption) {
        return _react2['default'].createElement('option', { value: '' }, defaultOptionLabel);
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props;
      var value = _props6.value;
      var _onChange2 = _props6.onChange;

      return _react2['default'].createElement('select', { defaultValue: value, onChange: function onChange(e) {
          return _onChange2(e.target.value);
        } }, this.getDefaultOption(), this.getRegionList());
    }
  }]);

  return RegionDropdown;
})(_react2['default'].Component);

RegionDropdown.propTypes = {
  name: _react2['default'].PropTypes.string,
  country: _react2['default'].PropTypes.string,
  value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  blankOptionLabel: _react2['default'].PropTypes.string,
  showDefaultOption: _react2['default'].PropTypes.bool,
  defaultOptionLabel: _react2['default'].PropTypes.string,
  onChange: _react2['default'].PropTypes.func,
  labelType: _react2['default'].PropTypes.string,
  valueType: _react2['default'].PropTypes.string
};
RegionDropdown.defaultProps = {
  name: 'rcrs-region',
  country: '',
  value: '',
  blankOptionLabel: '-',
  showDefaultOption: true,
  defaultOptionLabel: 'Select region',
  onChange: function onChange() {},
  countryValueType: _constantsJs2['default'].DISPLAY_TYPE_FULL,
  labelType: _constantsJs2['default'].DISPLAY_TYPE_FULL,
  valueType: _constantsJs2['default'].DISPLAY_TYPE_FULL
};

// ------------------------- helpers --------------------------------

// called on country field initialization. It reduces the subset of countries depending on whether the user
// specified a white/blacklist
function _filterCountries(countries, whitelist, blacklist) {
  var filteredCountries = countries;

  if (whitelist.length > 0) {
    filteredCountries = _underscore2['default'].filter(countries, function (_ref4) {
      var _ref42 = _slicedToArray(_ref4, 2);

      var countryName = _ref42[0];
      var countrySlug = _ref42[1];
      return _underscore2['default'].contains(whitelist, countrySlug);
    });
  } else if (blacklist.length > 0) {
    filteredCountries = _underscore2['default'].filter(countries, function (_ref5) {
      var _ref52 = _slicedToArray(_ref5, 2);

      var countryName = _ref52[0];
      var countrySlug = _ref52[1];
      return !_underscore2['default'].contains(blacklist, countrySlug);
    });
  }

  return filteredCountries;
}

exports.CountryDropdown = CountryDropdown;
exports.RegionDropdown = RegionDropdown;


},{"./constants.js":2,"./source-data.js":4,"react":undefined,"underscore":undefined}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CountryRegionData = [["Afghanistan", "AF", "Badakhshan~BDS|Badghis~BDG|Baghlan~BGL|Balkh~BAL|Bamyan~BAM|Daykundi~DAY|Farah~FRA|Faryab~FYB|Ghazni~GHA|Ghor~GHO|Helmand~HEL|Herat~HER|Jowzjan~JOW|Kabul~KAB|Kandahar~KAN|Kapisa~KAP|Khost~KHO|Kunar~KNR|Kunduz~KDZ|Laghman~LAG|Logar~LOW|Maidan Wardak~WAR|Nangarhar~NAN|Nimruz~NIM|Nuristan~NUR|Paktia~PIA|Paktika~PKA|Panjshir~PAN|Parwan~PAR|Samangan~SAM|Sar-e Pol~SAR|Takhar~TAK|Urozgan~ORU|Zabul~ZAB"], ["Åland Islands", "AX", "Brändö~BR|Eckerö~EC|Finström~FN|Föglö~FG|Geta~GT|Hammarland~HM|Jomala~JM|Kumlinge~KM|Kökar~KK|Lemland~LE|Lumparland~LU|Mariehamn~MH|Saltvik~SV|Sottunga~ST|Sund~SD|Vårdö~VR"], ["Albania", "AL", "Berat~01|Dibër~09|Durrës~02|Elbasan~03|Fier~04|Gjirokastër~05|Korçë~06|Kukës~07|Lezhë~08|Shkodër~10|Tirana~11|Vlorë~12"], ["Algeria", "DZ", "Adrar~01|Aïn Defla~44|Aïn Témouchent~46|Algiers~16|Annaba~23|Batna~05|Béchar~08|Béjaïa~06|Biskra~07|Blida~09|Bordj Bou Arréridj~34|Bouïra~10|Boumerdès~35|Chlef~02|Constantine~25|Djelfa~17|El Bayadh~32|El Oued~39|El Tarf~36|Ghardaïa~47|Guelma~24|Illizi~33|Jijel~18|Khenchela~40|Laghouat~03|Mascara~29|Médéa~26|Mila~43|Mostaganem~27|Msila~28|Naâma~45|Oran~31|Ouargla~30|Oum el Bouaghi~04|Relizane~48|Saïda~20|Sétif~19|Sidi Bel Abbès~22|Skikda~21|Souk Ahras~41|Tamanghasset~11|Tébessa~12|Tiaret~14|Tindouf~37|Tipaza~42|Tissemsilt~38|Tizi Ouzou~15|Tlemcen~13"], ["American Samoa", "AS", "Tutuila~01|Aunu'u~02|Ta'ū~03|Ofu‑Olosega~04|Rose Atoll~21|Swains Island~22"], ["Andorra", "AD", "Andorra la Vella~07|Canillo~02|Encamp~03|Escaldes-Engordany~08|La Massana~04|Ordino~05|Sant Julià de Lòria~06"], ["Angola", "AO", "Bengo~BGO|Benguela~BGU|Bié~BIE|Cabinda~CAB|Cuando Cubango~CCU|Cuanza Norte~CNO|Cuanza Sul~CUS|Cunene~CNN|Huambo~HUA|Huíla~HUI|Luanda~LUA|Lunda Norte~LNO|Lunda Sul~LSU|Malanje~MAL|Moxico~MOX|Namibe~NAM|Uíge~UIG|Zaire~ZAI"], ["Anguilla", "AI", "Anguilla~01|Anguillita Island~02|Blowing Rock~03|Cove Cay~04|Crocus Cay~05|Deadman's Cay~06|Dog Island~07|East Cay~08|Little Island~09|Little Scrub Island~10|Mid Cay~11|North Cay~12|Prickly Pear Cays~13|Rabbit Island~14|Sandy Island/Sand Island~15|Scilly Cay~16|Scrub Island~17|Seal Island~18|Sombrero/Hat Island~19|South Cay~20|South Wager Island~21|West Cay~22"], ["Antarctica", "AQ", "Antarctica~AQ"], ["Antigua and Barbuda", "AG", "Antigua Island~01|Barbuda Island~02|Bird Island~04|Bishop Island~05|Blake Island~06|Crump Island~09|Dulcina Island~10|Exchange Island~11|Five Islands~12|Great Bird Island~13|Green Island~14|Guiana Island~15|Hawes Island~17|Hells Gate Island~16|Henry Island~18|Johnson Island~19|Kid Island~20|Lobster Island~22|Maiden Island~24|Moor Island~25|Nanny Island~26|Pelican Island~27|Prickly Pear Island~28|Rabbit Island~29|Red Head Island~31|Redonda Island~03|Sandy Island~32|Smith Island~33|The Sisters~34|Vernon Island~35|Wicked Will Island~36|York Island~37"], ["Argentina", "AR", "Buenos Aires~B|Capital Federal~C|Catamarca~K|Chaco~H|Chubut~U|Córdoba~X|Corrientes~W|Entre Ríos~E|Formosa~P|Jujuy~Y|La Pampa~L|La Rioja~F|Mendoza~M|Misiones~N|Neuquén~Q|Río Negro~R|Salta~A|San Juan~J|San Luis~D|Santa Cruz~Z|Santa Fe~S|Santiago del Estero~G|Tierra del Fuego~V|Tucumán~T"], ["Armenia", "AM", "Aragatsotn~AG|Ararat~AR|Armavir~AV|Gegharkunik~GR|Kotayk~KT|Lori~LO|Shirak~SH|Syunik~SU|Tavush~TV|Vayots Dzor~VD|Yerevan~ER"], ["Aruba", "AW", "Aruba~AW"], ["Australia", "AU", "Australian Capital Territory~ACT|New South Wales~NSW|Northern Territory~NT|Queensland~QLD|South Australia~SA|Tasmania~TAS|Victoria~VIC|Western Australia~WA"], ["Austria", "AT", "Burgenland~1|Kärnten~2|Niederösterreich~3|Oberösterreich~4|Salzburg~5|Steiermark~6|Tirol~7|Vorarlberg~8|Wien~9"], ["Azerbaijan", "AZ", "Bakı~BA|Gəncə~GA|Lənkəran~LA|Mingəçevir~MI|Naftalan~NA|Naxçıvan~NV|Şəki~SA|Şirvan~SR|Sumqayit~SM|Xankəndi~XA|Yevlax~YE|Abşeron~ABS|Ağcabədi~AGC|Ağdam~AGM|Ağdaş~AGS|Ağstafa~AGA|Ağsu~AGU|Astara~AST|Babək~BAB|Balakən~BAL|Bərdə~BAR|Beyləqan~BEY|Biləsuvar~BIL|Cəbrayıl~CAB|Cəlilabad~CAL|Culfa~CUL|Daşkəsən~DAS|Füzuli~FUZ|Gədəbəy~GAD|Goranboy~GOR|Göyçay~GOY|Göygöl~GYG|Hacıqabul~HAC|İmişli~IMI|İsmayıllı~ISM|Kəlbəcər~KAL|Kǝngǝrli~KAN|Kürdəmir~KUR|Laçın~LAC|Lənkəran~LAN|Lerik~LER|Masallı~MAS|Neftçala~NEF|Oğuz~OGU|Ordubad~ORD|Qəbələ~QAB|Qax~QAX|Qazax~QAZ|Qobustan~QOB|Quba~QBA|Qubadli~QBI|Qusar~QUS|Saatlı~SAT|Sabirabad~SAB|Şabran~SBN|Sədərək~SAD|Şahbuz~SAH|Şəki~SAK|Salyan~SAL|Şamaxı~SMI|Şəmkir~SKR|Samux~SMX|Şərur~SAR|Siyəzən~SIY|Şuşa~SUS|Tərtər~TAR|Tovuz~TOV|Ucar~UCA|Xaçmaz~XAC|Xızı~XIZ|Xocalı~XCI|Xocavənd~XVD|Yardımlı~YAR|Yevlax~YEV|Zəngilan~ZAN|Zaqatala~ZAQ|Zərdab~ZAR"], ["Bahamas", "BS", "Acklins Island~01|Berry Islands~22|Bimini~02|Black Point~23|Cat Island~03|Central Abaco~24|Crooked Island and Long Cay~28|East Grand Bahama~29|Exuma~04|Freeport~05|Fresh Creek~06|Governor's Harbour~07|Green Turtle Cay~08|Harbour Island~09|High Rock~10|Inagua~11|Kemps Bay~12|Long Island~13|Marsh Harbour~14|Mayaguana~15|Moore’s Island~40|New Providence~16|Nichollstown and Berry Islands~17|North Abaco~42|North Andros~41|North Eleuthera~33|Ragged Island~18|Rock Sound~19|San Salvador and Rum Cay~20|Sandy Point~21|South Abaco~35|South Andros~36|South Eleuthera~37|West Grand Bahama~39"], ["Bahrain", "BH", "Al Janūbīyah~14|Al Manāmah~13|Al Muḩarraq~15|Al Wusţá~16|Ash Shamālīyah~17"], ["Bangladesh", "BD", "Barisal~A|Chittagong~B|Dhaka~C|Khulna~D|Rajshahi~E|Rangpur~F|Sylhet~G"], ["Barbados", "BB", "Christ Church~01|Saint Andrew~02|Saint George~03|Saint James~04|Saint John~05|Saint Joseph~06|Saint Lucy~07|Saint Michael~08|Saint Peter~09|Saint Philip~10|Saint Thomas~11"], ["Belarus", "BY", "Brest voblast~BR|Gorod Minsk~HO|Homiel voblast~HO|Hrodna voblast~HR|Mahilyow voblast~MA|Minsk voblast~MI|Vitsebsk voblast~VI"], ["Belgium", "BE", "Bruxelles-Capitale~BRU|Région Flamande~VLG|Région Wallonië~WAL"], ["Belize", "BZ", "Belize District~BZ|Cayo District~CY|Corozal District~CZL|Orange Walk District~OW|Stann Creek District~SC|Toledo District~TOL"], ["Benin", "BJ", "Alibori~AL|Atakora~AK|Atlantique~AQ|Borgou~BO|Collines Department~CO|Donga~DO|Kouffo~KO|Littoral Department~LI|Mono Department~MO|Ouémé~OU|Plateau~PL|Zou~ZO"], ["Bermuda", "BM", "City of Hamilton~03|Devonshire Parish~01|Hamilton Parish~02|Paget Parish~04|Pembroke Parish~05|Sandys Parish~08|Smith's Parish~09|Southampton Parish~10|St. George's Parish~07|Town of St. George~06|Warwick Parish~11"], ["Bhutan", "BT", "Bumthang~33|Chhukha~12|Dagana~22|Gasa~GA|Haa~13|Lhuntse~44|Mongar~42|Paro~11|Pemagatshel~43|Punakha~23|Samdrup Jongkhar~45|Samtse~14|Sarpang~31|Thimphu~15|Trashigang~41|Trashiyangtse~TY|Trongsa~32|Tsirang~21|Wangdue Phodrang~24|Zhemgang~34"], ["Bolivia", "BO", "Beni~B|Chuquisaca~H|Cochabamba~C|La Paz~L|Oruro~O|Pando~N|Potosí~P|Santa Cruz~S|Tarija~T"], ["Bonaire, Sint Eustatius and Saba", "BQ", "Bonaire~BO|Saba Isand~SA|Sint Eustatius~SE"], ["Bosnia and Herzegovina", "BA", "Brčko Distrikt~BRC|Federacija Bosne i Hercegovine~BIH|Republika Srpska~SRP"], ["Botswana", "BW", "Central~CE|Ghanzi~GH|Kgalagadi~KG|Kgatleng~KL|Kweneng~KW|North West~NW|North-East~NE|South East~SE|Southern~SO"], ["Bouvet Island", "BV", "Bouvet Island~BV"], ["Brazil", "BR", "Acre~AC|Alagoas~AL|Amapá~AP|Amazonas~AM|Bahia~BA|Ceará~CE|Distrito Federal~DF|Espírito Santo~ES|Goiás~GO|Maranhão~MA|Mato Grosso~MT|Mato Grosso do Sul~MS|Minas Gerais~MG|Para~PA|Paraiba~PB|Paraná~PR|Pernambuco~PE|Piauí~PI|Rio de Janeiro~RJ|Rio Grande do Norte~RN|Rio Grande do Sul~RS|Rondônia~RO|Roraima~RR|Santa Catarina~SC|Sao Paulo~SP|Sergipe~SE|Tocantins~TO"], ["British Indian Ocean Territory", "IO", "British Indian Ocean Territory"], ["Brunei Darussalam", "BN", "Belait~BE|Brunei Muara~BM|Temburong~TE|Tutong~TU"], ["Bulgaria", "BG", "Blagoevgrad~01|Burgas~02|Dobrich~08|Gabrovo~07|Jambol~28|Khaskovo~26|Kjustendil~10|Kurdzhali~09|Lovech~11|Montana~12|Pazardzhik~13|Pernik~14|Pleven~15|Plovdiv~16|Razgrad~17|Ruse~18|Shumen~27|Silistra~19|Sliven~20|Smoljan~21|Sofija~23|Sofija-Grad~22|Stara Zagora~24|Turgovishhe~25|Varna~03|Veliko Turnovo~04|Vidin~05|Vraca~06"], ["Burkina Faso", "BF", "Balé~BAL|Bam/Lake Bam~BAM|Banwa Province~BAN|Bazèga~BAZ|Bougouriba~BGR|Boulgou Province~BLG|Boulkiemdé~BLK|Comoé/Komoe~COM|Ganzourgou Province~GAN|Gnagna~GNA|Gourma Province~GOU|Houet~HOU|Ioba~IOB|Kadiogo~KAD|Kénédougou~KEN|Komondjari~KMD|Kompienga~KMP|Kossi Province~KOS|Koulpélogo~KOP|Kouritenga~KOT|Kourwéogo~KOW|Léraba~LER|Loroum~LOR|Mouhoun~MOU|Namentenga~NAM|Naouri/Nahouri~NAO|Nayala~NAY|Noumbiel~NOU|Oubritenga~OUB|Oudalan~OUD|Passoré~PAS|Poni~PON|Sanguié~SNG|Sanmatenga~SMT|Séno~SEN|Sissili~SIS|Soum~SOM|Sourou~SOR|Tapoa~TAP|Tui/Tuy~TUI|Yagha~YAG|Yatenga~YAT|Ziro~ZIR|Zondoma~ZON|Zoundwéogo~ZOU"], ["Burundi", "BI", "Bubanza~BB|Bujumbura Mairie~BM|Bujumbura Rural~BL|Bururi~BR|Cankuzo~CA|Cibitoke~CI|Gitega~GI|Karuzi~KR|Kayanza~KY|Kirundo~KI|Makamba~MA|Muramvya~MU|Muyinga~MY|Mwaro~MW|Ngozi~NG|Rutana~RT|Ruyigi~RY"], ["Cambodia", "KH", "Banteay Mean Cheay|Batdambang|Kampong Cham|Kampong Chhnang|Kampong Spoe|Kampong Thum|Kampot|Kandal|Kaoh Kong|Keb|Kracheh|Mondol Kiri|Otdar Mean Cheay|Pailin|Phnum Penh|Pouthisat|Preah Seihanu (Sihanoukville)|Preah Vihear|Prey Veng|Rotanah Kiri|Siem Reab|Stoeng Treng|Svay Rieng|Takev"], ["Cameroon", "CM", "Adamaoua~AD|Centre~CE|Est~ES|Extrême-Nord~EN|Littoral~LT|Nord~NO|Nord-Ouest~NW|Ouest~OU|Sud~SU|Sud-Ouest~SW"], ["Canada", "CA", "Alberta~AB|British Columbia~BC|Manitoba~MB|New Brunswick~NB|Newfoundland and Labrador~NL|Northwest Territories~NT|Nova Scotia~NS|Nunavut~NU|Ontario~ON|Prince Edward Island~PE|Quebec~QC|Saskatchewan~SK|Yukon~YT"], ["Cape Verde", "CV", "Boa Vista~BV|Brava~BR|Calheta de São Miguel~CS|Maio~MA|Mosteiros~MO|Paúl~PA|Porto Novo~PN|Praia~PR|Ribeira Brava~RB|Ribeira Grande~RG|Sal~SL|Santa Catarina~CA|Santa Cruz~CR|São Domingos~SD|São Filipe~SF|São Nicolau~SN|São Vicente~SV|Tarrafal~TA|Tarrafal de São Nicolau~TS"], ["Cayman Islands", "KY", "Creek|Eastern|Midland|South Town|Spot Bay|Stake Bay|West End|Western"], ["Central African Republic", "CF", "Bamingui-Bangoran~BB|Bangui~BGF|Basse-Kotto~BK|Haute-Kotto~HK|Haut-Mbomou~HM|Kémo~KG|Lobaye~LB|Mambéré-Kadéï~HS|Mbomou~MB|Nana-Grebizi~10|Nana-Mambéré~NM|Ombella-M'Poko~MP|Ouaka~UK|Ouham~AC|Ouham Péndé~OP|Sangha-Mbaéré~SE|Vakaga~VK"], ["Chad", "TD", "Batha|Biltine|Borkou-Ennedi-Tibesti|Chari-Baguirmi|Guera|Kanem|Lac|Logone Occidental|Logone Oriental|Mayo-Kebbi|Moyen-Chari|Ouaddai|Salamat|Tandjile"], ["Chile", "CL", "Aisén del General Carlos Ibáñez del Campo~AI|Antofagasta~AN|Araucanía~AR|Arica y Parinacota~AP|Atacama~AT|Bío-Bío~BI|Coquimbo~CO|Libertador General Bernardo O'Higgins~LI|Los Lagos~LL|Los Ríos~LR|Magallanes y Antartica Chilena~MA|Marga-Marga~|Maule~ML|Región Metropolitana de Santiago~RM|Tarapacá~TA|Valparaíso~VS"], ["China", "CN", "Anhui~34|Beijing~11|Chongqing~50|Fujian~35|Gansu~62|Guangdong~44|Guangxi~45|Guizhou~52|Hainan~46|Hebei~13|Heilongjiang~23|Henan~41|Hong Kong~91|Hubei~42|Hunan~43|Inner Mongolia~15|Jiangsu~32|Jiangxi~36|Jilin~22|Liaoning~21|Macau~92|Ningxia~64|Qinghai~63|Shaanxi~61|Shandong~37|Shanghai~31|Shanxi~14|Sichuan~51|Tianjin~12|Tibet~54|Xinjiang~65|Yunnan~53|Zhejiang~33"], ["Christmas Island", "CX", "Christmas Island~CX"], ["Cocos (Keeling) Islands", "CC", "Direction Island~DI|Home Island~HM|Horsburgh Island~HR|North Keeling Island~NK|South Island~SI|West Island~WI"], ["Colombia", "CO", "Amazonas~AMA|Antioquia~ANT|Arauca~ARA|Archipiélago de San Andrés~SAP|Atlántico~ATL|Bogotá D.C.~DC|Bolívar~BOL|Boyacá~BOY|Caldas~CAL|Caquetá~CAQ|Casanare~CAS|Cauca~CAU|Cesar~CES|Chocó~CHO|Córdoba~COR|Cundinamarca~CUN|Guainía~GUA|Guaviare~GUV|Huila~HUI|La Guajira~LAG|Magdalena~MAG|Meta~MET|Nariño~NAR|Norte de Santander~NSA|Putumayo~PUT|Quindío~QUI|Risaralda~RIS|Santander~SAN|Sucre~SUC|Tolima~TOL|Valle del Cauca~VAC|Vaupés~VAU|Vichada~VID"], ["Comoros", "KM", "Anjouan (Nzwani)|Domoni|Fomboni|Grande Comore (Njazidja)|Moheli (Mwali)|Moroni|Moutsamoudou"], ["Congo, Republic of the (Brazzaville)", "CG", "Bouenza~11|Brazzaville~BZV|Cuvette~8|Cuvette-Ouest~15|Kouilou~5|Lékoumou~2|Likouala~7|Niari~9|Plateaux~14|Pointe-Noire~16|Pool~12|Sangha~13"], ["Congo, the Democratic Republic of the (Kinshasa)", "CD", "Bandundu~BN|Bas-Congo~BC|Équateur~EQ|Kasaï-Occidental~KE|Kasaï-Oriental~KW|Katanga~KA|Kinshasa~KN|Maniema~MA|Nord-Kivu~NK|Orientale~OR|Sud-Kivu~SK"], ["Cook Islands", "CK", "Aitutaki~01|Atiu~02|Avarua|Mangaia~03|Manihiki~04|Manuae~05|Mauke~06|Mitiaro~07|Nassau Island~08|Palmerston~09|Penrhyn~10|Pukapuka~11|Rakahanga~12|Rarotonga~13|Suwarrow~14|Takutea~15"], ["Costa Rica", "CR", "Alajuela~2|Cartago~3|Guanacaste~5|Heredia~4|Limón~7|Puntarenas~6|San José~1"], ["Côte d'Ivoire, Republic of", "CI", "Agnéby~16|Bafing~17|Bas-Sassandra~09|Denguélé~10|Dix-Huit Montagnes~06|Fromager~18|Haut-Sassandra~02|Lacs~07|Lagunes~01|Marahoué~12|Moyen-Cavally~19|Moyen-Comoé~05|N'zi-Comoé~11|Savanes~03|Sud-Bandama~15|Sud-Comoé~13|Vallée du Bandama~04|Worodougou~14|Zanzan~08"], ["Croatia", "HR", "Bjelovarsko-Bilogorska Županija~07|Brodsko-Posavska Županija~12|Dubrovačko-Neretvanska Županija~19|Grad Zagreb~21|Istarska Županija~18|Karlovačka Županija~04|Koprivničko-Krizevačka Županija~06|Krapinsko-Zagorska Županija~02|Ličko-Senjska Županija~09|Međimurska Županija~20|Osječko-Baranjska Županija~14|Požeško-Slavonska Županija~11|Primorsko-Goranska Županija~08|Sisačko-Moslavačka Županija~03|Splitsko-Dalmatinska Županija~17|Sibensko-Kninska Županija~15|Varaždinska Županija~05|Virovitičko-Podravska Županija~10|Vukovarsko-Srijemska Županija~16|Zadarska Županija~13|Zagrebacka Zupanija~01"], ["Cuba", "CU", "Artemisa~15|Camagüey~09|Ciego de Ávila~08|Cienfuegos~06|Granma~12|Guantánamo~14|Holguín~11|Isla de la Juventud~99|La Habana~03|Las Tunas~10|Matanzas~04|Mayabeque~16|Pinar del Río~01|Sancti Spíritus~07|Santiago de Cuba~13|Villa Clara~05"], ["Curaçao", "CW", "Curaçao~CW"], ["Cyprus", "CY", "Ammochostos~04|Keryneia~05|Larnaka~03|Lefkosia~01|Lemesos~02|Pafos~05"], ["Czech Republic", "CZ", "Hlavní město Praha~PR|Jihočeský kraj~JC|Jihomoravský kraj~JM|Karlovarský kraj~KA|Královéhradecký kraj~KR|Liberecký kraj~LI|Moravskoslezský kraj~MO|Olomoucký kraj~OL|Pardubický kraj~PA|Plzeňský kraj~PL|Středočeský kraj~ST|Ústecký kraj~US|Vysočina~VY|Zlínský kraj~ZL"], ["Denmark", "DK", "Hovedstaden~84|Kujalleq~GL-KU|Midtjylland~82|Norderøerne~FO-01|Nordjylland~81|Østerø~FO-06|Qaasuitsup~GL-QA|Qeqqata~GL-QE|Sandø~FO-02|Sermersooq~GL-SM|Sjælland~85|Strømø~FO-03|Suderø~FO-04|Syddanmark~83|Vågø~FO-05"], ["Djibouti", "DJ", "Ali Sabieh~AS|Arta~AR|Dikhil~DI|Obock~OB|Tadjourah~TA"], ["Dominica", "DM", "Saint Andrew Parish~02|Saint David Parish~03|Saint George Parish~04|Saint John Parish~05|Saint Joseph Parish~06|Saint Luke Parish~07|Saint Mark Parish~08|Saint Patrick Parish~09|Saint Paul Parish~10|Saint Peter Parish~11"], ["Dominican Republic", "DO", "Cibao Central~02|Del Valle~37|Distrito Nacional~01|Enriquillo~38|Norcentral~04|Nordeste~34|Noroeste~34|Norte~35|Valdesia~42"], ["Ecuador", "EC", "Azuay~A|Bolívar~B|Cañar~F|Carchi~C|Chimborazo~H|Cotopaxi~X|El Oro~O|Esmeraldas~E|Galápagos~W|Guayas~G|Imbabura~I|Loja~L|Los Ríos~R|Manabí~M|Morona-Santiago~S|Napo~N|Orellana~D|Pastaza~Y|Pichincha~P|Santa Elena~SE|Santo Domingo de los Tsáchilas~SD|Sucumbíos~U|Tungurahua~T|Zamora-Chinchipe~Z"], ["Egypt", "EG", "Alexandria~ALX|Aswan~ASN|Asyout~AST|Bani Sueif~BNS|Beheira~BH|Cairo~C|Daqahlia~DK|Dumiat~DT|El Bahr El Ahmar~BA|El Ismailia~IS|El Suez~SUZ|El Wadi El Gedeed~WAD|Fayoum~FYM|Gharbia~GH|Giza~SUZ|Helwan~HU|Kafr El Sheikh~KFS|Luxor~LX|Matrouh~MT|Menia~MN|Menofia~MNF|North Sinai~SIN|Port Said~PTS|Qalubia~KB|Qena~KN|Sharqia~SHR|Sixth of October~SU|Sohag~SHG|South Sinai~JS"], ["El Salvador", "SV", "Ahuachapán~AH|Cabañas~CA|Cuscatlán~CU|Chalatenango~CH|La Libertad~LI|La Paz~PA|La Unión~UN|Morazán~MO|San Miguel~SM|San Salvador~SS|Santa Ana~SA|San Vicente~SV|Sonsonate~SO|Usulután~US"], ["Equatorial Guinea", "GQ", "Annobón~AN|Bioko Norte~BN|Bioko Sur~BS|Centro Sur~CS|Kié-Ntem~KN|Litoral~LI|Wele-Nzas~WN"], ["Eritrea", "ER", "Anseba~AN|Debub~DU|Debub-Keih-Bahri~DK|Gash-Barka~GB|Maekel~MA|Semien-Keih-Bahri~SK"], ["Estonia", "EE", "Harjumaa (Tallinn)~37|Hiiumaa (Kardla)~39|Ida-Virumaa (Johvi)~44|Järvamaa (Paide)~41|Jõgevamaa (Jogeva)~49|Läänemaa~57|Lääne-Virumaa (Rakvere)~59|Pärnumaa (Parnu)~67|Põlvamaa (Polva)~65|Raplamaa (Rapla)~70|Saaremaa (Kuessaare)~74|Tartumaa (Tartu)~78|Valgamaa (Valga)~82|Viljandimaa (Viljandi)~84|Võrumaa (Voru)~86"], ["Ethiopia", "ET", "Addis Ababa~AA|Afar~AF|Amhara~AM|Benshangul-Gumaz~BE|Dire Dawa~DD|Gambela~GA|Harari~HA|Oromia~OR|Somali~SO|Southern Nations Nationalities and People's Region~SN|Tigray~TI"], ["Falkland Islands (Islas Malvinas)", "FK", "Falkland Islands (Islas Malvinas)"], ["Faroe Islands", "FO", "Bordoy|Eysturoy|Mykines|Sandoy|Skuvoy|Streymoy|Suduroy|Tvoroyri|Vagar"], ["Fiji", "FJ", "Central|Eastern|Northern|Rotuma|Western"], ["Finland", "FI", "Ahvenanmaan lääni~AL|Etelä-Suomen lääni~ES|Itä-Suomen lääni~IS|Länsi-Suomen lääni~LS|Lapin lääni~LL|Oulun lääni~OL"], ["France", "FR", "Alsace~A|Aquitaine~B|Auvergne~C|Basse-Normandie~P|Bourgogne~D|Bretagne~E|Centre~F|Champagne-Ardenne~G|Corse~H|Franche-Comté~I|Haute-Normandie~Q|Île-de-France~J|Languedoc-Roussillon~K|Limousin~L|Lorraine~M|Midi-Pyrénées~N|Nord-Pas-de-Calais~O|Pays de la Loire~R|Picardie~S|Poitou-Charentes~T|Provence-Alpes-Cote d'Azur~U|Rhone-Alpes~V"], ["French Guiana", "GF", "French Guiana"], ["French Polynesia", "PF", "Archipel des Marquises|Archipel des Tuamotu|Archipel des Tubuai|Iles du Vent|Iles Sous-le-Vent"], ["French Southern and Antarctic Lands", "TF", "Adelie Land|Ile Crozet|Iles Kerguelen|Iles Saint-Paul et Amsterdam"], ["Gabon", "GA", "Estuaire~1|Haut-Ogooué~2|Moyen-Ogooué~3|Ngounié~4|Nyanga~5|Ogooué-Ivindo~6|Ogooué-Lolo~7|Ogooué-Maritime~8|Woleu-Ntem~9"], ["Gambia, The", "GM", "Banjul~B|Central River~M|Lower River~L|North Bank~N|Upper River~U|Western~W"], ["Georgia", "GE", "Abashis|Abkhazia or Ap'khazet'is Avtonomiuri Respublika (Sokhumi)|Adigenis|Ajaria or Acharis Avtonomiuri Respublika (Bat'umi)|Akhalgoris|Akhalk'alak'is|Akhalts'ikhis|Akhmetis|Ambrolauris|Aspindzis|Baghdat'is|Bolnisis|Borjomis|Ch'khorotsqus|Ch'okhatauris|Chiat'ura|Dedop'listsqaros|Dmanisis|Dushet'is|Gardabanis|Gori|Goris|Gurjaanis|Javis|K'arelis|K'ut'aisi|Kaspis|Kharagaulis|Khashuris|Khobis|Khonis|Lagodekhis|Lanch'khut'is|Lentekhis|Marneulis|Martvilis|Mestiis|Mts'khet'is|Ninotsmindis|Onis|Ozurget'is|P'ot'i|Qazbegis|Qvarlis|Rust'avi|Sach'kheris|Sagarejos|Samtrediis|Senakis|Sighnaghis|T'bilisi|T'elavis|T'erjolis|T'et'ritsqaros|T'ianet'is|Tqibuli|Ts'ageris|Tsalenjikhis|Tsalkis|Tsqaltubo|Vanis|Zestap'onis|Zugdidi|Zugdidis"], ["Germany", "DE", "Baden-Württemberg~BW|Bayern~BY|Berlin~BE|Brandenburg~BB|Bremen~HB|Hamburg~HH|Hessen~HE|Mecklenburg-Vorpommern~MV|Niedersachsen~NI|Nordrhein-Westfalen~NW|Rheinland-Pfalz~RP|Saarland~SL|Sachsen~SN|Sachsen-Anhalt~ST|Schleswig-Holstein~SH|Thüringen~TH"], ["Ghana", "GH", "Ashanti~AH|Brong-Ahafo~BA|Central~CP|Eastern~EP|Greater Accra~AA|Northern~NP|Upper East~UE|Upper West~UW|Volta~TV|Western~WP"], ["Gibraltar", "GI", "Gibraltar"], ["Greece", "GR", "Aitolia kai Akarnania|Akhaia|Argolis|Arkadhia|Arta|Attiki|Ayion Oros (Mt. Athos)|Dhodhekanisos|Drama|Evritania|Evros|Evvoia|Florina|Fokis|Fthiotis|Grevena|Ilia|Imathia|Ioannina|Irakleion|Kardhitsa|Kastoria|Kavala|Kefallinia|Kerkyra|Khalkidhiki|Khania|Khios|Kikladhes|Kilkis|Korinthia|Kozani|Lakonia|Larisa|Lasithi|Lesvos|Levkas|Magnisia|Messinia|Pella|Pieria|Preveza|Rethimni|Rodhopi|Samos|Serrai|Thesprotia|Thessaloniki|Trikala|Voiotia|Xanthi|Zakinthos"], ["Greenland", "GL", "Avannaa (Nordgronland)|Kitaa (Vestgronland)|Tunu (Ostgronland)"], ["Grenada", "GD", "Carriacou and Petit Martinique|Saint Andrew|Saint David|Saint George|Saint John|Saint Mark|Saint Patrick"], ["Guadeloupe", "GP", "Basse-Terre|Grande-Terre|Iles de la Petite Terre|Iles des Saintes|Marie-Galante"], ["Guam", "GU", "Guam"], ["Guatemala", "GT", "Alta Verapaz~AV|Baja Verapaz~BV|Chimaltenango~CM|Chiquimula~CQ|El Progreso~PR|Escuintla~ES|Guatemala~GU|Huehuetenango~HU|Izabal~IZ|Jalapa~JA|Jutiapa~JU|Petén~PE|Quetzaltenango~QZ|Quiché~QC|Retalhuleu~Re|Sacatepéquez~SA|San Marcos~SM|Santa Rosa~SR|Sololá~SO|Suchitepéquez~SU|Totonicapán~TO|Zacapa~ZA"], ["Guernsey", "GG", "Castel|Forest|St. Andrew|St. Martin|St. Peter Port|St. Pierre du Bois|St. Sampson|St. Saviour|Torteval|Vale"], ["Guinea", "GN", "Beyla|Boffa|Boke|Conakry|Coyah|Dabola|Dalaba|Dinguiraye|Dubreka|Faranah|Forecariah|Fria|Gaoual|Gueckedou|Kankan|Kerouane|Kindia|Kissidougou|Koubia|Koundara|Kouroussa|Labe|Lelouma|Lola|Macenta|Mali|Mamou|Mandiana|Nzerekore|Pita|Siguiri|Telimele|Tougue|Yomou"], ["Guinea-Bissau", "GW", "Bafatá~BA|Biombo~BM|Bissau~BS|Bolama-Bijagos~BL|Cacheu~CA|Gabú~GA|Oio~OI|Quinara~QU|Tombali~TO"], ["Guyana", "GY", "Barima-Waini~BA|Cuyuni-Mazaruni~CU|Demerara-Mahaica~DE|East Berbice-Corentyne~EB|Essequibo Islands-West Demerara~ES|Mahaica-Berbice~MA|Pomeroon-Supenaam~PM|Potaro-Siparuni~PT|Upper Demerara-Berbice~UD|Upper Takutu-Upper Essequibo~UT"], ["Haiti", "HT", "Artibonite~AR|Centre~CE|Grand'Anse~GA|Nippes~NI|Nord~ND|Nord-Est~NE|Nord-Ouest~NO|Ouest~OU|Sud~SD|Sud-Est~SE"], ["Heard Island and McDonald Islands", "HM", "Heard Island and McDonald Islands"], ["Holy See (Vatican City)", "VA", "Holy See (Vatican City)~01"], ["Honduras", "HN", "Atlántida~AT|Choluteca~CH|Colón~CL|Comayagua~CM|Copán~CP|Cortés~CR|El Paraíso~EP|Francisco Morazan~FM|Gracias a Dios~GD|Intibucá~IN|Islas de la Bahía~IB|La Paz~LP|Lempira~LE|Ocotepeque~OC|Olancho~OL|Santa Bárbara~SB|Valle~VA|Yoro~YO"], ["Hong Kong", "HK", "Hong Kong"], ["Hungary", "HU", "Bács-Kiskun~BK|Baranya~BA|Békés~BE|Békéscsaba~BC|Borsod-Abauj-Zemplen~BZ|Budapest~BU|Csongrád~CS|Debrecen~DE|Dunaújváros~DU|Eger~EG|Érd~ER|Fejér~FE|Győr~GY|Győr-Moson-Sopron~GS|Hajdú-Bihar~HB|Heves~HE|Hódmezővásárhely~HV|Jász-Nagykun-Szolnok~N|Kaposvár~KV|Kecskemét~KM|Komárom-Esztergom~KE|Miskolc~MI|Nagykanizsa~NK|Nógrád~NO|Nyíregyháza~NY|Pécs~PS|Pest~PE|Salgótarján~ST|Somogy~SO|Sopron~SN|Szabolcs-á-Bereg~SZ|Szeged~SD|Székesfehérvár~SF|Szekszárd~SS|Szolnok~SK|Szombathely~SH|Tatabánya~TB|Tolna~TO|Vas~VA|Veszprém~VE|Veszprém (City)~VM|Zala~ZA|Zalaegerszeg~ZE"], ["Iceland", "IS", "Akranes|Akureyri|Arnessysla|Austur-Bardhastrandarsysla|Austur-Hunavatnssysla|Austur-Skaftafellssysla|Borgarfjardharsysla|Dalasysla|Eyjafjardharsysla|Gullbringusysla|Hafnarfjordhur|Husavik|Isafjordhur|Keflavik|Kjosarsysla|Kopavogur|Myrasysla|Neskaupstadhur|Nordhur-Isafjardharsysla|Nordhur-Mulasys-la|Nordhur-Thingeyjarsysla|Olafsfjordhur|Rangarvallasysla|Reykjavik|Saudharkrokur|Seydhisfjordhur|Siglufjordhur|Skagafjardharsysla|Snaefellsnes-og Hnappadalssysla|Strandasysla|Sudhur-Mulasysla|Sudhur-Thingeyjarsysla|Vesttmannaeyjar|Vestur-Bardhastrandarsysla|Vestur-Hunavatnssysla|Vestur-Isafjardharsysla|Vestur-Skaftafellssysla"], ["India", "IN", "Andaman and Nicobar Islands~AN|Andhra Pradesh~AP|Arunachal Pradesh~AR|Assam~AS|Bihar~BR|Chandigarh~CH|Chhattisgarh~CT|Dadra and Nagar Haveli~DN|Daman and Diu~DD|Delhi~DL|Goa~GA|Gujarat~GJ|Haryana~HR|Himachal Pradesh~HP|Jammu and Kashmir~JK|Jharkhand~JH|Karnataka~KA|Kerala~KL|Lakshadweep~LD|Madhya Pradesh~MP|Maharashtra~MH|Manipur~MN|Meghalaya~ML|Mizoram~MZ|Nagaland~NL|Odisha~OR|Puducherry~PY|Punjab~PB|Rajasthan~RJ|Sikkim~WK|Tamil Nadu~TN|Telangana~TG|Tripura~TR|Uttarakhand~UT|Uttar Pradesh~UP|West Bengal~WB"], ["Indonesia", "ID", "Aceh~AC|Bali~BA|Bangka Belitung~BB|Banten~BT|Bengkulu~BE|Gorontalo~GO|Jakarta Raya~JK|Jambi~JA|Jawa Barat~JB|Jawa Tengah~JT|Jawa Timur~JI|Kalimantan Barat~KB|Kalimantan Selatan~KS|Kalimantan Tengah~KT|Kalimantan Timur~KI|Kalimantan Utara~KU|Kepulauan Riau~KR|Lampung~LA|Maluku~MA|Maluku Utara~MU|Nusa Tenggara Barat~NB|Nusa Tenggara Timur~NT|Papua~PA|Papua Barat~PB|Riau~RI|Sulawesi Selatan~SR|Sulawesi Tengah~ST|Sulawesi Tenggara~SG|Sulawesi Utara~SA|Sumatera Barat~SB|Sumatera Selatan~SS|Sumatera Utara~SU|Yogyakarta~YO"], ["Iran, Islamic Republic of", "IR", "Alborz~32|Ardabīl~03|Āz̄arbāyjān-e Gharbī~02|Āz̄arbāyjān-e Sharqī~01|Būshehr~06|Chahār Maḩāl va Bakhtīārī~08|Eşfahān~04|Fārs~14|Gīlān~19|Golestān~27|Hamadān~24|Hormozgān~23|Īlām~05|Kermān~15|Kermānshāh~17|Khorāsān-e Jonūbī~29|Khorāsān-e Raẕavī~30|Khorāsān-e Shomālī~61|Khūzestān~10|Kohgīlūyeh va Bowyer Aḩmad~18|Kordestān~16|Lorestān~20|Markazi~22|Māzandarān~21|Qazvīn~28|Qom~26|Semnān~12|Sīstān va Balūchestān~13|Tehrān~07|Yazd~25|Zanjān~11"], ["Iraq", "IQ", "Al Anbār~AN|Al Başrah~BA|Al Muthanná~MU|Al Qādisīyah~QA|An Najaf~NA|Arbīl~AR|As Sulaymānīyah~SU|Bābil~BB|Baghdād~BG|Dohuk~DA|Dhī Qār~DQ|Diyālá~DI|Karbalā'~KA|Kirkuk~KI|Maysān~MA|Nīnawá~NI|Şalāḩ ad Dīn~SD|Wāsiţ~WA"], ["Ireland", "IE", "Carlow~CW|Cavan~CN|Clare~CE|Cork~CO|Donegal~DL|Dublin~D|Galway~G|Kerry~KY|Kildare~KE|Kilkenny~KK|Laois~LS|Leitrim~LM|Limerick~LK|Longford~LD|Louth~LH|Mayo~MO|Meath~MH|Monaghan~MN|Offaly~OY|Roscommon~RN|Sligo~SO|Tipperary~TA|Waterford~WD|Westmeath~WH|Wexford~WX|Wicklow~WW"], ["Isle of Man", "IM", "Isle of Man"], ["Israel", "IL", "Central|Haifa|Jerusalem|Northern|Southern|Tel Aviv"], ["Italy", "IT", "Abruzzo~65|Basilicata~77|Calabria~78|Campania~72|Emilia-Romagna~45|Friuli-Venezia Giulia~36|Lazio~62|Liguria~42|Lombardia~25|Marche~57|Molise~67|Piemonte~21|Puglia~75|Sardegna~88|Sicilia~82|Toscana~52|Trentino-Alto Adige~32|Umbria~55|Valle d'Aosta~23|Veneto~34"], ["Jamaica", "JM", "Clarendon~13|Hanover~09|Kingston~01|Manchester~12|Portland~04|Saint Andrew~02|Saint Ann~06|Saint Catherine~14|Saint Elizabeth~11|Saint James~08|Saint Mary~05|Saint Thomas~03|Trelawny~07|Westmoreland~10"], ["Japan", "JP", "Aichi~23|Akita~05|Aomori~02|Chiba~12|Ehime~38|Fukui~18|Fukuoka~40|Fukushima~07|Gifu~21|Gunma~10|Hiroshima~34|Hokkaido~04|Hyogo~28|Ibaraki~08|Ishikawa~17|Iwate~03|Kagawa~37|Kagoshima~46|Kanagawa~14|Kochi~39|Kumamoto~43|Kyoto~26|Mie~24|Miyagi~04|Miyazaki~45|Nagano~20|Nagasaki~42|Nara~29|Niigata~15|Oita~44|Okayama~33|Okinawa~47|Osaka~27|Saga~41|Saitama~11|Shiga~25|Shimane~32|Shizuoka~22|Tochigi~09|Tokushima~36|Tokyo~13|Tottori~31|Toyama~16|Wakayama~30|Yamagata~06|Yamaguchi~35|Yamanashi~19"], ["Jersey", "JE", "Jersey"], ["Jordan", "JO", "‘Ajlūn~AJ|Al 'Aqabah~AQ|Al Balqā’~BA|Al Karak~KA|Al Mafraq~MA|Al ‘A̅şimah~AM|Aţ Ţafīlah~AT|Az Zarqā’~AZ|Irbid~IR|Jarash~JA|Ma‘ān~MN|Mādabā~MD"], ["Kazakhstan", "KZ", "Almaty~ALA|Aqmola~AKM|Aqtobe~AKT|Astana~AST|Atyrau~ATY|Batys Qazaqstan~ZAP|Bayqongyr|Mangghystau~MAN|Ongtustik Qazaqstan~YUZ|Pavlodar~PAV|Qaraghandy~KAR|Qostanay~KUS|Qyzylorda~KZY|Shyghys Qazaqstan~VOS|Soltustik Qazaqstan~SEV|Zhambyl~ZHA"], ["Kenya", "KE", "Central|Coast|Eastern|Nairobi Area|North Eastern|Nyanza|Rift Valley|Western"], ["Kiribati", "KI", "Abaiang|Abemama|Aranuka|Arorae|Banaba|Banaba|Beru|Butaritari|Central Gilberts|Gilbert Islands~G|Kanton|Kiritimati|Kuria|Line Islands~L|Maiana|Makin|Marakei|Nikunau|Nonouti|Northern Gilberts|Onotoa|Phoenix Islands~P|Southern Gilberts|Tabiteuea|Tabuaeran|Tamana|Tarawa|Tarawa|Teraina"], ["Korea, Democratic People's Republic of", "KP", "Chagang-do (Chagang Province)~04|Hamgyong-bukto (North Hamgyong Province)~09|Hamgyong-namdo (South Hamgyong Province)~08|Hwanghae-bukto (North Hwanghae Province)~06|Hwanghae-namdo (South Hwanghae Province)~05|Kangwon-do (Kangwon Province)~07|Nasŏn (Najin-Sŏnbong)~13|P'yongan-bukto (North P'yongan Province)~03|P'yongan-namdo (South P'yongan Province)~02|P'yongyang-si (P'yongyang City)~01|Yanggang-do (Yanggang Province)~10"], ["Korea, Republic of", "KR", "Ch'ungch'ongbuk-do~43|Ch'ungch'ongnam-do~44|Cheju-do~49|Chollabuk-do~45|Chollanam-do~46|Inch'on-Kwangyokhi~28|Kang-won-do~42|Kwangju-Kwangyokshi~28|Kyonggi-do~41|Kyongsangbuk-do~47|Kyongsangnam-do~48|Pusan-Kwangyokshi~26|Seoul-T'ukpyolshi~11|Sejong~50|Taegu-Kwangyokshi~27|Taejon-Kwangyokshi~30|Ulsan-Kwangyokshi~31"], ["Kuwait", "KW", "Al Aḩmadi~AH|Al Farwānīyah~FA|Al Jahrā’~JA|Al ‘Āşimah~KU|Ḩawallī~HA|Mubārak al Kabir~MU"], ["Kyrgyzstan", "KG", "Batken Oblasty~B|Bishkek Shaary~GB|Chuy Oblasty (Bishkek)~C|Jalal-Abad Oblasty~J|Naryn Oblasty~N|Osh Oblasty~O|Talas Oblasty~T|Ysyk-Kol Oblasty (Karakol)~Y"], ["Laos", "LA", "Vientiane~VT|Attapu!(Attopeu)~AT|Bokèo~BK|Bolikhamxai!(Borikhane)~BL|Champasak!(Champassak)~CH|Houaphan~HO|Khammouan~KH|Louang!Namtha~LM|Louangphabang!(Louang!Prabang)~LP|Oudômxai!(Oudomsai)~OU|Phôngsali!(Phong!Saly)~PH|Salavan!(Saravane)~SL|Savannakhét~SV|Vientiane~VI|Xaignabouli~XA|Xékong!(Sékong)~XE|Xiangkhoang!(Xieng!Khouang)~XI|Xaisômboun~XN"], ["Latvia", "LV", "Aizkraukles Rajons|Aluksnes Rajons|Balvu Rajons|Bauskas Rajons|Cesu Rajons|Daugavpils|Daugavpils Rajons|Dobeles Rajons|Gulbenes Rajons|Jekabpils Rajons|Jelgava|Jelgavas Rajons|Jurmala|Kraslavas Rajons|Kuldigas Rajons|Leipaja|Liepajas Rajons|Limbazu Rajons|Ludzas Rajons|Madonas Rajons|Ogres Rajons|Preilu Rajons|Rezekne|Rezeknes Rajons|Riga|Rigas Rajons|Saldus Rajons|Talsu Rajons|Tukuma Rajons|Valkas Rajons|Valmieras Rajons|Ventspils|Ventspils Rajons"], ["Lebanon", "LB", "Beyrouth|Ech Chimal|Ej Jnoub|El Bekaa|Jabal Loubnane"], ["Lesotho", "LS", "Berea~D|Butha-Buthe~B|Leribe~C|Mafeteng~E|Maseru~A|Mohales Hoek~F|Mokhotlong~J|Qacha's Nek~H|Quthing~G|Thaba-Tseka~K"], ["Liberia", "LR", "Bomi~BM|Bong~BG|Gbarpolu~GP|Grand Bassa~GB|Grand Cape Mount~CM|Grand Gedeh~GG|Grand Kru~GK|Lofa~LO|Margibi~MG|Maryland~MY|Montserrado~MO|Nimba~NI|River Cess~RI|River Geee~RG|Sinoe~SI"], ["Libya", "LY", "Ajdabiya|Al 'Aziziyah|Al Fatih|Al Jabal al Akhdar|Al Jufrah|Al Khums|Al Kufrah|An Nuqat al Khams|Ash Shati'|Awbari|Az Zawiyah|Banghazi|Darnah|Ghadamis|Gharyan|Misratah|Murzuq|Sabha|Sawfajjin|Surt|Tarabulus|Tarhunah|Tubruq|Yafran|Zlitan"], ["Liechtenstein", "LI", "Balzers~01|Eschen~02|Gamprin~03|Mauren~04|Planken~05|Ruggell~06|Schaan~07|Schellenberg~08|Triesen~09|Triesenberg~10|Vaduz~11"], ["Lithuania", "LT", "Akmenes Rajonas|Alytaus Rajonas|Alytus|Anyksciu Rajonas|Birstonas|Birzu Rajonas|Druskininkai|Ignalinos Rajonas|Jonavos Rajonas|Joniskio Rajonas|Jurbarko Rajonas|Kaisiadoriu Rajonas|Kaunas|Kauno Rajonas|Kedainiu Rajonas|Kelmes Rajonas|Klaipeda|Klaipedos Rajonas|Kretingos Rajonas|Kupiskio Rajonas|Lazdiju Rajonas|Marijampole|Marijampoles Rajonas|Mazeikiu Rajonas|Moletu Rajonas|Neringa Pakruojo Rajonas|Palanga|Panevezio Rajonas|Panevezys|Pasvalio Rajonas|Plunges Rajonas|Prienu Rajonas|Radviliskio Rajonas|Raseiniu Rajonas|Rokiskio Rajonas|Sakiu Rajonas|Salcininku Rajonas|Siauliai|Siauliu Rajonas|Silales Rajonas|Silutes Rajonas|Sirvintu Rajonas|Skuodo Rajonas|Svencioniu Rajonas|Taurages Rajonas|Telsiu Rajonas|Traku Rajonas|Ukmerges Rajonas|Utenos Rajonas|Varenos Rajonas|Vilkaviskio Rajonas|Vilniaus Rajonas|Vilnius|Zarasu Rajonas"], ["Luxembourg", "LU", "Diekirch|Grevenmacher|Luxembourg"], ["Macao", "MO", "Macao"], ["Macedonia, Republic of", "MK", "Aracinovo|Bac|Belcista|Berovo|Bistrica|Bitola|Blatec|Bogdanci|Bogomila|Bogovinje|Bosilovo|Brvenica|Cair (Skopje)|Capari|Caska|Cegrane|Centar (SkopjeZupa|Cesinovo|Cucer-Sandevo|Debar|Delcevo|Delogozdi|Demir Hisar|Demir Kapija|Dobrusevo|Dolna Banjica|Dolneni|Dorce Petrov (Skopje)Dzepciste|Gazi Baba (Skopje)|Gevgelija|Gostivar|Gradsko|Ilinden|Izvor|Jegunovce|Kamenjane|Karbinci|Karpos (Skopje)|Kavadarci|Kicevo|Kisela Voda (lecevce|Kocani|Konce|Kondovo|Konopiste|Kosel|Kratovo|Kriva rivogastani|Krusevo|Kuklis|Kukurecani|Kumanovo|Labunista|Lipkovo|Lozovo|Lukovo|Makedonska Kamenica|Makedonski Brod|Mavrovi eista|Miravci|Mogila|Murtino|Negotino|Negotino-Poloska|Novaci|Novo Selo|Oblesevo|Ohrid|Orasac|Orizari|Oslomej|Pehcevo|Petrovec|Plasnia|Podares|Prilepp|Radovis|Rankovce|Resen|Rosoman|Rostusa|Samokov|Saraj|Sipkovica|Sopiste|Sopotnika|Srbinovo|Star Dojran|Staravina|Staro e|Stip|Struga|Strumica|Studenicani|Suto Orizari (Skopje)|Sveti Nikole|Tearce|Tetovo|Topolcani|Valandovo|Vasilevo|Veles|Velesta|Vevcani|Vinica|Vitolistica|Vrapciste|Vratnica|Vrutok|Zajas|Zelenikovo|Zileno|Zitose|Zletovo|Zrnovci"], ["Madagascar", "MG", "Antananarivo~T|Antsiranana~D|Fianarantsoa~F|Mahajanga~M|Toamasina~A|Toliara~U"], ["Malawi", "MW", "Balaka~BA|Blantyre~BL|Chikwawa~CK|Chiradzulu~CR|Chitipa~CT|Dedza~DE|Dowa~DO|Karonga~KR|Kasungu~KS|Likoma~LK|Lilongwe~LI|Machinga~MH|Mangochi~MG|Mchinji~MC|Mulanje~MU|Mwanza~MW|Mzimba~MZ|Nkhata Bay~NE|Nkhotakota~NB|Nsanje~NS|Ntcheu~NU|Ntchisi~NI|Phalombe~PH|Rumphi~RU|Salima~SA|Thyolo~TH|Zomba~ZO"], ["Malaysia", "MY", "Johor~01|Kedah~02|Kelantan~03|Melaka~04|Negeri Sembilan~05|Pahang~06|Perak~08|Perlis~09|Pulau Pinang~07|Sabah~12|Sarawak~13|Selangor~10|Terengganu~11|Wilayah Persekutuan (Kuala Lumpur)~14|Wilayah Persekutuan (Labuan)~15|Wilayah Persekutuan (Putrajaya)~16"], ["Maldives", "MV", "Alifu Alifu~02|Alifu Dhaalu~00|Baa~20|Dhaalu~17|Faafu~14|Gaafu Alifu~27|Gaafu Dhaalu~28|Gnaviyani~29|Haa Alifu~07|Haa Dhaalu~23|Kaafu~29|Laamu~05|Lhaviyani~03|Malé~MLE|Meemu~12|Noonu~25|Raa~13|Seenu~01|Shaviyani~24|Thaa~08|Vaavu~04"], ["Mali", "ML", "Bamako~BKO|Gao~7|Kayes~1|Kidal~8|Koulikoro~2|Mopti~5|Segou~4|Sikasso~3|Tombouctou~6"], ["Malta", "MT", "Valletta"], ["Marshall Islands", "MH", "Ailinginae|Ailinglaplap|Ailuk|Arno|Aur|Bikar|Bikini|Bokak|Ebon|Enewetak|Erikub|Jabat|Jaluit|Jemo|Kili|Kwajalein|Lae|Lib|Likiep|Majuro|Maloelap|Mejitorik|Namu|Rongelap|Rongrik|Toke|Ujae|Ujelang|Utirik|Wotho|Wotje"], ["Martinique", "MQ", "Martinique"], ["Mauritania", "MR", "Adrar~07|Assaba~03|Brakna~05|Dakhlet Nouadhibou~08|Gorgol~04|Guidimaka~10|Hodh Ech Chargui~01|Hodh El Gharbi~02|Inchiri~12|Nouakchott Nord~14|Nouakchott Ouest~13|Nouakchott Sud~15|Tagant~09|Tiris Zemmour~11|Trarza~06"], ["Mauritius", "MU", "Agalega Islands~AG|Beau Bassin-Rose Hill~BR|Black River~BL|Cargados Carajos Shoals~CC|Curepipe~CU|Flacq~FL|Grand Port~GP|Moka~MO|Pamplemousses~PA|Plaines Wilhems~PW|Port Louis (City)~PU|Port Louis~PL|Riviere du Rempart~RR|Rodrigues Island~RO|Savanne~SA|Vacoas-Phoenix~CP"], ["Mayotte", "YT", "Dzaoudzi~01|Pamandzi~02|Mamoudzou~03|Dembeni~04|Bandrélé~05|Kani-Kéli~06|Bouéni~07|Chirongui~08|Sada~09|Ouangani~10|Chiconi~11|Tsingoni~12|M'Tsangamouji~13|Acoua~14|Mtsamboro~15|Bandraboua~16|Koungou~17"], ["Mexico", "MX", "Aguascalientes~AGU|Baja California~BCN|Baja California Sur~BCS|Campeche~CAM|Chiapas~CHP|Chihuahua~CHH|Coahuila de Zaragoza~COA|Colima~COL|Distrito Federal~DIF|Durango~DUR|Guanajuato~GUA|Guerrero~GRO|Hidalgo~HID|Jalisco~JAL|Mexico~MEX|Michoacan de Ocampo~MIC|Morelos~MOR|Nayarit~NAY|Nuevo Leon~NLE|Oaxaca~OAX|Puebla~PUE|Queretaro de Arteaga~QUE|Quintana Roo~ROO|San Luis Potosi~SLP|Sinaloa~SIN|Sonora~SON|Tabasco~TAB|Tamaulipas~TAM|Tlaxcala~TLA|Veracruz-Llave~VER|Yucatan~YUC|Zacatecas~ZAC"], ["Micronesia, Federated States of", "FM", "Chuuk (Truk)~TRK|Kosrae~KSA|Pohnpei~PNI|Yap~YAP"], ["Moldova", "MD", "Balti|Cahul|Chisinau|Chisinau|Dubasari|Edinet|Gagauzia|Lapusna|Orhei|Soroca|Tighina|Ungheni"], ["Monaco", "MC", "Fontvieille|La Condamine|Monaco-Ville|Monte-Carlo"], ["Mongolia", "MN", "Arhangay~073|Bayan-Olgiy~071|Bayanhongor~069|Bulgan~067|Darhan~037|Dornod~061|Dornogovi~063|Dundgovi~059|Dzavhan~065|Govi-Altay~065|Govi-Sumber~064|Hovd~043|Hovsgol~041|Omnogovi~053|Ovorhangay~055|Selenge~049|Suhbaatar~051|Tov~047|Ulaanbaatar~1|Uvs~046"], ["Montenegro", "ME", "Andrijevica~01|Bar~02|Berane~03|Bijelo Polje~04|Budva~05|Cetinje~06|Danilovgrad~07|Gusinje~22|Herceg Novi~08|Kolašin~09|Kotor~10|Mojkovac~11|Nikšić~12|Petnica~23|Plav~13|Plužine~14|Pljevlja~15|Podgorica~16|Rožaje~17|Šavnik~18|Tivat~19|Ulcinj~20|Žabljak~21"], ["Montserrat", "MS", "Saint Anthony|Saint Georges|Saint Peter's"], ["Morocco", "MA", "Agadir|Al Hoceima|Azilal|Ben Slimane|Beni Mellal|Boulemane|Casablanca|Chaouen|El Jadida|El Kelaa des Srarhna|Er Essaouira|Fes|Figuig|Guelmim|Ifrane|Kenitra|Khemisset|Khenifra|Khouribga|Laayoune|Larache|Marrakech|Meknes|Nador|Ouarzazate|Oujda|Rabat-|Settat|Sidi Kacem|Tan-Tan|Tanger|Taounate|Taroudannt|Tata|Taza|Tetouan|Tiznit"], ["Mozambique", "MZ", "Cabo Delgado~P|Gaza~G|Inhambane~I|Manica~B|Maputo~L|Maputo (City)~MPM|Nampula~N|Niassa~A|Sofala~S|Tete~T|Zambezia~Q"], ["Myanmar", "MM", "Ayeyarwady Region~07|Bago Region~02|Chin State~14|Kachin State~11|Kayah State~12|Kayin State~13|Magway Region~03|Mandalay Region~04|Mon State~15|Rakhine State~16|Shan State~17|Sagaing Region~01|Tanintharyi Region~05|Yangon Region~06|Naypyidaw Union Territory~18|Danu Self-Administered Zone|Kokang Self-Administered Zone|Naga Self-Administered Zone|Pa-O Self-Administered Zone|Pa Laung Self-Administered Zone|Wa Self-Administered Division"], ["Namibia", "NA", "Erongo~ER|Hardap~HA|Kavango East~KE|Kavango West~KW|Karas~KA|Khomas~KH|Kunene~KU|Ohangwena~OW|Omaheke~OH|Omusati~OS|Oshana~ON|Oshikoto~OT|Otjozondjupa~OD|Zambezi~CA"], ["Nauru", "NR", "Aiwo~01|Anabar~02|Anetan~03|Anibare~04|Baiti~05|Boe~06|Buada~07|Denigomodu~08|Ewa~09|Ijuw~10|Meneng~11|Nibok~12|Uaboe~13|Yaren~14"], ["Nepal", "NP", "Bagmati~BA|Bheri~BH|Dhawalagiri~DH|Gandaki~GA|Janakpur~JA|Karnali~KA|Kosi~KO|Lumbini~LU|Mahakali~MA|Mechi~ME|Narayani~NA|Rapti~RA|Sagarmatha~SA|Seti~SE"], ["Netherlands", "NL", "Drenthe~DR|Flevoland~FL|Friesland~FR|Gelderland~GE|Groningen~GR|Limburg~LI|Noord-Brabant~NB|Noord-Holland~NH|Overijssel~OV|Utrecht~UT|Zeeland~ZE|Zuid-Holland~ZH"], ["New Caledonia", "NC", "Iles Loyaute|Nord|Sud"], ["New Zealand", "NZ", "Auckland (Tāmaki-makau-rau)~AUK|Bay of Plenty (Te Moana a Toi Te Huatahi)~BOP|Canterbury (Waitaha)~CAN|Hawke's Bay (Te Matau a Māui)~HKB|Manawatu-Wanganui (Manawatu Whanganui)~MWT|Northland (Te Tai tokerau)~NTL|Otago (Ō Tākou)~OTA|Southland (Murihiku)~STL|Taranaki (Taranaki)~TKI|Waikato~WKO|Wellington (Te Whanga-nui-a-Tara)~WGN|West Coast (Te Taihau ā uru)~WTC|Gisborne District (Tūranga nui a Kiwa)~GIS|Marlborough District~MBH|Nelson City (Whakatū)~NSN|Tasman District~TAS|Chatham Islands Territory (Wharekauri)~CIT"], ["Nicaragua", "NI", "Boaco~BO|Carazo~CA|Chinandega~CI|Chontales~CO|Estelí~ES|Granada~GR|Jinotega~JI|León~LE|Madriz~MD|Managua~MN|Masaya~MS|Matagalpa~MT|Nueva Segovia~NS|Río San Juan~SJ|Rivas~RI|Atlántico Norte~AN|Atlántico Sur~AS"], ["Niger", "NE", "Agadez~1|Diffa~2|Dosso~3|Maradi~4|Niamey~8|Tahoua~5|Tillabéri~6|Zinder~7"], ["Nigeria", "NG", "Abia~AB|Abuja Federal Capital Territory~FC|Adamawa~AD|Akwa Ibom~AK|Anambra~AN|Bauchi~BA|Bayelsa~BY|Benue~BE|Borno~BO|Cross River~CR|Delta~DE|Ebonyi~EB|Edo~ED|Ekiti~EK|Enugu~EN|Gombe~GO|Imo~IM|Jigawa~JI|Kaduna~KD|Kano~KN|Katsina~KT|Kebbi~KE|Kogi~KO|Kwara~KW|Lagos~LA|Nassarawa~NA|Niger~NI|Ogun~OG|Ondo~ON|Osun~OS|Oyo~OY|Plateau~PL|Rivers~RI|Sokoto~SO|Taraba~TA|Yobe~YO|Zamfara~ZA"], ["Niue", "NU", "Niue"], ["Norfolk Island", "NF", "Norfolk Island"], ["Northern Mariana Islands", "MP", "Northern Islands|Rota|Saipan|Tinian"], ["Norway", "NO", "Akershus~02|Aust-Agder~09|Buskerud~06|Finnmark~20|Hedmark~04|Hordaland~12|Møre og Romsdal~15|Nordland~18|Nord-Trøndelag~17|Oppland~05|Oslo~03|Rogaland~11|Sogn og Fjordane~14|Sør-Trøndelag~16|Telemark~08|Troms~19|Vest-Agder~10|Vestfold~07|Østfold~01|Jan Mayen~22|Svalbard~21"], ["Oman", "OM", "Ad Dakhiliyah~DA|Al Buraymi~BU|Al Wusta~WU|Az Zahirah~ZA|Janub al Batinah~BS|Janub ash Sharqiyah~SS|Masqat~MA|Musandam~MU|Shamal al Batinah~BJ|Shamal ash Sharqiyah~SJ|Zufar~ZU"], ["Pakistan", "PK", "Āzād Kashmīr~JK|Balōchistān~BA|Gilgit-Baltistān~GB|Islāmābād~IS|Khaībar Pakhtūnkhwās~KP|Punjāb~PB|Sindh~SD|Federally Administered Tribal Areas~TA"], ["Palau", "PW", "Aimeliik~002|Airai~004|Angaur~010|Hatobohei~050|Kayangel~100|Koror~150|Melekeok~212|Ngaraard~214|Ngarchelong~218|Ngardmau~222|Ngatpang~224|Ngchesar~226|Ngeremlengui~227|Ngiwal~228|Peleliu~350|Sonsoral~350"], ["Palestine, State of", "PS", "Palestine"], ["Panama", "PA", "Bocas del Toro~1|Chiriquí~4|Coclé~2|Colón~3|Darién~5|Emberá~EM|Herrera~6|Kuna Yala~KY|Los Santos~7|Ngäbe-Buglé~NB|Panamá~8|Panamá Oeste~10|Veraguas~9"], ["Papua New Guinea", "PG", "Bougainville~NSB|Central~CPM|Chimbu~CPK|East New Britain~EBR|East Sepik~ESW|Eastern Highlands~EHG|Enga~EPW|Gulf~GPK|Hela~HLA|Jiwaka~JWK|Madang~MOM|Manus~MRL|Milne Bay~MBA|Morobe~MPL|Port Moresby~NCD|New Ireland~NIK|Northern~NPP|Southern Highlands~SHM|West New Britain~WBK|West Sepik~SAN|Western~WPD|Western Highlands~WHM"], ["Paraguay", "PY", "Alto Paraguay~16|Alto Parana~10|Amambay~13|Asuncion~ASU|Caaguazu~5|Caazapa~6|Canindeyu~14|Central~11|Concepcion~1|Cordillera~3|Guaira~4|Itapua~7|Misiones~8|Neembucu~12|Paraguari~9|Presidente Hayes~15|San Pedro~2"], ["Peru", "PE", "Amazonas~AMA|Ancash~ANC|Apurimac~APU|Arequipa~ARE|Ayacucho~AYA|Cajamarca~CAJ|Callao~CAL|Cusco~CUS|Huancavelica~HUV|Huanuco~HUC|Ica~ICA|Junin~JUN|La Libertad~LAL|Lambayeque~LAM|Lima~LIM|Loreto~LOR|Madre de Dios~MDD|Moquegua~MOQ|Municipalidad Metropolitana de Lima~LMA|Pasco~PAS|Piura~PIU|Puno~PUN|San Martin~SAM|Tacna~TAC|Tumbes~TUM|Ucayali~UCA"], ["Philippines", "PH", "Abra|Agusan del Norte|Agusan del Sur|Aklan|Albay|Angeles|Antique|Aurora|Bacolod|Bago|Baguio|Bais|Basilan|Basilan an|Batanes|Batangas|Batangas City|Benguet|Bohol|Bukidnon|Bulacan|Butuan|Cabanatuan|Cadiz|Cagayan|Cagayan de Oro|Calbayog|Caloocan|Camarines arines Sur|Camiguin|Canlaon|Capiz|Catanduanes|Cavite|Cavite City|Cebu|Cebu City|Cotabato|Dagupan|Danao|Dapitan|Davao City Davao|Davao del Sur|Davao Dipolog|Dumaguete|Eastern Samar|General Santos|Gingoog|Ifugao|Iligan|Ilocos Norte|Ilocos Sur|Iloilo|Iloilo City|Iriga|Isabela|Kalinga-Apayao|La a Union|Laguna|Lanao del Norte|Lanao del Sur|Laoag|Lapu-Lapu|Legaspi|Leyte|Lipa|Lucena|Maguindanao|Mandaue|Manila|Marawi|Marinduque|Masbate|Mindoro l|Mindoro Oriental|Misamis Occidental|Misamis Oriental|Mountain|Naga|Negros Occidental|Negros Oriental|North Cotabato|Northern Samar|Nueva va Vizcaya|Olongapo|Ormoc|Oroquieta|Ozamis|Pagadian|Palawan|Palayan|Pampanga|Pangasinan|Pasay|Puerto Princesa|Quezon|Quezon ino|Rizal|Romblon|Roxas|Samar|San Carlos (in Negros Occidental)|San Carlos (in Pangasinan)|San Jose|San Pablo|Silay|Siquijor|Sorsogon|South Southern Leyte|Sultan Kudarat|Sulu|Surigao|Surigao del Norte|Surigao del Sur|Tacloban|Tagaytay|Tagbilaran|Tangub|Tarlac|Tawitawi|Toledo|Trece Zambales|Zamboanga|Zamboanga del Norte|Zamboanga del Sur"], ["Pitcairn", "PN", "Pitcairn Islands"], ["Poland", "PL", "Dolnośląskie~DS|Kujawsko-pomorskie~KP|Łódzkie~LD|Lubelskie~LU|Lubuskie~LB|Malopolskie~MA|Mazowieckie~MZ|Opolskie~OP|Podkarpackie~PK|Podlaskie~PD|Pomorskie~PM|Śląskie~SL|  Świętokrzyskie~SK|Warmińsko-mazurskie~WN|Wielkopolskie~WP|Zachodniopomorskie~ZP"], ["Portugal", "PT", "Acores~20|Aveiro~01|Beja~02|Braga~03|Braganca~04|Castelo Branco~05|Coimbra~06|Evora~07|Faro~08|Guarda~09|Leiria~10|Lisboa~11|Madeira~30|Portalegre~12|Porto~13|Santarem~14|Setubal~15|Viana do Castelo~16|Vila Real~17|Viseu~18"], ["Puerto Rico", "PR", "Adjuntas|Aguada|Aguadilla|Aguas Buenas|Aibonito|Anasco|Arecibo|Arroyo|Barceloneta|Barranquitas|Bayamon|Cabo Rojo|Caguas|Camuy|Canovanas|Carolina|Cat|Ceiba|Ciales|Cidra|Coamo|Comerio|Corozal|Culebra|Dorado|Fajardo|Florida|Guanica|Guayama|Guayanilla|Guaynabo|Gurabo|Hatillo|Hormigueros|Humacao|Isabe|Juana Diaz|Juncos|Lajas|Lares|Las Marias|Las oiza|Luquillo|Manati|Maricao|Maunabo|Mayaguez|Moca|Morovis|Naguabo|Naranjito|Orocovis|Patillas|Penuelas|Ponce|Quebradillas|Rincon|Rio Grande|Sabana linas|San German|San Juan|San Lorenzo|San Sebastian|Santa Isabel|Toa Alta|Toa Baja|Trujillo Alto|Utuado|Vega Alta|Vega ues|Villalba|Yabucoa|Yauco"], ["Qatar", "QA", "Ad Dawḩah~DA|Al Khawr wa adh Dhakhīrah~KH|Al Wakrah~WA|Ar Rayyān~RA|Ash Shamāl~MS|Az̧ Za̧`āyin~ZA|Umm Şalāl~US"], ["Réunion", "RE", "Réunion"], ["Romania", "RO", "Alba~AB|Arad~AR|Arges~AG|Bacau~BC|Bihor~BH|Bistrita-Nasaud~BN|Botosani~BT|Braila~BR|Brasov~BV|Bucuresti~B|Buzau~BZ|Calarasi~CL|Caras-Severin~CS|Cluj~CJ|Constanta~CT|Covasna~CV|Dambovita~DB|Dolj~DJ|Galati~GL|Giurgiu~GR|Gorj~GJ|Harghita~HR|Hunedoara~HD|Ialomita~IL|Iasi~IS|Maramures~MM|Mehedinti~MH|Mures~MS|Neamt~NT|Olt~OT|Prahova~PH|Salaj~SJ|Satu Mare|Sibiu~SB|Suceava~SV|Teleorman~TR|Timis~TM|Tulcea~TL|Valcea~VL|Vaslui~VS|Vrancea~VN"], ["Russian Federation", "RU", "Adygeya~AD|Altay (Gorno-Altaysk)~AL|Altayskiy~ALT|Amurskaya~AMU|Arkhangel'skaya~ARK|Astrakhanskaya~AST|Bashkortostan~BA|Belgorodskaya~BEL|Bryanskaya~BRY|Buryatiya~BU|Chechenskaya~CE|Chelyabinskaya~CHE|Chukotskiy~CHU|Chuvashskaya~CU|Dagestan~DA|Ingushetiya~IN|Irkutskaya~IRK|Ivanovskaya~IVA|Kabardino-Balkariya~KB|Kalmykiya~KL|Kaluzhskaya~KLU|Kamchatskaya~KAM|Karachayevo-Cherkesiya~KC|Kareliya~KR|Khabarovskiy~KHA|Khakasiya~KK|Khanty-Mansiyskiy~KHM|Kirovskaya~KIR|Komi~KO|Kostromskaya~KOS|Krasnodarskiy~KDA|Krasnoyarskiy~KYA|Kurganskaya~KGN|Kurskaya~KRS|Leningradskaya~LEN|Lipetskaya~LIP|Magadanskaya~MAG|Mariy-El~ME|Mordoviya~MO|Moskovskaya~MOS|Moskva~MOW|Murmanskaya~MU|Nenetskiy~NEN|Nizhegorodskaya~NIZ|Novgorodskaya~NGR|Novosibirskaya~NVS|Omskaya~OMS|Orenburgskaya~ORE|Orlovskaya~ORL|Permskiy~PER|Permskaya~PER|Primorskiy~PRI|Pskovskaya~PSK|Rostovskaya~ROS|Ryazanskaya~RYA|Sakha (Yakutiya)~SA|Sakhalinskaya~SAK|Samarskaya~SAM|Sankt-Peterburg~SPE|Saratovskaya~SAR|Severnaya Osetiya-Alaniya~SE|Smolenskaya~SMO|Stavropol'skiy~STA|Sverdlovskaya~SVE|Tambovskaya~TAM|Tatarstan~TA|Tomskaya~TOM|Tul'skaya~TUL|Tverskaya~TVE|Tyumenskaya~TYU|Tyva~TY|Udmurtskaya~UD|Ul'yanovskaya~ULY|Vladimirskaya~VLA|Volgogradskaya~VGG|Vologodskaya~VLG|Voronezhskaya~VOR|Yamalo-Nenetskiy~YAN|Yaroslavskaya~YAR|Yevreyskaya~YEV|Zabaykal'skiy~ZAB"], ["Rwanda", "RW", "Kigali~01|Eastern~02|Northern~03|Western~04|Southern~05"], ["Saint Barthélemy", "BL", "Au Vent~02|Sous le Vent~01"], ["Saint Helena, Ascension and Tristan da Cunha", "SH", "Ascension~AC|Saint Helena~HL|Tristan da Cunha~TA"], ["Saint Kitts and Nevis", "KN", "Christ Church Nichola Town|Saint Anne Sandy Point|Saint George Basseterre|Saint George Gingerland|Saint James Windward|Saint John Capisterre|Saint ree|Saint Mary Cayon|Saint Paul Capisterre|Saint Paul Charlestown|Saint Peter Basseterre|Saint Thomas Lowland|Saint Thomas Middle Island|Trinity Point"], ["Saint Lucia", "LC", "Anse-la-Raye~01|Canaries~12|Castries~02|Choiseul~03|Dennery~05|Gros Islet~06|Laborie~07|Micoud~08|Soufriere~10|Vieux Fort~11"], ["Saint Martin", "MF", "Saint Martin"], ["Saint Pierre and Miquelon", "PM", "Miquelon|Saint Pierre"], ["Saint Vincent and the Grenadines", "VC", "Charlotte~01|Grenadines~06|Saint~Andrew|Saint~David|Saint~George|Saint~Patrick"], ["Samoa", "WS", "A'ana~AA|Aiga-i-le-Tai~AL|Atua~AT|Fa'asaleleaga~FA|Gaga'emauga~GE|Gagaifomauga~GI|Palauli~PA|Satupa'itea~SA|Tuamasaga~TU|Va'a-o-Fonoti~VF|Vaisigano~VS"], ["San Marino", "SM", "Acquaviva~01|Borgo Maggiore~06|Chiesanuova~02|Domagnano~03|Faetano~04|Fiorentino~05|Montegiardino~08|San Marino~07|Serravalle~09"], ["Sao Tome and Principe", "ST", "Principe~P|Sao Tome~S"], ["Saudi Arabia", "SA", "'Asir~14|Al Bahah~11|Al Hudud ash Shamaliyah~08|Al Jawf~12|Al Madinah al Munawwarah~03|Al Qasim~05|Ar Riyad~01|Ash Sharqiyah~04|Ha'il~06|Jazan~09|Makkah al Mukarramah~02|Najran~10|Tabuk~07"], ["Senegal", "SN", "Dakar~DK|Diourbel~DB|Fatick~FK|Kaffrine~KA|Kaolack~KL|Kedougou~KE|Kolda~KD|Louga~LG|Matam~MT|Saint-Louis~SL|Sedhiou~SE|Tambacounda~TC|Thies~TH|Ziguinchor~ZG"], ["Serbia", "RS", "Beograd (Belgrade)~00|Borski~14|Braničevski~11|Jablanički~23|Južnobački~06|Južnobanatski~04|Kolubarski~09|Kosovski~25|Kosovsko-Mitrovački~28|Kosovsko-Pomoravski~29|Mačvanski~08|Moravički~17|Nišavski~20|Pčinjski~24|Pećki~26|Pirotski~22|Podunavski~10|Pomoravski~13|Prizrenski~27|Rasinski~19|Raški~18|Severnobački~01|Severnobanatski~03|Srednjebanatski~02|Sremski~07|Šumadijski~12|Toplički~21|Zaječarski~15|Zapadnobački~05|Zlatiborski~16"], ["Seychelles", "SC", "Anse aux Pins~01|Anse Boileau~02|Anse Etoile~03|Anse Royale~05|Anu Cap~04|Baie Lazare~06|Baie Sainte Anne~07|Beau Vallon~08|Bel Air~09|Bel Ombre~10|Cascade~11|Glacis~12|Grand'Anse Mahe~13|Grand'Anse Praslin~14|La Digue~15|La Riviere Anglaise~16|Les Mamelles~24|Mont Buxton~17|Mont Fleuri~18|Plaisance~19|Pointe La Rue~20|Port Glaud~21|Roche Caiman~25|Saint Louis~22|Takamaka~23"], ["Sierra Leone", "SL", "Eastern~E|Northern~N|Southern~S|Western~W"], ["Singapore", "SG", "Central Singapore~01|North East~02|North West~03|South East~04|South West~05"], ["Sint Maarten (Dutch part)", "SX", "Sint Maarten"], ["Slovakia", "SK", "Banskobystricky~BC|Bratislavsky~BL|Kosicky~KI|Nitriansky~NI|Presovsky~PV|Trenciansky~TC|Trnavsky~TA|Zilinsky~ZI"], ["Slovenia", "SI", "Ajdovscina~001|Apace~195|Beltinci~002|Benedikt~148|Bistrica ob Sotli~149|Bled~003|Bloke~150|Bohinj~004|Borovnica~005|Bovec~006|Braslovce~151|Brda~007|Brezice~009|Brezovica~008|Cankova~152|Celje~011|Cerklje na Gorenjskem~012|Cerknica~013|Cerkno~014|Cerkvenjak~153|Cirkulane~196|Crensovci~015|Crna na Koroskem~016|Crnomelj~017|Destrnik~018|Divaca~019|Dobje~154|Dobrepolje~020|Dobrna~155|Dobrova-Polhov Gradec~021|Dobrovnik~156|Dol pri Ljubljani~022|Dolenjske Toplice~157|Domzale~023|Dornava~024|Dravograd~025|Duplek~026|Gorenja Vas-Poljane~027|Gorisnica~028|Gorje~207|Gornja Radgona~029|Gornji Grad~030|Gornji Petrovci~031|Grad~158|Grosuplje~032|Hajdina~159|Hoce-Slivnica~160|Hodos~161|Horjul~162|Hrastnik~034|Hrpelje-Kozina~035|Idrija~036|Ig~037|Ilirska Bistrica~038|Ivancna Gorica~039|Izola~040s|Jesenice~041|Jursinci~042|Kamnik~043|Kanal~044|Kidricevo~045|Kobarid~046|Kobilje~047|Kocevje~048|Komen~049|Komenda~164|Koper~050|Kodanjevica na Krki~197|Kostel~165|Kozje~051|Kranj~052|Kranjska Gora~053|Krizevci~166|Krsko~054|Kungota~055|Kuzma~056|Lasko~057|Lenart~058|Lendava~059|Litija~068|Ljubljana~061|Ljubno~062|Ljutomer~063|Log-Dragomer~208|Logatec~064|Loska Dolina~065|Loski Potok~066|Lovrenc na Pohorju~167|Lukovica~068|Luce~067|Majsperk~069|Makole~198|Maribor~070|Markovci~168|Medvode~071|Menges~072|Metlika~073|Mezica~074|Miklavz na Dravskem Polju~169|Miren-Kostanjevica~075|Mirna~212|Mirna Pec~170|Mislinja~076|Mokronog-Trebelno~199|Moravce~077|Moravske Toplice~078|Mozirje~079|Murska Sobota~080|Naklo~082|Nazarje~083|Nova Gorica~084|Novo Mesto~085|Odranci~086|Ormoz~087|Osilnica~088|Pesnica~089|Piran~090|Pivka~091|Podcetrtek~092|Podlehnik~172|Podvelka~093|Poljcane~200|Postojna~094|Prebold~174|Preddvor~095|Prevalje~175|Ptuj~096|Race-Fram~098|Radece~099|Radenci~100|Radlje ob Dravi~101|Radovljica~102|Ravne na Koroskem~103|Razkrizje~176|Recica ob Savinji~209|Rence-Vogrsko~201|Ribnica~104|Ribnica na Poboriu~177|Rogaska Slatina~106|Rogasovci~105|Rogatec~107|Ruse~108|Salovci~033|Selnica ob Dravi~178|Semic~109|Sempeter-Vrtojba~183|Sencur~117|Sentilj~118|Sentjernej~119|Sentjur~120|Sentrupert~211|Sevnica~110|Sezana~111|Skocjan~121|Skofja Loka~122|Skofljica~123|Slovenj Gradec~112|Slovenska Bistrica~113|Slovenske Konjice~114|Smarje pri elsah~124|Smarjeske Toplice~206|Smartno ob Paki~125|Smartno pri Litiji~194|Sodrazica~179|Solcava~180|Sostanj~126|Sredisce ob Dravi~202|Starse~115|Store~127|Straza~203|Sveta Ana~181|Sveta Trojica v Slovenskih Goricah~204|Sveta Andraz v Slovenskih Goricah~182|Sveti Jurij~116|Sveti Jurij v Slovenskih Goricah~210|Sveti Tomaz~205|Tabor~184|Tisina~128|Tolmin~128|Trbovlje~129|Trebnje~130|Trnovska Vas~185|Trzin~186|Trzic~131|Turnisce~132|Velenje~133|Velika Polana~187|Velike Lasce~134|Verzej~188|Videm~135|Vipava~136|Vitanje~137|Vodice~138|Vojnik~139|Vransko~189|Vrhnika~140|Vuzenica~141|Zagorje ob Savi~142|Zavrc~143|Zrece~144|Zalec~190|Zelezniki~146|Zetale~191|Ziri~147|Zirovnica~192|Zuzemberk~193"], ["Solomon Islands", "SB", "Central~CE|Choiseul~CH|Guadalcanal~GU|Honiara~CT|Isabel~IS|Makira-Ulawa~MK|Malaita~ML|Rennell and Bellona~RB|Temotu~TE|Western~WE"], ["Somalia", "SO", "Awdal~AW|Bakool~BK|Banaadir~BN|Bari~BR|Bay~BY|Galguduud~GA|Gedo~GE|Hiiraan~HI|Jubbada Dhexe~JD|Jubbada Hoose~JH|Mudug~MU|Nugaal~NU|Sanaag~SA|Shabeellaha Dhexe~SD|Shabeellaha Hoose~SH|Sool~SO|Togdheer~TO|Woqooyi Galbeed~WO"], ["South Africa", "ZA", "Eastern Cape~EC|Free State~FS|Gauteng~GT|KwaZulu-Natal~NL|Limpopo~LP|Mpumalanga~MP|Northern Cape~NC|North West~NW|Western Cape~WC"], ["South Georgia and South Sandwich Islands", "GS", "Bird Island|Bristol Island|Clerke Rocks|Montagu Island|Saunders Island|South Georgia|Southern Thule|Traversay Islands"], ["South Sudan", "SS", "Central Equatoria~CE|Eastern Equatoria~EE|Jonglei~JG|Lakes~LK|Northern Bahr el Ghazal~BN|Unity~UY|Upper Nile~NU|Warrap~WR|Western Bahr el Ghazal~BW|Western Equatoria~EW"], ["Spain", "ES", "Albacete~CM|Alicante~VC|Almería~AN|Araba/Álava~VI|Asturias~O|Ávila~AV|Badajoz~BA|Barcelona~B|Bizkaia~BI|Burgos~BU|Cáceres~CC|Cádiz~CA|Cantabria~S|Castellón~CS|Cueta~CU|Ciudad Real~CR|Córdoba~CO|A Coruña~C|Cuenca~CU|Gipuzkoa~SS|Girona~GI|Granada~GR|Guadalajara~GU|Huelva~H|Huesca~HU|Illes Balears~PM|Jaén~J|León~LE|Lleida~L|Lugo~LU|Madrid~M|Málaga~MA|Melilla~ML|Murcia~MU|Navarre~NA|Ourense~OR|Palencia~P|Las Palmas~GC|Pontevedra~PO|La Rioja~LO|Salamanca~SA|Santa Cruz de Tenerife~TF|Segovia~SG|Sevilla~SE|Soria~SO|Tarragona~T|Teruel~TE|Toledo~TO|Valencia~V|Valladolid~VA|Zamora~ZA|Zaragoza~Z"], ["Sri Lanka", "LK", "Basnahira~1|Dakunu~3|Madhyama~2|Naegenahira~5|Sabaragamuwa~9|Uturu~4|Uturumaeda~7|Vayamba~6|Uva~8"], ["Sudan", "SD", "Al Bahr al Ahmar~RS|Al Jazirah~GZ|Al Khartum~KH|Al Qadarif~GD|An Nil al Abyad~NW|An Nil al Azraq~NB|Ash Shamaliyah~NO|Gharb Darfur~DW|Gharb Kurdufan~GK|Janub Darfur~DS|Janub Kurdufan~KS|Kassala~KA|Nahr an Nil~NR|Shamal Darfur~DN|Sharq Darfur~DE|Shiamal Kurdufan~KN|Sinnar~SI|Wasat Darfur Zalinjay~DC"], ["Suriname", "SR", "Brokopondo~BR|Commewijne~CM|Coronie~CR|Marowijne~MA|Nickerie~NI|Para~PR|Paramaribo~PM|Saramacca~SA|Sipaliwini~SI|Wanica~WA"], ["Svalbard and Jan Mayen", "SJ", "Barentsoya|Bjornoya|Edgeoya|Hopen|Kvitoya|Nordaustandet|Prins Karls Forland|Spitsbergen"], ["Swaziland", "SZ", "Hhohho~HH|Lubombo~LU|Manzini~MA|Shiselweni~SH"], ["Sweden", "SE", "Blekinge~K|Dalarnas~W|Gotlands~X|Gavleborgs~I|Hallands~N|Jamtlands~Z|Jonkopings~F|Kalmar~H|Kronobergs~G|Norrbottens~BD|Orebro~T|Ostergotlands~E|Skane~M|Sodermanlands~D|Stockholm~AB|Varmlands~S|Vasterbottens~AC|Vasternorrlands~Y|Vastmanlands~U|Vastra Gotalands~O"], ["Switzerland", "CH", "Aargau~AG|Appenzell Ausserrhoden~AR|Appenzell Innerhoden~AI|Basel-Landschaft~BL|Basel-Stadt~BS|Bern~BE|Fribourg~FR|Genève~GE|Glarus~GL|Graubünden~GR|Jura~JU|Luzern~LU|Neuchâtel~NE|Nidwalden~NW|Obwalden~OW|Sankt Gallen~SG|Schaffhausen~SH|Schwyz~SZ|Solothurn~SO|Thurgau~TG|Ticino~TI|Uri~UR|Valais~VS|Waadt~VD|Zug~ZG|Zürich~ZH"], ["Syrian Arab Republic", "SY", "Al Hasakah~HA|Al Ladhiqiyah~LA|Al Qunaytirah~QU|Ar Raqqah~RA|As Suwayda'~SU|Dar'a~DR|Dayr az Zawr~DY|Dimashq~DI|Halab~HL|Hamah~HM|Hims~HI|Idlib~ID|Rif Dimashq~RD|Tartus~TA"], ["Taiwan", "TW", "Chang-hua~CHA|Chia-i~CYQ|Hsin-chu~HSQ|Hua-lien~HUA|Kao-hsiung~KHH|Keelung~KEE|Kinmen~KIN|Lienchiang~LIE|Miao-li~MIA|Nan-t'ou~NAN|P'eng-hu~PEN|New Taipei~NWT|P'ing-chung~PIF|T'ai-chung~TXG|T'ai-nan~TNN|T'ai-pei~TPE|T'ai-tung~TTT|T'ao-yuan~TAO|Yi-lan~ILA|Yun-lin~YUN"], ["Tajikistan", "TJ", "Viloyati Khatlon|Viloyati Leninobod|Viloyati Mukhtori Kuhistoni Badakhshon"], ["Tanzania, United Republic of", "TZ", "Arusha~01|Coast~19|Dar es Salaam~02|Dodoma~03|Iringa~04|Kagera~05|Kigoma~08|Kilimanjaro~09|Lindi~12|Manyara~26|Mara~13|Mbeya~14|Morogoro~16|Mtwara~17|Mwanza~18|Pemba North~06|Pemba South~10|Rukwa~20|Ruvuma~21|Shinyanga~22|Singida~23|Tabora~24|Tanga~25|Zanzibar North~07|Zanzibar Central/South~11|Zanzibar Urban/West~15"], ["Thailand", "TH", "Amnat Charoen~37|Ang Thong~15|Bueng Kan~38|Buri Ram~31|Chachoengsao~24|Chai Nat~18|Chaiyaphum~36|Chanthaburi~22|Chiang Mai~50|Chiang Rai~57|Chon Buri~20|Chumphon~86|Kalasin~46|Kamphaeng Phet~62|Kanchanaburi~71|Khon Kaen~40|Krabi~81|Krung Thep Mahanakhon (Bangkok)~10|Lampang~52|Lamphun~51|Loei~42|Lop Buri~16|Mae Hong Son~58|Maha Sarakham~44|Mukdahan~49|Nakhon Nayok~26|Nakhon Phathom~73|Nakhon Phanom~48|Nakhon Ratchasima~30|Nakhon Sawan~60|Nakhon Si Thammarat~80|Nan~55|Narathiwat~96|Nong Bua Lam Phu~39|Nong Khai~43|Nonthaburi~12|Pathum Thani~13|Pattani~94|Phangnga~82|Phatthalung~93|Phayao~56|Phetchabun~76|Phetchaburi~76|Phichit~66|Phitsanulok~65|Phra Nakhon Si Ayutthaya~14|Phrae~54|Phuket~83|Prachin Buri~25|Prachuap Khiri Khan~77|Ranong~85|Ratchaburi~70|Rayong~21|Roi Et~45|Sa Kaeo~27|Sakon Nakhon~47|Samut Prakan~11|Samut Sakhon~74|Samut Songkhram~75|Saraburi~19|Satun~91|Sing Buri~17|Si Sa ket~33|Songkhla~90|Sukhothai~64|Suphan Buri~72|Surat Thani~84|Surin~32|Tak~63|Trang~92|Trat~23|Ubon Ratchathani~34|Udon Thani~41|Uthai Thani~61|Uttaradit~53|Yala~95|Yasothon~35"], ["Timor-Leste", "TL", "Timor-Leste"], ["Togo", "TG", "Centre~C|Kara~K|Maritime~M|Plateaux~P|Savannes~S"], ["Tokelau", "TK", "Atafu|Fakaofo|Nukunonu"], ["Tonga", "TO", "'Eua~01|Ha'apai~02|Niuas~03|Tongatapu~04|Vava'u~05"], ["Trinidad and Tobago", "TT", "Arima~ARI|Chaguanas~CHA|Couva-Tabaquite-Talparo~CTT|Diefo Martin~DMN|Mayaro-Rio Claro~MRC|Penal-Debe~PED|Point Fortin~PTF|Port-of-Spain~POS|Princes Town~PRT|San Fernando~SFO|San Juan-Laventille~SJL|Sangre Grande~SGE|Siparia~SIP|Tobago~TOB|Tunapuna-Piarco~TUP"], ["Tunisia", "TN", "Ariana~12|Beja~31|Ben Arous~13|Bizerte~23|Gabes~81|Gafsa~71|Jendouba~32|Kairouan~41|Kasserine~42|Kebili~73|Kef~33|Mahdia~53|Medenine~82|Monastir~52|Nabeul~21|Sfax~61|Sidi Bouzid~43|Siliana~34|Sousse~51|Tataouine~83|Tozeur~72|Tunis~11|Zaghouan~22"], ["Turkey", "TR", "Adana~01|Adiyaman~02|Afyonkarahisar~03|Agri~04|Aksaray~68|Amasya~05|Ankara~06|Antalya~07|Ardahan~75|Artvin~08|Aydin~09|Balikesir~10|Bartin~74|Batman~72|Bayburt~69|Bilecik~11|Bingol~12|Bitlis~13|Bolu~14|Burdur~15|Bursa~16|Canakkale~17|Cankiri~18|Corum~19|Denizli~20|Diyarbakir~21|Duzce~81|Edirne~22|Elazig~23|Erzincan~24|Erzurum~25|Eskisehir~26|Gaziantep~27|Giresun~28|Gumushane~29|Hakkari~30|Hatay~31|Igdir~76|Isparta~32|Istanbul~34|Izmir~35|Kahramanmaras~46|Karabuk~78|Karaman~70|Kars~36|Kastamonu~37|Kayseri~38|Kilis~79|Kirikkale~71|Kirklareli~39|Kirsehir~40|Kocaeli~41|Konya~42|Kutahya~43|Malatya~44|Manisa~45|Mardin~47|Mersin~33|Mugla~48|Mus~49|Nevsehir~50|Nigde~51|Ordu~52|Osmaniye~80|Rize~53|Sakarya~54|Samsun~55|Sanliurfa~63|Siirt~56|Sinop~57|Sirnak~73|Sivas~58|Tekirdag~59|Tokat~60|Trabzon~61|Tunceli~62|Usak~64|Van~65|Yalova~77|Yozgat~66|Zonguldak~67"], ["Turkmenistan", "TM", "Ahal~A|Asgabat~S|Balkan~B|Dashoguz~D|Lebap~L|Mary~M"], ["Turks and Caicos Islands", "TC", "Turks and Caicos Islands"], ["Tuvalu", "TV", "Tuvalu"], ["Uganda", "UG", "Abim~317|Adjumani~301|Amolatar~314|Amuria~216|Amuru~319|Apac~302|Arua~303|Budaka~217|Bududa~223|Bugiri~201|Bukedea~224|Bukwa~218|Buliisa~419|Bundibugyo~401|Bushenyi~402|Busia~202|Butaleja~219|Dokolo~318|Gulu~304|Hoima~403|Ibanda~416|Iganga~203|Isingiro~417|Jinja~204|Kaabong~315|Kabale~404|Kabarole~405|Kaberamaido~213|Kalangala~101|Kaliro~220|Kampala~102|Kamuli~205|Kamwenge~413|Kanungu~414|Kapchorwa~206|Kasese~406|Katakwi~207|Kayunga~112|Kibaale~407|Kiboga~103|Kiruhura~418|Kisoro~408|Kitgum~305|Koboko~316|Kotido~306|Kumi~208|Kyenjojo~415|Lira~307|Luwero~104|Lyantonde~116|Manafwa~221|Maracha~320|Masaka~105|Masindi~409|Mayuge~214|Mbale~209|Mbarara~410|Mityana~114|Moroto~308|Moyo~309|Mpigi~106|Mubende~107|Mukono~108|Nakapiripirit~311|Nakaseke~115|Nakasongola~109|Namutumba~222|Nebbi~310|Ntungamo~411|Oyam~321|Pader~312|Pallisa~210|Rakai~110|Rukungiri~412|Sembabule~111|Sironko~215|Soroti~211|Tororo~212|Wakiso~113|Yumbe~313"], ["Ukraine", "UA", "Cherkasy~71|Chernihiv~74|Chernivtsi~77|Dnipropetrovsk~12|Donetsk~14|Ivano-Frankivsk~26|Kharkiv~63|Kherson~65|Khmelnytskyi~68|Kiev~32|Kirovohrad~35|Luhansk~09|Lviv~46|Mykolaiv~48|Odessa~51|Poltava~53|Rivne~56|Sumy~59|Ternopil~61|Vinnytsia~05|Volyn~07|Zakarpattia~21|Zaporizhia~23|Zhytomyr~18|Avtonomna Respublika Krym~43|Kyïv~30|Sevastopol~40"], ["United Arab Emirates", "AE", "Abu Dhabi~AZ|Ajman~AJ|Dubai~DU|Fujairah~FU|Ras al Khaimah~RK|Sharjah~SH|Umm Al Quwain~UQ"], ["United Kingdom", "GB", "Avon~AVN|Bedfordshire~BDF|Berkshire~BRK|Bristol, City of~COB|Buckinghamshire~BKM|Cambridgeshire~CAM|Cheshire~CHS|Cleveland~CLV|Cornwall~CON|Cumbria~CMA|Derbyshire~DBY|Devon~DEV|Dorset~DOR|Durham~DUR|East Sussex~SXE|Essex~ESS|Gloucestershire~GLS|Greater London~LND|Greater Manchester~GTM|Hampshire (County of Southampton)~HAM|Hereford and Worcester~HWR|Herefordshire~HEF|Hertfordshire~HRT|Isle of Wight~IOW|Kent~KEN|Lancashire~LAN|Leicestershire~LEI|Lincolnshire~LIN|London~LDN|Merseyside~MSY|Middlesex~MDX|Norfolk~NFK|Northamptonshire~NTH|Northumberland~NBL|North Humberside~NHM|North Yorkshire~NYK|Nottinghamshire~NTT|Oxfordshire~OXF|Rutland~RUT|Shropshire~SAL|Somerset~SOM|South Humberside~SHM|South Yorkshire~SYK|Staffordshire~STS|Suffolk~SFK|Surrey~SRY|Tyne and Wear~TWR|Warwickshire~WAR|West Midlands~WMD|West Sussex~SXW|West Yorkshire~WYK|Wiltshire~WIL|Worcestershire~WOR|Antrim~ANT|Armagh~ARM|Belfast, City of~BLF|Down~DOW|Fermanagh~FER|Londonderry~LDY|Derry, City of~DRY|Tyrone~TYR|Aberdeen, City of~AN|Aberdeenshire~ABD|Angus (Forfarshire)~ANS|Argyll~AGB|Ayrshire~ARG|Banffshire~BAN|Berwickshire~BEW|Bute~BUT|Caithness~CAI|Clackmannanshire~CLK|Cromartyshire~COC|Dumfriesshire~DFS|Dunbartonshire (Dumbarton)~DNB|Dundee, City of~DD|East Lothian (Haddingtonshire)~ELN|Edinburgh, City of~EB|Fife~FIF|Glasgow, City of~GLA|Inverness-shire~INV|Kincardineshire~KCD|Kinross-shire~KRS|Kirkcudbrightshire~KKD|Lanarkshire~LKS|Midlothian (County of Edinburgh)~MLN|Moray (Elginshire)~MOR|Nairnshire~NAI|Orkney~OKI|Peeblesshire~PEE|Perthshire~PER|Renfrewshire~RFW|Ross and Cromarty~ROC|Ross-shire~ROS|Roxburghshire~ROX|Selkirkshire~SEL|Shetland (Zetland)~SHI|Stirlingshire~STI|Sutherland~SUT|West Lothian (Linlithgowshire)~WLN|Wigtownshire~WIG|Clwyd~CWD|Dyfed~DFD|Gwent~GNT|Gwynedd~GWN|Mid Glamorgan~MGM|Powys~POW|South Glamorgan~SGM|West Glamorgan~WGM"], ["United Kingdom Overseas Territories", "UO", "Anguilla|Bermuda|British Virgin Islands|Cayman Islands|Falkland Islands|Gibraltar|Montserrat|St Helena|Tristan Da Cunha|Turks & Caicos Islands"], ["United States", "US", "Alaska~AK|Alabama~AL|American Samoa~AS|Arizona~AZ|Arkansas~AR|California~CA|Colorado~CO|Connecticut~CT|Delaware~DE|District of Columbia~DC|Micronesia~FM|Florida~FL|Georgia~GA|Guam~GU|Hawaii~HI|Idaho~ID|Illinois~IL|Indiana~IN|Iowa~IA|Kansas~KS|Kentucky~KY|Louisiana~LA|Maine~ME|Marshall Islands~MH|Maryland~MD|Massachusetts~MA|Michigan~MI|Minnesota~MN|Mississippi~MS|Missouri~MO|Montana~MT|Nebraska~NE|Nevada~NV|New Hampshire~NH|New Jersey~NJ|New Mexico~NM|New York~NY|North Carolina~NC|North Dakota~ND|Northern Mariana Islands~MP|Ohio~OH|Oklahoma~OK|Oregon~OR|Palau~PW|Pennsylvania~PA|Puerto Rico~PR|Rhode Island~RI|South Carolina~SC|South Dakota~SD|Tennessee~TN|Texas~TX|Utah~UT|Vermont~VT|Virgin Islands~VI|Virginia~VA|Washington~WA|West Virginia~WV|Wisconsin~WI|Wyoming~WY|Armed Forces Americas~AA|Armed Forces Europe, Canada, Africa and Middle East~AE|Armed Forces Pacific~AP"], ["United States Minor Outlying Islands", "UM", "Baker Island~81|Howland Island~84|Jarvis Island~86|Johnston Atoll~67|Kingman Reef~89|Midway Islands~71|Navassa Island~76|Palmyra Atoll~95|Wake Island~79|Bajo Nuevo Bank~BN|Serranilla Bank~SB"], ["Uruguay", "UY", "Artigas~AR|Canelones~CA|Cerro Largo~CL|Colonia~CO|Durazno~DU|Flores~FS|Florida~FD|Lavalleja~LA|Maldonado~MA|Montevideo~MO|Paysandú~PA|Río Negro~RN|Rivera~RV|Rocha~RO|Salto~SA|San José~SJ|Soriano~SO|Tacuarembó~TA|Treinta y Tres~TT"], ["Uzbekistan", "UZ", "Toshkent shahri~TK|Andijon~AN|Buxoro~BU|Farg‘ona~FA|Jizzax~JI|Namangan~NG|Navoiy~NW|Qashqadaryo (Qarshi)~QA|Samarqand~SA|Sirdaryo (Guliston)~SI|Surxondaryo (Termiz)~SU|Toshkent wiloyati~TO|Xorazm (Urganch)~XO|Qoraqalpog‘iston Respublikasi (Nukus)~QR"], ["Vanuatu", "VU", "Malampa~MAP|Pénama~PAM|Sanma~SAM|Shéfa~SEE|Taféa~TAE|Torba~TOB"], ["Venezuela, Bolivarian Republic of", "VE", "Dependencias Federales~W|Distrito Federal~A|Amazonas~Z|Anzoátegui~B|Apure~C|Aragua~D|Barinas~E|Bolívar~F|Carabobo~G|Cojedes~H|Delta Amacuro~Y|Falcón~I|Guárico~J|Lara~K|Mérida~L|Miranda~M|Monagas~N|Nueva Esparta~O|Portuguesa~P|Sucre~R|Táchira~S|Trujillo~T|Vargas~X|Yaracuy~U|Zulia~V"], ["Viet Nam", "VN", "Đồng Nai~39|Đồng Tháp~45|Gia Lai~30|Hà Giang~03|Hà Nam~63|Hà Tây~15|Hà Tĩnh~23|Hải Dương~61|Hậu Giang~73|Hòa Bình~14|Hưng Yên~66|Khánh Hòa~34|Kiên Giang~47|Kon Tum~28|Lai Châu~01|Lâm Đồng~35|Lạng Sơn~09|Lào Cai~02|Long An~41|Nam Định~67|Nghệ An~22|Ninh Bình~18|Ninh Thuận~36|Phú Thọ~68|Phú Yên~32|Quảng Bình~24|Quảng Nam~27|Quảng Ngãi~29|Quảng Ninh~13|Quảng Trị~25|Sóc Trăng~52|Sơn La~05|Tây Ninh~37|Thái Bình~20|Thái Nguyên~69|Thanh Hóa~21|Thừa Thiên–Huế~26|Tiền Giang~46|Trà Vinh~51|Tuyên Quang~07|Vĩnh Long~49|Vĩnh Phúc~70|Yên Bái~06|Cần Thơ~CT|Đà Nẵng~DN|Hà Nội~HN|Hải Phòng~HP|Hồ Chí Minh (Sài Gòn)~SG"], ["Virgin Islands, British", "VG", "Anegada~ANG|Jost Van Dyke~JVD|Tortola~TTA|Virgin Gorda~VGD"], ["Virgin Islands, U.S.", "VI", "St. Thomas~STH|St. John~SJO|St. Croix~SCR"], ["Wallis and Futuna", "WF", "Alo~ALO|Sigave~SIG|Wallis~WAL"], ["Western Sahara", "EH", "Es Smara~ESM|Boujdour~BOD|Laâyoune~LAA|Aousserd~AOU|Oued ed Dahab~OUD"], ["Yemen", "YE", "Şan‘ā'~SA|Abyān~AB|'Adan~AD|Aḑ Ḑāli'~DA|Al Bayḑā'~BA|Al Ḩudaydah~HU|Al Jawf~JA|Al Mahrah~MR|Al Maḩwīt~MW|'Amrān~AM|Dhamār~DH|Ḩaḑramawt~HD|Ḩajjah~HJ|Ibb~IB|Laḩij~LA|Ma'rib~MA|Raymah~RA|Şā‘dah~SD|Şan‘ā'~SN|Shabwah~SH|Tā‘izz~TA"], ["Zambia", "ZM", "Central~02|Copperbelt~08|Eastern~03|Luapula~04|Lusaka~09|Northern~05|North-Western~06|Southern~07|Western~01"], ["Zimbabwe", "ZW", "Bulawayo~BU|Harare~HA|Manicaland~MA|Mashonaland Central~MC|Mashonaland East~ME|Mashonaland West~MW|Masvingo~MV|Matabeleland North~MN|Matabeleland South~MS|Midlands~MI"]];

exports["default"] = CountryRegionData;
module.exports = exports["default"];


},{}]},{},[1]);
