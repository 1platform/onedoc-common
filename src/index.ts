export * from "./Constants/Content";
import StandardPageSizes from "./Constants/StandardPageSizes";
import SupportedPageSize from "./Constants/SupportedPageSize";

export * from "./Constants/Template";

import convertUnitsToPageSize from "./Utils/convertUnitsToPageSize";
import convertUnitToSize from "./Utils/convertUnitToSize";
import getColor, { toHexColor } from "./Utils/getColor";

import getSize from "./Utils/getSize";
import getImageSize from "./Utils/getImageSize";
import normalizeMargins from "./Utils/normalizeMargins";
import getPageMargins from "./Utils/getPageMargins";
import handleText from "./Utils/handleText";

import IColumn from "./Document/Content/IColumn";
import IContent from "./Document/Content/IContent";
import IImage from "./Document/Content/IImage";
import ILink from "./Document/Content/ILink";
import IQRCode from "./Document/Content/IQRCode";
import ITable from "./Document/Content/ITable";
import ITableCell from "./Document/Content/ITableCell";
import { ISize, IMarginBox, IMarginAxis, IFontSettings } from "./Document/Generics";

import IDocumentSettings from "./Document/IDocumentSettings";
import IMetadata from "./Document/IMetadata";
import IPageMargins from "./Document/IPageMargins";
import IPageHeaderFooter from "./Document/IPageHeaderFooter";
import IPageSettings from "./Document/IPageSettings";
import ITemplate from "./Document/ITemplate";

export {
  StandardPageSizes,
  SupportedPageSize,
  getColor,
  toHexColor,
  convertUnitsToPageSize,
  convertUnitToSize,
  getSize,
  getImageSize,
  normalizeMargins,
  getPageMargins,
  handleText,
};

export type {
  ISize,
  IMarginBox,
  IMarginAxis,
  IFontSettings,
  IDocumentSettings,
  IMetadata,
  IPageHeaderFooter,
  IPageSettings,
  IPageMargins,
  ITemplate,
  IColumn,
  IContent,
  IImage,
  ILink,
  IQRCode,
  ITable,
  ITableCell,
};
