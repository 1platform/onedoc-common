import { Alignment } from "pdfmake/interfaces";

export default function getAlignment(alignment?: Alignment): string {
  if (!alignment) return "";

  return `is-${ alignment }`;
}
