var RecentCounter = function () {
  this.requests = []
}

RecentCounter.prototype.ping = function (t) {
  // Add the current timestamp to the requests queue
  this.requests.push(t)

  // Remove all timestamps from the front of the queue that are not within the time range [t - 3000, t]
  while (this.requests.length > 0 && this.requests[0] < t - 3000) {
    this.requests.shift() // Remove the front element
  }

  // Return the number of requests within the time range [t - 3000, t]
  return this.requests.length
}
