var isSubsequence = function (s, t) {
  let i = 0 // Pointer for string s
  let j = 0 // Pointer for string t

  // Traverse both strings
  while (i < s.length && j < t.length) {
    // If characters match, move pointer for s
    if (s[i] === t[j]) {
      i++
    }
    // Always move pointer for t
    j++
  }

  // Check if we have processed all characters of s
  return i === s.length
}
