function equalPairs(grid) {
  // Determine the size of the grid
  const gridSize = grid.length

  // Create a new grid to store the transposed version of the original grid
  let transposedGrid = Array.from({ length: gridSize }, () =>
    Array(gridSize).fill(0)
  )

  // Transpose the original grid and fill the transposedGrid
  for (let j = 0; j < gridSize; ++j) {
    for (let i = 0; i < gridSize; ++i) {
      transposedGrid[i][j] = grid[j][i]
    }
  }

  // Initialize a counter to keep track of equal pairs
  let equalPairsCount = 0

  // Compare each row of the original grid with each column of the transposed grid
  for (const row of grid) {
    for (const col of transposedGrid) {
      // Increment the count if the row and column are identical
      equalPairsCount += Number(row.toString() === col.toString())
    }
  }

  // Return the total number of equal pairs
  return equalPairsCount
}
