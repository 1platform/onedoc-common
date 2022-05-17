"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getImageSize = getImageSize;
exports.getSize = getSize;

function getImageSize(size) {
  if (typeof size === "string" || typeof size === "number") {
    return {
      width: getSize(size),
      height: getSize(size)
    };
  }

  return {
    width: getSize(size.width || 0),
    height: getSize(size.height || 0)
  };
}

function getSize(size, pageWidth = 500) {
  if (typeof size === "number") {
    return size;
  }

  return parseInt(size) / 100 * pageWidth;
}