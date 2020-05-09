const sequenceToRange = (sequence, delimitor = ' - ') => {
  const sortedSequences = sequence.sort()
  const ranges = []
  for (let i = 0; i < sortedSequences.length; i += 1) {
    const rstart = sortedSequences[i]
    let rend = rstart
    while (sortedSequences[i + 1] - sortedSequences[i] === 1) {
      rend = sortedSequences[i + 1]
      i += 1
    }
    ranges.push(rstart === rend ? `${rstart}` : `${rstart}${delimitor}${rend}`)
  }
  return ranges
}

module.exports.default = sequenceToRange