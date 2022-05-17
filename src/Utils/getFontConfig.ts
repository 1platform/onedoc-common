import { IFontSettings } from "../Document/Generics";
import getFontMapping from "./getFontMapping";
import getColor from "./getColor";

export default function getFontConfig(font?: IFontSettings, defaults = false): Record<string, unknown> {
  if (!font) {
    return {};
  }

  const style: Record<string, unknown> = {};
  style.fontWeight = font.bold ?? false ? "bold" : undefined;
  style.fontStyle = font.italic ?? false ? "italic" : undefined;

  if (defaults) {
    style.fontFamily = getFontMapping(font.name || "OpenSans");
    style.fontSize = `${ font.size || 12 }pt`;
    style.lineHeight = font.lineHeight ? `${ font.lineHeight }pt` : "120%";
    style.letterSpacing = font.spacing ? `${ font.lineHeight }pt` : "normal";
    style.color = getColor(font.color || "#000000");
    return style;
  }

  style.fontFamily = font.name ? getFontMapping(font.name || "OpenSans") : undefined;
  style.fontSize = font.size ? `${ font.size || 12 }pt` : undefined;
  style.lineHeight = font.lineHeight ? `${ font.lineHeight }pt` : undefined;
  style.letterSpacing = font.spacing ? `${ font.lineHeight }pt` : undefined;
  style.color = font.color ? getColor(font.color || "#000000") : undefined;

  return style;
}
