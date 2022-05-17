import { IMarginAxis, IMarginBox } from "../Document/Generics";
import IPageMargins from "../Document/IPageMargins";
export default function getPageMargins(margins?: IMarginBox | IMarginAxis | Array<number> | number, defaults?: IPageMargins): IPageMargins;
