export const capitalize = (s) => {
  if (typeof s !== `string`) return ``
  s = s
    .toLowerCase()
    .split(` `)
    .map((item) => {
      return item.replace(/^./, (l) => l.toUpperCase())
    })
  return s.join(` `)
}
