import { Alignment } from "pdfmake/interfaces";
import { IFontSettings, ISize } from "../Generics";
import { ContentTypes, TableLayout } from "../../Constants/Content";
import IImage from "./IImage";
import ILink from "./ILink";
import IQRCode from "./IQRCode";
import ITable from "./ITable";
import ITableCell from "./ITableCell";

export default interface IContent {
  id?: string;
  type: ContentTypes;
  content?: Array<IContent>;
  text?: Array<string> | string | Array<IContent>;
  alignment?: Alignment;
  contentAlignment?: Alignment;
  font?: IFontSettings;
  contentFont?: IFontSettings;
  width?: string | number;
  widths?: Array<string | number>;
  gap?: number;

  image?: IImage;

  link?: ILink | string;

  qrCode?: IQRCode;

  isOrdered?: boolean;

  table?: ITable;
  header?: IContent;
  cellContent?: ITableCell;
  colSpan?: number;
  rowSpan?: number;
}
