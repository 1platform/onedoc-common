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

export * as IColumn from "./Document/Content/IColumn";
export * as IContent from "./Document/Content/IContent";
export * as IImage from "./Document/Content/IImage";
export * as ILink from "./Document/Content/ILink";
export * as IQRCode from "./Document/Content/IQRCode";
export * as ITable from "./Document/Content/ITable";
export * as ITableCell from "./Document/Content/ITableCell";
import { ISize, IMarginBox, IMarginAxis, IFontSettings } from "./Document/Generics";

export * as IDocumentSettings from "./Document/IDocumentSettings";
export * as IMetadata from "./Document/IMetadata";
export * as IPageHeaderFooter from "./Document/IPageHeaderFooter";
export * as IPageSettings from "./Document/IPageSettings";
export * as ITemplate from "./Document/ITemplate";

export { StandardPageSizes, SupportedPageSize, getColor, toHexColor };

export type { ISize, IMarginBox, IMarginAxis, IFontSettings };
