var dailyTemperatures = function (temperatures) {
  let result = new Array(temperatures.length).fill(0)
  let stack = []

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let j = stack.pop()
      result[j] = i - j
    }
    stack.push(i)
  }

  return result
}
