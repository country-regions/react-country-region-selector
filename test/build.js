'use strict';

var _reactCrs = require('../react-crs');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactComponentTemplate = require('react-component-template');

var _reactComponentTemplate2 = _interopRequireDefault(_reactComponentTemplate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = _react2.default.createClass({
  displayName: 'App',
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_reactCrs.CountryRegions, null)
    );
  }
});

var appRoot = document.createElement('div');
document.body.appendChild(appRoot);
_reactDom2.default.render(_react2.default.createElement(App, null), appRoot);
