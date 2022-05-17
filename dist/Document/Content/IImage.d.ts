import { ISize } from "../Generics";
export default interface IImage {
    src: string;
    fit?: boolean;
    isSVG?: boolean;
    embeded?: boolean;
    size: string | number | ISize;
}
