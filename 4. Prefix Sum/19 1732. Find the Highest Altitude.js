var largestAltitude = function (gain) {
  let currentAltitude = 0
  let highestAltitude = 0

  // Iterate over the gain array to calculate altitudes
  for (const gainChange of gain) {
    currentAltitude += gainChange
    highestAltitude = Math.max(highestAltitude, currentAltitude)
  }

  return highestAltitude
}
