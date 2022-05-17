"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFontConfig;

var _getFontMapping = _interopRequireDefault(require("./getFontMapping"));

var _getColor = _interopRequireDefault(require("./getColor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getFontConfig(font, defaults = false) {
  if (!font) {
    return {};
  }

  const style = {};
  style.fontWeight = font.bold ?? false ? "bold" : undefined;
  style.fontStyle = font.italic ?? false ? "italic" : undefined;

  if (defaults) {
    style.fontFamily = (0, _getFontMapping.default)(font.name || "OpenSans");
    style.fontSize = `${font.size || 12}pt`;
    style.lineHeight = font.lineHeight ? `${font.lineHeight}pt` : "120%";
    style.letterSpacing = font.spacing ? `${font.lineHeight}pt` : "normal";
    style.color = (0, _getColor.default)(font.color || "#000000");
    return style;
  }

  style.fontFamily = font.name ? (0, _getFontMapping.default)(font.name || "OpenSans") : undefined;
  style.fontSize = font.size ? `${font.size || 12}pt` : undefined;
  style.lineHeight = font.lineHeight ? `${font.lineHeight}pt` : undefined;
  style.letterSpacing = font.spacing ? `${font.lineHeight}pt` : undefined;
  style.color = font.color ? (0, _getColor.default)(font.color || "#000000") : undefined;
  return style;
}