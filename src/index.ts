export * from "./Constants/Content";
import StandardPageSizes from "./Constants/StandardPageSizes";
import SupportedPageSize from "./Constants/SupportedPageSize";

export * from "./Constants/Template";

export * as convertUnitsToPageSize from "./Utils/convertUnitsToPageSize";
export * as convertUnitToSize from "./Utils/convertUnitToSize";
import getColor, { toHexColor } from "./Utils/getColor";

export * as getSize from "./Utils/getSize";
export * as getImageSize from "./Utils/getImageSize";
export * as normalizeMargins from "./Utils/normalizeMargins";
export * as getPageMargins from "./Utils/getPageMargins";
export * as handleText from "./Utils/handleText";

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
import IPageHeaderFooter from "./Document/IPageHeaderFooter";
import IPageSettings from "./Document/IPageSettings";
import ITemplate from "./Document/ITemplate";

export { StandardPageSizes, SupportedPageSize, getColor, toHexColor };

export type {
  ISize,
  IMarginBox,
  IMarginAxis,
  IFontSettings,
  IDocumentSettings,
  IMetadata,
  IPageHeaderFooter,
  IPageSettings,
  ITemplate,
  IColumn,
  IContent,
  IImage,
  ILink,
  IQRCode,
  ITable,
  ITableCell,
};
