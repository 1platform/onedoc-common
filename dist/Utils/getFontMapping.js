"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFontMapping;
const mapping = {
  Akshar: "Akshar",
  FiraMono: "Fira Mono",
  JetBrainsMono: "JetBrains Mono",
  Lato: "Lato",
  Montserrat: "Montserrat",
  NotoSans: "Noto Sans",
  Nunito: "Nunito",
  OpenSans: "Open Sans",
  OpenSans_Condensed: "Open Sans Condensed",
  OpenSans_SemiCondensed: "Open Sans Semi Condensed",
  Poppins: "Poppins",
  Roboto: "Roboto",
  RobotoMono: "Roboto Mono",
  RobotoSlab: "Roboto Slab",
  SourceCodePro: "Source Code Pro",
  SourceSansPro: "Source Sans Pro"
};

function getFontMapping(fontName) {
  if (fontName) {
    return mapping[fontName];
  }

  return mapping;
}