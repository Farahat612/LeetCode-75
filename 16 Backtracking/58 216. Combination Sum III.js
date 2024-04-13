var combinationSum3 = function (k, n) {
  let result = []
  const helper = (combination, start, remaining) => {
    if (combination.length === k && remaining === 0) {
      result.push(combination)
      return
    }
    if (combination.length === k || remaining < 0) return
    for (let i = start; i <= 9; i++) {
      helper([...combination, i], i + 1, remaining - i)
    }
  }
  helper([], 1, n)
  return result
}
