"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getSize;

function getSize(size, pageWidth = 500) {
  if (typeof size === "number") {
    return size;
  }

  return parseInt(size) / 100 * pageWidth;
}