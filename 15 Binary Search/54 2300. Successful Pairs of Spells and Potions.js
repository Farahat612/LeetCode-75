// Submission 01 : Exceed time limit
// var successfulPairs = function (spells, potions, success) {
//   let result = []
//   for (let spell of spells) {
//     let successfulPairs = 0
//     for (let potion of potions) {
//       if (spell * potion >= success) {
//         successfulPairs++
//       }
//     }
//     result.push(successfulPairs)
//   }
//   return result
// }

// Submission 02 :
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b)
  let result = []
  for (let spell of spells) {
    let left = 0,
      right = potions.length - 1
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (spell * potions[mid] < success) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    result.push(potions.length - left)
  }
  return result
}
