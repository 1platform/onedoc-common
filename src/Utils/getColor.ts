export function toHexColor(red: Array<number> | number, green?: number, blue?: number): string {
  if (Array.isArray(red)) {
    [ red, green, blue ] = red;
  }
  return `#${ red.toString(16) }${ green?.toString(16) }${ blue?.toString(16) }`;
}

export default function getColor(color: string | Array<number>) {
  return typeof color === "string" ? color : toHexColor(color[0] ?? 0, color[1] ?? 0, color[2] ?? 0);
}
