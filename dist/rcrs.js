'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionDropdown = exports.CountryDropdown = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _sourceData = require('../source/source-data.js');

var _sourceData2 = _interopRequireDefault(_sourceData);

var _constants = require('../source/constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountryDropdown = function (_React$Component) {
  _inherits(CountryDropdown, _React$Component);

  function CountryDropdown(props) {
    _classCallCheck(this, CountryDropdown);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CountryDropdown).call(this, props));

    _this.state = {
      countries: _filterCountries(_sourceData2.default, props.whitelist, props.blacklist)
    };
    return _this;
  }

  _createClass(CountryDropdown, [{
    key: 'getCountries',
    value: function getCountries() {
      var _props = this.props;
      var valueType = _props.valueType;
      var labelType = _props.labelType;

      return _underscore2.default.map(this.state.countries, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var countryName = _ref2[0];
        var countrySlug = _ref2[1];

        return _react2.default.createElement(
          'option',
          { value: valueType === _constants2.default.DISPLAY_TYPE_SHORT ? countrySlug : countryName, key: countrySlug },
          labelType === _constants2.default.DISPLAY_TYPE_SHORT ? countrySlug : countryName
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
      return _react2.default.createElement(
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

      return _react2.default.createElement(
        'select',
        attrs,
        this.getDefaultOption(),
        this.getCountries()
      );
    }
  }]);

  return CountryDropdown;
}(_react2.default.Component);

CountryDropdown.propTypes = {
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  name: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  classes: _react2.default.PropTypes.string,
  showDefaultOption: _react2.default.PropTypes.bool,
  defaultOptionLabel: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  onChange: _react2.default.PropTypes.func,
  labelType: _react2.default.PropTypes.oneOf([_constants2.default.DISPLAY_TYPE_FULL, _constants2.default.DISPLAY_TYPE_SHORT]),
  valueType: _react2.default.PropTypes.oneOf([_constants2.default.DISPLAY_TYPE_FULL, _constants2.default.DISPLAY_TYPE_SHORT]),
  whitelist: _react2.default.PropTypes.array,
  blacklist: _react2.default.PropTypes.array
};
CountryDropdown.defaultProps = {
  value: '',
  name: 'rcrs-country',
  id: '',
  classes: '',
  showDefaultOption: true,
  defaultOptionLabel: 'Select Country',
  onChange: function onChange() {},
  labelType: _constants2.default.DISPLAY_TYPE_FULL,
  valueType: _constants2.default.DISPLAY_TYPE_FULL,
  whitelist: [],
  blacklist: []
};

var RegionDropdown = function (_React$Component2) {
  _inherits(RegionDropdown, _React$Component2);

  function RegionDropdown(props) {
    _classCallCheck(this, RegionDropdown);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(RegionDropdown).call(this, props));

    _this2.state = { regions: _this2.getRegions(props.country) };
    _this2.getRegions = _this2.getRegions.bind(_this2);
    return _this2;
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

      var searchIndex = countryValueType === _constants2.default.DISPLAY_TYPE_FULL ? 0 : 1;
      var regions = _underscore2.default.find(_sourceData2.default, function (i) {
        return i[searchIndex] === country;
      });

      // this could happen if the user is managing the state of the region/country themselves and screws up passing
      // in a valid country
      if (!regions) {
        console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown');
        return [];
      }

      // clean up the region info here. TODO MEMOIZE
      return _underscore2.default.map(regions[2].split(_constants2.default.REGION_LIST_DELIMITER), function (regionPair) {
        var _regionPair$split = regionPair.split(_constants2.default.SINGLE_REGION_DELIMITER);

        var _regionPair$split2 = _slicedToArray(_regionPair$split, 2);

        var regionName = _regionPair$split2[0];
        var _regionPair$split2$ = _regionPair$split2[1];
        var regionShortCode = _regionPair$split2$ === undefined ? null : _regionPair$split2$;

        return { regionName: regionName, regionShortCode: regionShortCode };
      });
    }
  }, {
    key: 'getRegionList',
    value: function getRegionList() {
      var _props4 = this.props;
      var labelType = _props4.labelType;
      var valueType = _props4.valueType;

      return _underscore2.default.map(this.state.regions, function (_ref3) {
        var regionName = _ref3.regionName;
        var regionShortCode = _ref3.regionShortCode;

        var label = labelType === _constants2.default.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        var value = valueType === _constants2.default.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        return _react2.default.createElement(
          'option',
          { value: value, key: regionShortCode },
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
        return _react2.default.createElement(
          'option',
          { value: '' },
          blankOptionLabel
        );
      }
      if (showDefaultOption) {
        return _react2.default.createElement(
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
      var _onChange2 = _props6.onChange;

      return _react2.default.createElement(
        'select',
        { defaultValue: value, onChange: function onChange(e) {
            return _onChange2(e.target.value);
          } },
        this.getDefaultOption(),
        this.getRegionList()
      );
    }
  }]);

  return RegionDropdown;
}(_react2.default.Component);

RegionDropdown.propTypes = {
  name: _react2.default.PropTypes.string,
  country: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  blankOptionLabel: _react2.default.PropTypes.string,
  showDefaultOption: _react2.default.PropTypes.bool,
  defaultOptionLabel: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  labelType: _react2.default.PropTypes.string,
  valueType: _react2.default.PropTypes.string
};
RegionDropdown.defaultProps = {
  name: 'rcrs-region',
  country: '',
  value: '',
  blankOptionLabel: '-',
  showDefaultOption: true,
  defaultOptionLabel: 'Select region',
  onChange: function onChange() {},
  countryValueType: _constants2.default.DISPLAY_TYPE_FULL,
  labelType: _constants2.default.DISPLAY_TYPE_FULL,
  valueType: _constants2.default.DISPLAY_TYPE_FULL
};

// ------------------------- helpers --------------------------------

// called on country field initialization. It reduces the subset of countries depending on whether the user
// specified a white/blacklist
function _filterCountries(countries, whitelist, blacklist) {
  var filteredCountries = countries;

  if (whitelist.length > 0) {
    filteredCountries = _underscore2.default.filter(countries, function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2);

      var countryName = _ref5[0];
      var countrySlug = _ref5[1];
      return _underscore2.default.contains(whitelist, countrySlug);
    });
  } else if (blacklist.length > 0) {
    filteredCountries = _underscore2.default.filter(countries, function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2);

      var countryName = _ref7[0];
      var countrySlug = _ref7[1];
      return !_underscore2.default.contains(blacklist, countrySlug);
    });
  }

  return filteredCountries;
}

exports.CountryDropdown = CountryDropdown;
exports.RegionDropdown = RegionDropdown;
