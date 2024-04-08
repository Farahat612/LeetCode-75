var kidsWithCandies = function (candies, extraCandies) {
  const n = candies.length
  if (n === 0) return []

  // Find the maximum number of candies among all kids
  const maxCandies = Math.max(...candies)

  // Initialize the result array
  const result = []

  // Check each kid's candies with the extraCandies
  for (let i = 0; i < n; i++) {
    if (candies[i] + extraCandies >= maxCandies) {
      result.push(true)
    } else {
      result.push(false)
    }
  }

  return result
}
