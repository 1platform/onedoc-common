"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getImageSize;

var _getSize = _interopRequireDefault(require("./getSize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getImageSize(size) {
  if (typeof size === "string" || typeof size === "number") {
    return {
      width: (0, _getSize.default)(size),
      height: (0, _getSize.default)(size)
    };
  }

  return {
    width: (0, _getSize.default)(size.width || 0),
    height: (0, _getSize.default)(size.height || 0)
  };
}