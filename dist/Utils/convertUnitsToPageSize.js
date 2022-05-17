"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertUnitsToPageSize;

var _Template = require("../Constants/Template");

var _convertUnitToSize = _interopRequireDefault(require("./convertUnitToSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function convertUnitsToPageSize(width, height, unit = _Template.SizeUnit.POINT) {
  return {
    width: (0, _convertUnitToSize.default)(width, unit),
    height: (0, _convertUnitToSize.default)(height, unit)
  };
}