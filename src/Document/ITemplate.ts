import IDocumentSettings from "./IDocumentSettings";
import IMetadata from "./IMetadata";
import { TemplateType } from "../Constants/Template";
import IContent from "./Content/IContent";
import IPageHeaderFooter from "./IPageHeaderFooter";

export default interface ITemplate {
  settings?: IDocumentSettings;
  metadata?: IMetadata;
  type?: TemplateType;
  title?: string;
  content: Array<IContent>;
  header?: IPageHeaderFooter;
  footer?: IPageHeaderFooter;
}
