var suggestedProducts = function (products, searchWord) {
  products.sort()
  let result = []
  let prefix = ''

  for (let char of searchWord) {
    prefix += char
    let start = binarySearch(products, prefix)
    result.push(getSuggestions(products, start, prefix))
  }

  return result
}

function binarySearch(products, prefix) {
  let left = 0
  let right = products.length - 1

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (products[mid] < prefix) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}

function getSuggestions(products, start, prefix) {
  let suggestions = []
  for (let i = start; i < Math.min(start + 3, products.length); i++) {
    if (products[i].startsWith(prefix)) {
      suggestions.push(products[i])
    }
  }
  return suggestions
}
