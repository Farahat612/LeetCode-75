var letterCombinations = function (digits) {
  if (digits.length === 0) return []
  const mapping = [
    '0',
    '1',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ]
  let result = []
  const helper = (combination, index) => {
    if (index === digits.length) {
      result.push(combination)
      return
    }
    for (let letter of mapping[digits[index]]) {
      helper(combination + letter, index + 1)
    }
  }
  helper('', 0)
  return result
}
