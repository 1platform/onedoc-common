import { ISize } from "../Document/Generics";
import getSize from "./getSize";

export default function getImageSize(size: string | number | ISize): ISize {
  if (typeof size === "string" || typeof size === "number") {
    return {
      width: getSize(size),
      height: getSize(size),
    };
  }

  return {
    width: getSize(size.width || 0),
    height: getSize(size.height || 0),
  };
}
