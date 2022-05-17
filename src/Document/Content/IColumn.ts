import { Alignment } from "pdfmake/interfaces";
import { IMarginAxis, IMarginBox } from "../Generics";
import IContent from "./IContent";

export default interface IColumn {
  alignment?: Alignment;
  margins?: IMarginBox | IMarginAxis | Array<number> | number;
  width?: string | number;
  content: Array<IContent>;
}
