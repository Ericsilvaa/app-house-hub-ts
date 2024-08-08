export function getImageUrl(filename: string) {
  return new URL(`/src/assets/${filename}`, import.meta.url).href
}
