"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateType = exports.SizeUnit = exports.SUPPORTED_FILES = exports.SUPPORTED_EXTENSIONS = exports.PageOrientation = exports.PUBLISHER = void 0;
let TemplateType;
exports.TemplateType = TemplateType;

(function (TemplateType) {
  TemplateType["LABEL"] = "label";
  TemplateType["DOCUMENT"] = "document";
})(TemplateType || (exports.TemplateType = TemplateType = {}));

let PageOrientation;
exports.PageOrientation = PageOrientation;

(function (PageOrientation) {
  PageOrientation["LANDSCAPE"] = "landscape";
  PageOrientation["PORTRAIT"] = "portrait";
})(PageOrientation || (exports.PageOrientation = PageOrientation = {}));

let SizeUnit;
exports.SizeUnit = SizeUnit;

(function (SizeUnit) {
  SizeUnit["MM"] = "mm";
  SizeUnit["IN"] = "in";
  SizeUnit["CM"] = "cm";
  SizeUnit["PX"] = "px";
  SizeUnit["PT"] = "pt";
  SizeUnit["INCH"] = "in";
  SizeUnit["MILLIMETER"] = "mm";
  SizeUnit["CENTIMETER"] = "cm";
  SizeUnit["PIXEL"] = "px";
  SizeUnit["POINT"] = "pt";
  SizeUnit["PICA"] = "pica";
})(SizeUnit || (exports.SizeUnit = SizeUnit = {}));

const SUPPORTED_EXTENSIONS = [".yaml", ".yml", ".json"];
exports.SUPPORTED_EXTENSIONS = SUPPORTED_EXTENSIONS;
const SUPPORTED_FILES = ["index", "template", "document"];
exports.SUPPORTED_FILES = SUPPORTED_FILES;
const PUBLISHER = "OneBE.Maker";
exports.PUBLISHER = PUBLISHER;