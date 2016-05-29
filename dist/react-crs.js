'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionDropdown = exports.CountryDropdown = exports.CountryRegionsHelper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// a helper method that handles the mapping of the two dropdowns so you don't have to maintain state explicitly

var CountryRegionsHelper = function (_React$Component) {
  _inherits(CountryRegionsHelper, _React$Component);

  function CountryRegionsHelper() {
    _classCallCheck(this, CountryRegionsHelper);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CountryRegionsHelper).apply(this, arguments));
  }

  _createClass(CountryRegionsHelper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        countries: [],
        regions: []
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {

      // validation: confirm that a single <RegionDropdown /> and <CountryDropdown> are in its children

    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return CountryRegionsHelper;
}(_react2.default.Component);

CountryRegionsHelper.childContextTypes = {
  countries: _react2.default.PropTypes.array,
  regions: _react2.default.PropTypes.array
};

var CountryDropdown = function (_React$Component2) {
  _inherits(CountryDropdown, _React$Component2);

  function CountryDropdown() {
    _classCallCheck(this, CountryDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CountryDropdown).apply(this, arguments));
  }

  _createClass(CountryDropdown, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'select',
        null,
        _react2.default.createElement(
          'option',
          null,
          'COUNTRY'
        )
      );
    }
  }]);

  return CountryDropdown;
}(_react2.default.Component);

CountryDropdown.contextTypes = {
  color: _react2.default.PropTypes.string
};

var RegionDropdown = function (_React$Component3) {
  _inherits(RegionDropdown, _React$Component3);

  function RegionDropdown() {
    _classCallCheck(this, RegionDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RegionDropdown).apply(this, arguments));
  }

  _createClass(RegionDropdown, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'select',
        { style: { color: this.context.color } },
        _react2.default.createElement(
          'option',
          null,
          'REGION'
        )
      );
    }
  }]);

  return RegionDropdown;
}(_react2.default.Component);

RegionDropdown.contextTypes = {
  color: _react2.default.PropTypes.string
};

exports.CountryRegionsHelper = CountryRegionsHelper;
exports.CountryDropdown = CountryDropdown;
exports.RegionDropdown = RegionDropdown;
