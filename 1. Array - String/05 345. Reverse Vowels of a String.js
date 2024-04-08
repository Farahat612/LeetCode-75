var reverseVowels = function (s) {
  // Convert string to array to make it mutable
  let chars = s.split('')

  // Set of vowels
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])

  // Initialize two pointers
  let left = 0,
    right = chars.length - 1

  while (left < right) {
    // Move left pointer to find a vowel
    while (left < right && !vowels.has(chars[left])) {
      left++
    }

    // Move right pointer to find a vowel
    while (left < right && !vowels.has(chars[right])) {
      right--
    }

    // Swap vowels
    if (left < right) {
      let temp = chars[left]
      chars[left] = chars[right]
      chars[right] = temp
      left++
      right--
    }
  }

  // Join array back to string and return
  return chars.join('')
}
