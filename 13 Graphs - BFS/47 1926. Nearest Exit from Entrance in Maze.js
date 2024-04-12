var nearestExit = function (maze, entrance) {
  const [rows, cols] = [maze.length, maze[0].length]
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ] // Down, Up, Right, Left

  const queue = []
  queue.push({ row: entrance[0], col: entrance[1], distance: 0 })
  maze[entrance[0]][entrance[1]] = '+'

  while (queue.length > 0) {
    const { row, col, distance } = queue.shift()
    if (
      (row !== entrance[0] || col !== entrance[1]) &&
      (row === 0 || row === rows - 1 || col === 0 || col === cols - 1)
    ) {
      return distance // Found an exit
    }
    for (const [dr, dc] of directions) {
      const newRow = row + dr
      const newCol = col + dc
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        maze[newRow][newCol] === '.'
      ) {
        queue.push({ row: newRow, col: newCol, distance: distance + 1 })
        maze[newRow][newCol] = '+'
      }
    }
  }

  return -1 // No exit found
}
