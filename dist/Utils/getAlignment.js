"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getAlignment;

function getAlignment(alignment) {
  if (!alignment) return "";
  return `is-${alignment}`;
}