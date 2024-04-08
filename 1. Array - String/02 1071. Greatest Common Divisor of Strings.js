var gcdOfStrings = function (str1, str2) {
  const len1 = str1.length
  const len2 = str2.length

  // Check if str1 + str2 is equal to str2 + str1
  if (str1 + str2 !== str2 + str1) {
    return ''
  }

  // Calculate the gcd of lengths len1 and len2
  const gcdLength = gcd(len1, len2)

  // Extract the substring of length gcdLength from str1 (or str2)
  return str1.substring(0, gcdLength)
}

// Helper function to calculate the greatest common divisor (GCD) of two numbers
function gcd(a, b) {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

