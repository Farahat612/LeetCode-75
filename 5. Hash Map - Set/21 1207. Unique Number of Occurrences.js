var uniqueOccurrences = function (arr) {
  // Create a hashmap to count occurrences of each value
  const countMap = new Map()

  // Populate the countMap with frequencies of each value
  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }

  // Create a set to track unique occurrences
  const occurrenceSet = new Set()

  // Add all unique occurrences to the set
  for (const count of countMap.values()) {
    occurrenceSet.add(count)
  }

  // Check if the number of unique occurrences matches the number of unique values in countMap
  return occurrenceSet.size === countMap.size
}
