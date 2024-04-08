var reverseWords = function (s) {
  // Trim the input string to remove leading and trailing spaces
  s = s.trim()

  // Split the trimmed string into an array of words
  // let words = s.split(' ') // Caused error in case of multiple spaces between words
  let words = s.split(/\s+/) // solved the issue by using regex to split by one or more spaces

  // Reverse the array of words
  let reversedWords = words.reverse()

  // Join the reversed array into a string with a single space separator
  let reversedString = reversedWords.join(' ')

  // Return the reversed string
  return reversedString
}
