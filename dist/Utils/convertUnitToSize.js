"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertUnitToSize;

var _Template = require("../Constants/Template");

var _getSize = _interopRequireDefault(require("./getSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const conversionUnits = {
  mm: 2.8346456693,
  cm: 0.28346456693,
  in: 72,
  pica: 12,
  px: 0.75
};
const unitConversions = {
  millimeter: "mm",
  millimeters: "mm",
  inch: "in",
  inches: "in",
  centimeters: "cm",
  pixel: "px"
};

function convertUnitToSize(size, unit = _Template.SizeUnit.POINT) {
  if (size === "auto") {
    return "auto";
  }

  if (Object.keys(conversionUnits).indexOf(unit) < 0) {
    unit = unitConversions[unit] || "pt";
  }

  if (unit === "pt") {
    return (0, _getSize.default)(size);
  }

  return (0, _getSize.default)(size) * conversionUnits[unit];
}