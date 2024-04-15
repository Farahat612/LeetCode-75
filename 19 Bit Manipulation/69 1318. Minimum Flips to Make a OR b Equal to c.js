var minFlips = function (a, b, c) {
  let flips = 0

  for (let i = 0; i < 31; i++) {
    let bitA = (a >> i) & 1
    let bitB = (b >> i) & 1
    let bitC = (c >> i) & 1

    if (bitC === 0) {
      flips += bitA + bitB
    } else {
      flips += 1 - (bitA | bitB)
    }
  }

  return flips
}
