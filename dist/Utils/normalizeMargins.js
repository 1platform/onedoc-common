"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = normalizeMargins;

function normalizeMargins(contentMargin, pageMargins, isFooter = false) {
  Object.keys(contentMargin).forEach(key => {
    if (contentMargin[key] === 0) {
      if (key === "top" && isFooter || key === "bottom" && !isFooter) {
        contentMargin[key] = 0;
      } else {
        contentMargin[key] = pageMargins[key];
      }
    }

    if (contentMargin[key] < 0) {
      contentMargin[key] = pageMargins[key] - contentMargin[key];
    }
  });
  return contentMargin;
}