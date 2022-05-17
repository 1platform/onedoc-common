export enum TemplateType {
  LABEL = "label",
  DOCUMENT = "document",
}

export enum PageOrientation {
  LANDSCAPE = "landscape",
  PORTRAIT = "portrait",
}

export enum SizeUnit {
  MM = "mm",
  IN = "in",
  CM = "cm",
  PX = "px",
  PT = "pt",
  INCH = "in",
  MILLIMETER = "mm",
  CENTIMETER = "cm",
  PIXEL = "px",
  POINT = "pt",
  PICA = "pica",
}

export const SUPPORTED_EXTENSIONS = [ ".yaml", ".yml", ".json" ];
export const SUPPORTED_FILES = [ "index", "template", "document" ];
export const PUBLISHER = "OneBE.Maker";
