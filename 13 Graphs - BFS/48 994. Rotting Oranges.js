var orangesRotting = function (grid) {
  const rows = grid.length
  const cols = grid[0].length
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] // Down, Up, Right, Left

  const queue = []
  let freshOranges = 0
  let minutes = 0

  // Enqueue all initial rotten oranges and count fresh oranges
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) {
        queue.push({ row: i, col: j, time: 0 })
      } else if (grid[i][j] === 1) {
        freshOranges++
      }
    }
  }

  // BFS
  while (queue.length > 0) {
    const { row, col, time } = queue.shift()
    minutes = Math.max(minutes, time)

    for (const [dr, dc] of directions) {
      const newRow = row + dr
      const newCol = col + dc
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 1
      ) {
        grid[newRow][newCol] = 2 // Mark as rotten
        freshOranges--
        queue.push({ row: newRow, col: newCol, time: time + 1 })
      }
    }
  }

  return freshOranges === 0 ? minutes : -1
}
