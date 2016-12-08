'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionDropdown = exports.CountryDropdown = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sourceData = require('./source-data.js');

var _sourceData2 = _interopRequireDefault(_sourceData);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var C = {
  DISPLAY_TYPE_FULL: 'full',
  DISPLAY_TYPE_SHORT: 'short',
  REGION_LIST_DELIMITER: '|',
  SINGLE_REGION_DELIMITER: '~'
};

var CountryDropdown = function (_React$Component) {
  _inherits(CountryDropdown, _React$Component);

  function CountryDropdown(props) {
    _classCallCheck(this, CountryDropdown);

    var _this = _possibleConstructorReturn(this, (CountryDropdown.__proto__ || Object.getPrototypeOf(CountryDropdown)).call(this, props));

    _this.state = {
      countries: _filterCountries(_sourceData2.default, props.whitelist, props.blacklist),
      selectedValue: ''
    };
    return _this;
  }

  _createClass(CountryDropdown, [{
    key: 'getCountries',
    value: function getCountries() {
      var _props = this.props,
          valueType = _props.valueType,
          labelType = _props.labelType,
          isMaterial = _props.isMaterial;


      return this.state.countries.map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            countryName = _ref2[0],
            countrySlug = _ref2[1];

        var label = labelType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName;
        var value = valueType === C.DISPLAY_TYPE_SHORT ? countrySlug : countryName;
        if (isMaterial) {
          return _react2.default.createElement(_MenuItem2.default, { value: value, key: countrySlug,
            primaryText: label });
        }
        return _react2.default.createElement('option', { value: value, key: countrySlug }, label);
      });
    }
  }, {
    key: 'getDefaultOption',
    value: function getDefaultOption() {
      var _props2 = this.props,
          showDefaultOption = _props2.showDefaultOption,
          defaultOptionLabel = _props2.defaultOptionLabel,
          isMaterial = _props2.isMaterial;

      if (!showDefaultOption) {
        return null;
      }
      if (isMaterial) {
        return _react2.default.createElement(_MenuItem2.default, { key: 'default',
          primaryText: defaultOptionLabel });
      }
      return _react2.default.createElement('option', { value: '', key: 'default' }, defaultOptionLabel);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          name = _props3.name,
          id = _props3.id,
          classes = _props3.classes,
          value = _props3.value,
          _onChange = _props3.onChange,
          isMaterial = _props3.isMaterial;

      var attrs = {
        name: name,
        defaultValue: value,
        onChange: function onChange(e) {
          _onChange(e.target.value);
        }
      };
      if (id) {
        attrs.id = id;
      }
      if (classes) {
        attrs.className = classes;
      }
      if (isMaterial) {
        attrs.onChange = function (event, index, value) {
          _this2.setState({
            selectedValue: value
          });
          _onChange(value);
        };
        return _react2.default.createElement(_SelectField2.default, _extends({}, attrs, { value: this.state.selectedValue }), this.getDefaultOption(), this.getCountries());
      } else {
        return _react2.default.createElement('select', attrs, this.getDefaultOption(), this.getCountries());
      }
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
  labelType: _react2.default.PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  valueType: _react2.default.PropTypes.oneOf([C.DISPLAY_TYPE_FULL, C.DISPLAY_TYPE_SHORT]),
  whitelist: _react2.default.PropTypes.array,
  blacklist: _react2.default.PropTypes.array,
  isMaterial: _react2.default.PropTypes.bool
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
  blacklist: [],
  isMaterial: false
};

var RegionDropdown = function (_React$Component2) {
  _inherits(RegionDropdown, _React$Component2);

  function RegionDropdown(props) {
    _classCallCheck(this, RegionDropdown);

    var _this3 = _possibleConstructorReturn(this, (RegionDropdown.__proto__ || Object.getPrototypeOf(RegionDropdown)).call(this, props));

    _this3.state = {
      regions: _this3.getRegions(props.country)
    };
    _this3.getRegions = _this3.getRegions.bind(_this3);
    return _this3;
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
      this.setState({ regions: this.getRegions(nextProps.country), selectedRegion: '' });
    }
  }, {
    key: 'getRegions',
    value: function getRegions(country) {
      if (!country) {
        return [];
      }

      var countryValueType = this.props.countryValueType;

      var searchIndex = countryValueType === C.DISPLAY_TYPE_FULL ? 0 : 1;
      var regions = _sourceData2.default.find(function (i) {
        return i[searchIndex] === country;
      });

      // this could happen if the user is managing the state of the region/country themselves and screws up passing
      // in a valid country
      if (!regions) {
        console.error('Error. Unknown country passed: ' + country + '. If you\'re passing a country shortcode, be sure to include countryValueType="short" on the RegionDropdown');
        return [];
      }
      return regions[2].split(C.REGION_LIST_DELIMITER).map(function (regionPair) {
        var _regionPair$split = regionPair.split(C.SINGLE_REGION_DELIMITER),
            _regionPair$split2 = _slicedToArray(_regionPair$split, 2),
            regionName = _regionPair$split2[0],
            _regionPair$split2$ = _regionPair$split2[1],
            regionShortCode = _regionPair$split2$ === undefined ? null : _regionPair$split2$;

        return { regionName: regionName, regionShortCode: regionShortCode };
      });
    }
  }, {
    key: 'getRegionList',
    value: function getRegionList() {
      var _props4 = this.props,
          labelType = _props4.labelType,
          valueType = _props4.valueType,
          isMaterial = _props4.isMaterial;

      return this.state.regions.map(function (_ref3) {
        var regionName = _ref3.regionName,
            regionShortCode = _ref3.regionShortCode;

        var label = labelType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        var value = valueType === C.DISPLAY_TYPE_FULL ? regionName : regionShortCode;
        if (isMaterial) {
          return _react2.default.createElement(_MenuItem2.default, { value: value, key: regionName, primaryText: label });
        }
        return _react2.default.createElement('option', { value: value, key: regionName }, label);
      });
    }

    // there are two default options. The "blank" option which shows up when the user hasn't selected a country yet, and
    // a "default" option which shows

  }, {
    key: 'getDefaultOption',
    value: function getDefaultOption() {
      var _props5 = this.props,
          blankOptionLabel = _props5.blankOptionLabel,
          showDefaultOption = _props5.showDefaultOption,
          defaultOptionLabel = _props5.defaultOptionLabel,
          country = _props5.country,
          isMaterial = _props5.isMaterial;

      if (!country) {
        if (isMaterial) {
          return _react2.default.createElement(_MenuItem2.default, { value: '', key: blankOptionLabel,
            primaryText: blankOptionLabel });
        }
        return _react2.default.createElement('option', { value: '' }, blankOptionLabel);
      }
      if (showDefaultOption) {
        if (isMaterial) {
          return _react2.default.createElement(_MenuItem2.default, { value: '', key: defaultOptionLabel,
            primaryText: defaultOptionLabel });
        }
        return _react2.default.createElement('option', { value: '' }, defaultOptionLabel);
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props6 = this.props,
          value = _props6.value,
          country = _props6.country,
          _onChange2 = _props6.onChange,
          id = _props6.id,
          name = _props6.name,
          classes = _props6.classes,
          disableWhenEmpty = _props6.disableWhenEmpty,
          isMaterial = _props6.isMaterial;

      var disabled = disableWhenEmpty && country == '';
      var selectedRegion = this.state.selectedRegion;

      var attrs = {
        name: name,
        disabled: disabled,
        onChange: function onChange(e) {
          _onChange2(e.target.value);
        },
        value: value
      };
      if (id) {
        attrs.id = id;
      }
      if (classes) {
        attrs.className = classes;
      }
      if (isMaterial) {
        attrs.onChange = function (event, index, value) {
          _this4.setState({
            selectedRegion: value
          });
          _onChange2(value);
        };
        return _react2.default.createElement(_SelectField2.default, _extends({}, attrs, { value: this.state.selectedRegion }), this.getDefaultOption(), this.getRegionList());
      } else {
        attrs.onChange = function (e) {
          return _onChange2(e.target.value);
        };
        defaultValue = value;
        return _react2.default.createElement('select', attrs, this.getDefaultOption(), this.getRegionList());
      }
    }
  }]);

  return RegionDropdown;
}(_react2.default.Component);

RegionDropdown.propTypes = {
  country: _react2.default.PropTypes.string,
  value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  name: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  classes: _react2.default.PropTypes.string,
  blankOptionLabel: _react2.default.PropTypes.string,
  showDefaultOption: _react2.default.PropTypes.bool,
  defaultOptionLabel: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func,
  labelType: _react2.default.PropTypes.string,
  valueType: _react2.default.PropTypes.string,
  disableWhenEmpty: _react2.default.PropTypes.bool,
  isMaterial: _react2.default.PropTypes.bool
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
  disableWhenEmpty: false,
  isMaterial: false
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
      var _ref5 = _slicedToArray(_ref4, 2),
          countrySlug = _ref5[1];

      return whitelist.indexOf(countrySlug) > -1;
    });
  } else if (blacklist.length > 0) {
    filteredCountries = countries.filter(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 2),
          countrySlug = _ref7[1];

      return blacklist.indexOf(countrySlug) === -1;
    });
  }

  return filteredCountries;
}

exports.CountryDropdown = CountryDropdown;
exports.RegionDropdown = RegionDropdown;