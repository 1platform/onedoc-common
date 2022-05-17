import { SizeUnit } from "../Constants/Template";
import convertUnitToSize from "./convertUnitToSize";

export default function convertUnitsToPageSize(width, height, unit: SizeUnit = SizeUnit.POINT) {
  return {
    width: convertUnitToSize(width, unit),
    height: convertUnitToSize(height, unit),
  };
}
