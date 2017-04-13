'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sourceDataJs = require('./source-data.js');

var _sourceDataJs2 = _interopRequireDefault(_sourceDataJs);

var C = {
  DISPLAY_TYPE_FULL: 'full',
  DISPLAY_TYPE_SHORT: 'short',
  REGION_LIST_DELIMITER: '|',
  SINGLE_REGION_DELIMITER: '~'
};

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

        return _react2['default'].createElement(
          'option',
          { value: valueType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName, key: countrySlug },
          labelType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName
        );
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
      return _react2['default'].createElement(
        'option',
        { value: '', key: 'default' },
        defaultOptionLabel
      );
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
        value: value,
        onChange: function onChange(e) {
          return _onChange(e.target.value);
        }
      };
      if (id) {
        attrs.id = id;
      }
      if (classes) {
        attrs.className = classes;
      }

      return _react2['default'].createElement(
        'select',
        attrs,
        this.getDefaultOption(),
        this.getCountries()
      );
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
  labelType: _react2['default'].PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  valueType: _react2['default'].PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
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
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_FULL,
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
      return nextProps.country !== this.props.country || nextProps.value !== this.props.value;
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

      var searchIndex = countryValueType === C.DISPLAY_TYPE_FULL ? 0 : 1;
      var regions = _sourceDataJs2['default'].find(function (i) {
        return i[searchIndex] === country;
      });

      // this could happen if the user is managing the state of the region/country themselves and screws up passing
      // in a valid country
      if (!regions) {
        console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown');
        return [];
      }
      return regions[2].split(C.REGION_LIST_DELIMITER).map(function (regionPair) {
        var _regionPair$split = regionPair.split(C.SINGLE_REGION_DELIMITER);

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

      return this.state.regions.map(function (_ref3) {
        var regionName = _ref3.regionName;
        var regionShortCode = _ref3.regionShortCode;

        var label = labelType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        var value = valueType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        return _react2['default'].createElement(
          'option',
          { value: value, key: regionName },
          label
        );
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
        return _react2['default'].createElement(
          'option',
          { value: '' },
          blankOptionLabel
        );
      }
      if (showDefaultOption) {
        return _react2['default'].createElement(
          'option',
          { value: '' },
          defaultOptionLabel
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props6 = this.props;
      var value = _props6.value;
      var country = _props6.country;
      var _onChange2 = _props6.onChange;
      var id = _props6.id;
      var name = _props6.name;
      var classes = _props6.classes;
      var disableWhenEmpty = _props6.disableWhenEmpty;

      var disabled = disableWhenEmpty && country == '';
      var attrs = {
        name: name,
        value: value,
        onChange: function onChange(e) {
          return _onChange2(e.target.value);
        },
        disabled: disabled
      };
      if (id) {
        attrs.id = id;
      }
      if (classes) {
        attrs.className = classes;
      }

      return _react2['default'].createElement(
        'select',
        attrs,
        this.getDefaultOption(),
        this.getRegionList()
      );
    }
  }]);

  return RegionDropdown;
})(_react2['default'].Component);

RegionDropdown.propTypes = {
  country: _react2['default'].PropTypes.string,
  value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
  name: _react2['default'].PropTypes.string,
  id: _react2['default'].PropTypes.string,
  classes: _react2['default'].PropTypes.string,
  blankOptionLabel: _react2['default'].PropTypes.string,
  showDefaultOption: _react2['default'].PropTypes.bool,
  defaultOptionLabel: _react2['default'].PropTypes.string,
  onChange: _react2['default'].PropTypes.func,
  labelType: _react2['default'].PropTypes.string,
  valueType: _react2['default'].PropTypes.string,
  disableWhenEmpty: _react2['default'].PropTypes.bool
};
RegionDropdown.defaultProps = {
  country: '',
  value: '',
  name: 'rcrs-region',
  id: '',
  classes: '',
  blankOptionLabel: '-',
  showDefaultOption: true,
  defaultOptionLabel: 'Select Region',
  onChange: function onChange() {},
  countryValueType: C.DISPLAY_TYPE_FULL,
  labelType: C.DISPLAY_TYPE_FULL,
  valueType: C.DISPLAY_TYPE_FULL,
  disableWhenEmpty: false
};

// ------------------------- helpers --------------------------------

// called on country field initialization. It reduces the subset of countries depending on whether the user
// specified a white/blacklist
function _filterCountries(countries, whitelist, blacklist) {
  var filteredCountries = countries;

  // N.B. I'd rather use ES6 array.includes() but it requires a polyfill on various browsers. Bit surprising that
  // babel doesn't automatically convert it to ES5-friendly code, like the new syntax additions, but that requires
  // a separate polyfill which is a total kludge
  if (whitelist.length > 0) {
    filteredCountries = countries.filter(function (_ref4) {
      var _ref42 = _slicedToArray(_ref4, 2);

      var countrySlug = _ref42[1];
      return whitelist.indexOf(countrySlug) > -1;
    });
  } else if (blacklist.length > 0) {
    filteredCountries = countries.filter(function (_ref5) {
      var _ref52 = _slicedToArray(_ref5, 2);

      var countrySlug = _ref52[1];
      return blacklist.indexOf(countrySlug) === -1;
    });
  }

  return filteredCountries;
}

exports.CountryDropdown = CountryDropdown;
exports.RegionDropdown = RegionDropdown;