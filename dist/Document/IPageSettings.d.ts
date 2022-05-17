import { ISize } from "./Generics";
import SupportedPageSize from "../Constants/SupportedPageSize";
import { PageOrientation, SizeUnit } from "../Constants/Template";
export default interface IPageSettings extends ISize {
    size?: SupportedPageSize;
    unit?: SizeUnit;
    orientation?: PageOrientation;
}
