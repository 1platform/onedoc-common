export interface ISize {
  width?: number | string;
  height?: number | string;
}

export interface IMarginBox {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export interface IMarginAxis {
  x?: number;
  y?: number;
}

export interface IFontSettings {
  size?: number;
  name?: string;
  bold?: boolean;
  italic?: boolean;
  lineHeight?: number;
  spacing?: number;
  color?: string | Array<number>;
}
