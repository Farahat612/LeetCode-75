var guessNumber = function (n) {
  let low = 1
  let high = n
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2)
    let res = guess(mid)
    if (res == 0) {
      return mid
    } else if (res < 0) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }
  return -1
}
