"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Content = require("./Constants/Content");

Object.keys(_Content).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Content[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Content[key];
    }
  });
});

var _StandardPageSizes = require("./Constants/StandardPageSizes");

Object.keys(_StandardPageSizes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _StandardPageSizes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _StandardPageSizes[key];
    }
  });
});

var _SupportedPageSize = require("./Constants/SupportedPageSize");

Object.keys(_SupportedPageSize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _SupportedPageSize[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _SupportedPageSize[key];
    }
  });
});

var _Template = require("./Constants/Template");

Object.keys(_Template).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Template[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Template[key];
    }
  });
});

var _getFontConfig = require("./Utils/getFontConfig");

Object.keys(_getFontConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getFontConfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getFontConfig[key];
    }
  });
});

var _convertUnitsToSize = require("./Utils/convertUnitsToSize");

Object.keys(_convertUnitsToSize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _convertUnitsToSize[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _convertUnitsToSize[key];
    }
  });
});

var _getAlignment = require("./Utils/getAlignment");

Object.keys(_getAlignment).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getAlignment[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getAlignment[key];
    }
  });
});

var _getColor = require("./Utils/getColor");

Object.keys(_getColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getColor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getColor[key];
    }
  });
});

var _getSize = require("./Utils/getSize");

Object.keys(_getSize).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getSize[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getSize[key];
    }
  });
});

var _normalizeMargins = require("./Utils/normalizeMargins");

Object.keys(_normalizeMargins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _normalizeMargins[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _normalizeMargins[key];
    }
  });
});

var _getFontMapping = require("./Utils/getFontMapping");

Object.keys(_getFontMapping).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getFontMapping[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getFontMapping[key];
    }
  });
});

var _getPageMargins = require("./Utils/getPageMargins");

Object.keys(_getPageMargins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _getPageMargins[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _getPageMargins[key];
    }
  });
});

var _IColumn = require("./Document/Content/IColumn");

Object.keys(_IColumn).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IColumn[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IColumn[key];
    }
  });
});

var _IContent = require("./Document/Content/IContent");

Object.keys(_IContent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IContent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IContent[key];
    }
  });
});

var _IImage = require("./Document/Content/IImage");

Object.keys(_IImage).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IImage[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IImage[key];
    }
  });
});

var _ILink = require("./Document/Content/ILink");

Object.keys(_ILink).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ILink[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ILink[key];
    }
  });
});

var _IQRCode = require("./Document/Content/IQRCode");

Object.keys(_IQRCode).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IQRCode[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IQRCode[key];
    }
  });
});

var _ITable = require("./Document/Content/ITable");

Object.keys(_ITable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ITable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ITable[key];
    }
  });
});

var _ITableCell = require("./Document/Content/ITableCell");

Object.keys(_ITableCell).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ITableCell[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ITableCell[key];
    }
  });
});

var _Generics = require("./Document/Generics");

Object.keys(_Generics).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Generics[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _Generics[key];
    }
  });
});

var _IDocumentSettings = require("./Document/IDocumentSettings");

Object.keys(_IDocumentSettings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IDocumentSettings[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IDocumentSettings[key];
    }
  });
});

var _IMetadata = require("./Document/IMetadata");

Object.keys(_IMetadata).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IMetadata[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IMetadata[key];
    }
  });
});

var _IPageHeaderFooter = require("./Document/IPageHeaderFooter");

Object.keys(_IPageHeaderFooter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IPageHeaderFooter[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IPageHeaderFooter[key];
    }
  });
});

var _IPageSettings = require("./Document/IPageSettings");

Object.keys(_IPageSettings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _IPageSettings[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _IPageSettings[key];
    }
  });
});

var _ITemplate = require("./Document/ITemplate");

Object.keys(_ITemplate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ITemplate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _ITemplate[key];
    }
  });
});