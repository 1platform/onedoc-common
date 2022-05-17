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
Object.defineProperty(exports, "convertUnitToSize", {
  enumerable: true,
  get: function () {
    return _convertUnitToSize.default;
  }
});
Object.defineProperty(exports, "convertUnitsToPageSize", {
  enumerable: true,
  get: function () {
    return _convertUnitsToPageSize.default;
  }
});
Object.defineProperty(exports, "getColor", {
  enumerable: true,
  get: function () {
    return _getColor.default;
  }
});
Object.defineProperty(exports, "getImageSize", {
  enumerable: true,
  get: function () {
    return _getImageSize.default;
  }
});
Object.defineProperty(exports, "getPageMargins", {
  enumerable: true,
  get: function () {
    return _getPageMargins.default;
  }
});
Object.defineProperty(exports, "getSize", {
  enumerable: true,
  get: function () {
    return _getSize.default;
  }
});
Object.defineProperty(exports, "handleText", {
  enumerable: true,
  get: function () {
    return _handleText.default;
  }
});
Object.defineProperty(exports, "normalizeMargins", {
  enumerable: true,
  get: function () {
    return _normalizeMargins.default;
  }
});
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

var _convertUnitsToPageSize = _interopRequireDefault(require("./Utils/convertUnitsToPageSize"));

var _convertUnitToSize = _interopRequireDefault(require("./Utils/convertUnitToSize"));

var _getColor = _interopRequireWildcard(require("./Utils/getColor"));

var _getSize = _interopRequireDefault(require("./Utils/getSize"));

var _getImageSize = _interopRequireDefault(require("./Utils/getImageSize"));

var _normalizeMargins = _interopRequireDefault(require("./Utils/normalizeMargins"));

var _getPageMargins = _interopRequireDefault(require("./Utils/getPageMargins"));

var _handleText = _interopRequireDefault(require("./Utils/handleText"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }