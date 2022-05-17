"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  StandardPageSizes: true,
  SupportedPageSize: true,
  convertUnitsToPageSize: true,
  convertUnitToSize: true,
  getColor: true,
  toHexColor: true,
  getSize: true,
  getImageSize: true,
  normalizeMargins: true,
  getPageMargins: true,
  handleText: true
};
Object.defineProperty(exports, "StandardPageSizes", {
  enumerable: true,
  get: function () {
    return _StandardPageSizes.default;
  }
});
Object.defineProperty(exports, "SupportedPageSize", {
  enumerable: true,
  get: function () {
    return _SupportedPageSize.default;
  }
});
exports.convertUnitsToPageSize = exports.convertUnitToSize = void 0;
Object.defineProperty(exports, "getColor", {
  enumerable: true,
  get: function () {
    return _getColor.default;
  }
});
exports.normalizeMargins = exports.handleText = exports.getSize = exports.getPageMargins = exports.getImageSize = void 0;
Object.defineProperty(exports, "toHexColor", {
  enumerable: true,
  get: function () {
    return _getColor.toHexColor;
  }
});

var _Content = require("./Constants/Content");

Object.keys(_Content).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Content[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Content[key];
    }
  });
});

var _StandardPageSizes = _interopRequireDefault(require("./Constants/StandardPageSizes"));

var _SupportedPageSize = _interopRequireDefault(require("./Constants/SupportedPageSize"));

var _Template = require("./Constants/Template");

Object.keys(_Template).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Template[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Template[key];
    }
  });
});

var _convertUnitsToPageSize = _interopRequireWildcard(require("./Utils/convertUnitsToPageSize"));

exports.convertUnitsToPageSize = _convertUnitsToPageSize;

var _convertUnitToSize = _interopRequireWildcard(require("./Utils/convertUnitToSize"));

exports.convertUnitToSize = _convertUnitToSize;

var _getColor = _interopRequireWildcard(require("./Utils/getColor"));

var _getSize = _interopRequireWildcard(require("./Utils/getSize"));

exports.getSize = _getSize;

var _getImageSize = _interopRequireWildcard(require("./Utils/getImageSize"));

exports.getImageSize = _getImageSize;

var _normalizeMargins = _interopRequireWildcard(require("./Utils/normalizeMargins"));

exports.normalizeMargins = _normalizeMargins;

var _getPageMargins = _interopRequireWildcard(require("./Utils/getPageMargins"));

exports.getPageMargins = _getPageMargins;

var _handleText = _interopRequireWildcard(require("./Utils/handleText"));

exports.handleText = _handleText;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }