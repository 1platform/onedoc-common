import { Content } from "pdfmake/interfaces";
import IContent from "../Document/Content/IContent";

export enum ContentTypes {
  TEXT = "text",
  LINK = "link",
  LIST = "list",
  TABLE = "table",
  QRCODE = "qrCode",
  IMAGE = "image",
  STACK = "stack",
  COLUMNS = "columns",
}

export enum TableLayout {
  NO_BORDERS = "noBorders",
  HEADER_LINE_ONLY = "headerLineOnly",
  LIGHT_HORIZONTAL_LINES = "lightHorizontalLines",
}

export enum PageHeaderFooterType {
  HEADER = "header",
  FOOTER = "footer",
}

export enum LinkTypes {
  WEBSITE = "website",
  PAGE = "page",
  DESTINATION = "destination",
}

export type RenderFunction = (content: IContent | string, params?: Record<string, unknown>) => Content;
