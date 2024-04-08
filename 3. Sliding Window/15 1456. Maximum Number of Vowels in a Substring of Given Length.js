function maxVowels(s, k) {
  const vowels = new Set('aeiou') // Create a set of vowel characters
  let maxVowels = 0
  let currentVowels = 0

  for (let i = 0; i < s.length; i++) {
    // Check if current character is a vowel
    if (vowels.has(s[i])) {
      currentVowels++
    }

    // Check if window size has reached k
    if (i >= k - 1) {
      // Update maxVowels if necessary
      maxVowels = Math.max(maxVowels, currentVowels)

      // Remove the first element from the current vowel count for the next window
      if (vowels.has(s[i - k + 1])) {
        currentVowels--
      }
    }
  }

  return maxVowels
}
