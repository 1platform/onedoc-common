import { ISize } from "../Document/Generics";

export function getImageSize(size: string | number | ISize): ISize {
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

export function getSize(size: string | number, pageWidth = 500) {
  if (typeof size === "number") {
    return size;
  }

  return (parseInt(size) / 100) * pageWidth;
}
