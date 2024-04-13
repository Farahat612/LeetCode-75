var minEatingSpeed = function (piles, h) {
  let left = 1,
    right = Math.max(...piles)
  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    let total = piles.reduce((sum, pile) => sum + Math.ceil(pile / mid), 0)
    if (total > h) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}
