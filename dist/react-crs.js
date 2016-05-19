'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionDropdown = exports.CountryDropdown = exports.CountryRegions = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addons = require('react/addons');

var _addons2 = _interopRequireDefault(_addons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CountryRegions = function (_React$Component) {
  _inherits(CountryRegions, _React$Component);

  function CountryRegions() {
    _classCallCheck(this, CountryRegions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CountryRegions).apply(this, arguments));
  }

  _createClass(CountryRegions, [{
    key: 'render',
    value: function render() {
      return _addons2.default.createElement(
        'p',
        null,
        'Alrighty!'
      );
    }
  }]);

  return CountryRegions;
}(_addons2.default.Component);

var CountryDropdown = function (_React$Component2) {
  _inherits(CountryDropdown, _React$Component2);

  function CountryDropdown() {
    _classCallCheck(this, CountryDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CountryDropdown).apply(this, arguments));
  }

  _createClass(CountryDropdown, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return CountryDropdown;
}(_addons2.default.Component);

var RegionDropdown = function (_React$Component3) {
  _inherits(RegionDropdown, _React$Component3);

  function RegionDropdown() {
    _classCallCheck(this, RegionDropdown);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RegionDropdown).apply(this, arguments));
  }

  _createClass(RegionDropdown, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return RegionDropdown;
}(_addons2.default.Component);

exports.CountryRegions = CountryRegions;
exports.CountryDropdown = CountryDropdown;
exports.RegionDropdown = RegionDropdown;
