import { IMarginAxis, IMarginBox } from "../Document/Generics";
export interface IPageMargins extends Record<string, number> {
    top: number;
    left: number;
    bottom: number;
    right: number;
}
export default function getPageMargins(margins?: IMarginBox | IMarginAxis | Array<number> | number, defaults?: IPageMargins): IPageMargins;
