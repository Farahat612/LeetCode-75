var increasingTriplet = function (nums) {
  let min1 = Infinity
  let min2 = Infinity

  for (let num of nums) {
    if (num <= min1) {
      min1 = num
    } else if (num <= min2) {
      min2 = num
    } else {
      // Found an increasing triplet (min1 < min2 < num)
      return true
    }
  }

  // No increasing triplet found
  return false
}
