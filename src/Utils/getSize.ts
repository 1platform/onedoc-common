export default function getSize(size: string | number, pageWidth = 500) {
  if (typeof size === "number") {
    return size;
  }

  return (parseInt(size) / 100) * pageWidth;
}
