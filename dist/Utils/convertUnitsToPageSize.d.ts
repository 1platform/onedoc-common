import { SizeUnit } from "../Constants/Template";
export default function convertUnitsToPageSize(width: any, height: any, unit?: SizeUnit): {
    width: string | number;
    height: string | number;
};
