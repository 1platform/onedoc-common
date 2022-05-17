"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableLayout = exports.PageHeaderFooterType = exports.LinkTypes = exports.ContentTypes = void 0;
let ContentTypes;
exports.ContentTypes = ContentTypes;

(function (ContentTypes) {
  ContentTypes["TEXT"] = "text";
  ContentTypes["LINK"] = "link";
  ContentTypes["LIST"] = "list";
  ContentTypes["TABLE"] = "table";
  ContentTypes["QRCODE"] = "qrCode";
  ContentTypes["IMAGE"] = "image";
  ContentTypes["STACK"] = "stack";
  ContentTypes["COLUMNS"] = "columns";
})(ContentTypes || (exports.ContentTypes = ContentTypes = {}));

let TableLayout;
exports.TableLayout = TableLayout;

(function (TableLayout) {
  TableLayout["NO_BORDERS"] = "noBorders";
  TableLayout["HEADER_LINE_ONLY"] = "headerLineOnly";
  TableLayout["LIGHT_HORIZONTAL_LINES"] = "lightHorizontalLines";
})(TableLayout || (exports.TableLayout = TableLayout = {}));

let PageHeaderFooterType;
exports.PageHeaderFooterType = PageHeaderFooterType;

(function (PageHeaderFooterType) {
  PageHeaderFooterType["HEADER"] = "header";
  PageHeaderFooterType["FOOTER"] = "footer";
})(PageHeaderFooterType || (exports.PageHeaderFooterType = PageHeaderFooterType = {}));

let LinkTypes;
exports.LinkTypes = LinkTypes;

(function (LinkTypes) {
  LinkTypes["WEBSITE"] = "website";
  LinkTypes["PAGE"] = "page";
  LinkTypes["DESTINATION"] = "destination";
})(LinkTypes || (exports.LinkTypes = LinkTypes = {}));