import { Content } from "pdfmake/interfaces";
import IContent from "../Document/Content/IContent";
export declare enum ContentTypes {
    TEXT = "text",
    LINK = "link",
    LIST = "list",
    TABLE = "table",
    QRCODE = "qrCode",
    IMAGE = "image",
    STACK = "stack",
    COLUMNS = "columns"
}
export declare enum TableLayout {
    NO_BORDERS = "noBorders",
    HEADER_LINE_ONLY = "headerLineOnly",
    LIGHT_HORIZONTAL_LINES = "lightHorizontalLines"
}
export declare enum PageHeaderFooterType {
    HEADER = "header",
    FOOTER = "footer"
}
export declare enum LinkTypes {
    WEBSITE = "website",
    PAGE = "page",
    DESTINATION = "destination"
}
export declare type RenderFunction = (content: IContent | string, params?: Record<string, unknown>) => Content;
