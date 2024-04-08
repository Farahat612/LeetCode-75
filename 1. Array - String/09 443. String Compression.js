var compress = function (chars) {
  let write = 0
  let read = 0

  while (read < chars.length) {
    let currentChar = chars[read]
    let count = 0

    // Count consecutive occurrences of current character
    while (read < chars.length && chars[read] === currentChar) {
      read++
      count++
    }

    // Write current character
    chars[write] = currentChar
    write++

    // Write count if it's greater than 1
    if (count > 1) {
      let countStr = count.toString()
      for (let digit of countStr) {
        chars[write] = digit
        write++
      }
    }
  }

  return write
}
