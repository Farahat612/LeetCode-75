var closeStrings = function (word1, word2) {
  // Helper function to calculate frequency map
  const calculateFrequency = (word) => {
    const freqMap = new Map()
    for (const char of word) {
      freqMap.set(char, (freqMap.get(char) || 0) + 1)
    }
    return freqMap
  }

  // Calculate frequency maps for both words
  const freqMap1 = calculateFrequency(word1)
  const freqMap2 = calculateFrequency(word2)

  // Extract sets of characters from frequency maps
  const charSet1 = new Set(freqMap1.keys())
  const charSet2 = new Set(freqMap2.keys())

  // Convert frequency maps to arrays for comparison
  const freqArray1 = Array.from(freqMap1.values()).sort((a, b) => a - b)
  const freqArray2 = Array.from(freqMap2.values()).sort((a, b) => a - b)

  // Check if character sets and frequency arrays match
  return (
    charSet1.size === charSet2.size &&
    [...charSet1].every((char) => charSet2.has(char)) &&
    freqArray1.toString() === freqArray2.toString()
  )
}
