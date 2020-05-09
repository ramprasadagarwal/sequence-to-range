export const getRanges = (array) => {
  const ranges = []
  for (let i = 0; i < array.length; i += 1) {
    const rstart = array[i]
    let rend = rstart
    while (array[i + 1] - array[i] === 1) {
      rend = array[i + 1] // increment the index if the numbers sequential
      i += 1
    }
    ranges.push(rstart === rend ? `${rstart}` : `${rstart} - ${rend}`)
  }
  return ranges
}