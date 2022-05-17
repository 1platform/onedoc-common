import { IMarginAxis, IMarginBox } from "../Document/Generics";

export interface IPageMargins extends Record<string, number> {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

export default function getPageMargins(margins?: IMarginBox | IMarginAxis | Array<number> | number, defaults?: IPageMargins): IPageMargins {
  if (!defaults) {
    defaults = {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    };
  }

  if (!margins) {
    return defaults;
  }

  if (typeof margins !== "number" && !Array.isArray(margins)) {
    if ("x" in margins || "y" in margins) {
      defaults.top = margins?.y || 0;
      defaults.bottom = margins?.y || 0;
      defaults.right = margins?.x || 0;
      defaults.left = margins?.x || 0;
    } else {
      defaults.top = (margins as IMarginBox)?.top || 0;
      defaults.right = (margins as IMarginBox)?.right || 0;
      defaults.bottom = (margins as IMarginBox)?.bottom || 0;
      defaults.left = (margins as IMarginBox)?.left || 0;
    }
  } else if (Array.isArray(margins)) {
    if (margins.length === 4 || margins.length === 2) {
      defaults.top = margins[0] || 0;
      defaults.left = margins[1] || 0;
      defaults.bottom = (margins.length === 4 ? margins[2] : margins[0]) || 0;
      defaults.right = (margins.length === 4 ? margins[3] : margins[1]) || 0;
    }
  } else {
    defaults.top = margins || 0;
    defaults.right = margins || 0;
    defaults.bottom = margins || 0;
    defaults.left = margins || 0;
  }

  return defaults;
}
