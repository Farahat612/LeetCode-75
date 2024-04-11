var canVisitAllRooms = function (rooms) {
  const n = rooms.length
  const visited = new Array(n).fill(false)
  visited[0] = true
  const queue = [0]

  while (queue.length > 0) {
    const current = queue.shift()
    for (const key of rooms[current]) {
      if (!visited[key]) {
        visited[key] = true
        queue.push(key)
      }
    }
  }

  // Check if all rooms are visited
  for (const visit of visited) {
    if (!visit) {
      return false
    }
  }

  return true
}
