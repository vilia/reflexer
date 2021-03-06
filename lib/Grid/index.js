'use strict';

exports.__esModule = true;

var _templateObject = _taggedTemplateLiteralLoose(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

var Styled = (0, _styledComponents2.default)(function (_ref) {
  var children = _ref.children,
      fluid = _ref.fluid,
      props = _objectWithoutProperties(_ref, ['children', 'fluid']);

  return _react2.default.createElement('div', props, children);
})(_templateObject, _styled.Grid);

var GridElement = function GridElement(props) {
  return _react2.default.createElement(Styled, props);
};

GridElement.defaultProps = {
  fluid: false
};

// $FlowIssues
exports.default = GridElement;
module.exports = exports['default'];