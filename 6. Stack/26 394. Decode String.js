var decodeString = function (s) {
  const countStack = []
  const stringStack = []
  let currentNum = ''
  let currentString = ''

  for (let char of s) {
    if (char >= '0' && char <= '9') {
      // Accumulate the current number
      currentNum += char
    } else if (char === '[') {
      // Push the current number onto the countStack
      countStack.push(parseInt(currentNum))
      // Push an empty string onto the stringStack for the new encoded string
      stringStack.push(currentString)
      // Reset currentNum and currentString for the next encoded string
      currentNum = ''
      currentString = ''
    } else if (char === ']') {
      // Pop the count (k) from countStack and the corresponding string from stringStack
      const repeatCount = countStack.pop()
      const prevString = stringStack.pop()
      // Repeat the currentString 'repeatCount' times and append to the previous string
      currentString = prevString + currentString.repeat(repeatCount)
    } else {
      // Append the current character to the currentString
      currentString += char
    }
  }

  // The decoded result is the concatenation of all strings in stringStack
  return stringStack.join('') + currentString
}
