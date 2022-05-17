import { IFontSettings, IMarginAxis, IMarginBox } from "./Generics";
import IPageSettings from "./IPageSettings";
export default interface IDocumentSettings {
    page?: IPageSettings;
    font?: IFontSettings;
    margins?: IMarginBox | IMarginAxis | Array<number> | number;
    language?: string;
    gap?: number;
    compress?: boolean;
    password?: string;
}
