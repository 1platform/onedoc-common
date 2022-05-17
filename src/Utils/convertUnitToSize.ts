import { SizeUnit } from "../Constants/Template";
import getSize from "./getSize";

const conversionUnits = {
  mm: 2.8346456693,
  cm: 0.28346456693,
  in: 72,
  pica: 12,
  px: 0.75,
};
const unitConversions = {
  millimeter: "mm",
  millimeters: "mm",
  inch: "in",
  inches: "in",
  centimeters: "cm",
  pixel: "px",
};

export default function convertUnitToSize(size: number | string, unit: SizeUnit = SizeUnit.POINT) {
  if (size === "auto") {
    return "auto";
  }
  if (Object.keys(conversionUnits).indexOf(unit) < 0) {
    unit = unitConversions[unit] || "pt";
  }
  if (unit === "pt") {
    return getSize(size);
  }

  return getSize(size) * conversionUnits[unit];
}
