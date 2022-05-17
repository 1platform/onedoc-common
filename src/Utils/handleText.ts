import Mustache from "mustache";

export default function handleText(text: Array<string> | string, params?: Record<string, unknown>): string {
  if (!text) {
    return null;
  }
  if (!Array.isArray(text)) {
    text = [ text ];
  }

  return text.map((line) => (params ? Mustache.render(line, params) : line)).join(" ");
}
