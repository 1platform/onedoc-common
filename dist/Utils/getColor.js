"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getColor;
exports.toHexColor = toHexColor;

function toHexColor(red, green, blue) {
  if (Array.isArray(red)) {
    [red, green, blue] = red;
  }

  return `#${red.toString(16)}${green?.toString(16)}${blue?.toString(16)}`;
}

function getColor(color) {
  return typeof color === "string" ? color : toHexColor(color[0] ?? 0, color[1] ?? 0, color[2] ?? 0);
}