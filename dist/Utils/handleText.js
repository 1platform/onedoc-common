"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleText;

var _mustache = _interopRequireDefault(require("mustache"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleText(text, params) {
  if (!text) {
    return null;
  }

  if (!Array.isArray(text)) {
    text = [text];
  }

  return text.map(line => params ? _mustache.default.render(line, params) : line).join(" ");
}