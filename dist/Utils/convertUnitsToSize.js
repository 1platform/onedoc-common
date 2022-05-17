"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertUnitsToPageSize = convertUnitsToPageSize;
exports.default = convertUnitsToSize;

var _Template = require("../Constants/Template");

var _getSize = require("./getSize");

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

function convertUnitsToSize(size, unit = _Template.SizeUnit.POINT) {
  if (size === "auto") {
    return "auto";
  }

  if (Object.keys(conversionUnits).indexOf(unit) < 0) {
    unit = unitConversions[unit] || "pt";
  }

  if (unit === "pt") {
    return (0, _getSize.getSize)(size);
  }

  return (0, _getSize.getSize)(size) * conversionUnits[unit];
}

function convertUnitsToPageSize(width, height, unit = _Template.SizeUnit.POINT) {
  return {
    width: convertUnitsToSize(width, unit),
    height: convertUnitsToSize(height, unit)
  };
}