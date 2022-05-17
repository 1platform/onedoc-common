import { SizeUnit } from "../Constants/Template";
export default function convertUnitsToSize(size: number | string, unit?: SizeUnit): number | "auto";
export declare function convertUnitsToPageSize(width: any, height: any, unit?: SizeUnit): {
    width: string | number;
    height: string | number;
};
