import IDocumentSettings from "./IDocumentSettings";
import IColumn from "./Content/IColumn";
import { PageHeaderFooterType } from "../Constants/Content";
export interface IPageHeaderFooter {
    type: PageHeaderFooterType;
    settings?: IDocumentSettings;
    columns: Array<IColumn>;
}
