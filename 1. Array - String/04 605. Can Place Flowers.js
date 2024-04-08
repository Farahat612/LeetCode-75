var canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed.length
  let count = 0

  for (let i = 0; i < len; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === len - 1 || flowerbed[i + 1] === 0)
    ) {
      // Plant a flower at position i
      flowerbed[i] = 1
      count++
    }
    if (count >= n) {
      return true
    }
  }

  return count >= n
}
