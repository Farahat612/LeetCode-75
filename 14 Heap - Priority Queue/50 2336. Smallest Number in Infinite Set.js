class SmallestInfiniteSet {
  constructor() {
    // Initialize an array to act as a hashmap
    this.hashMap = new Array(1001).fill(true) // Initialize with size 1001 and fill with true
  }

  popSmallest() {
    // Iterate over the hashmap to find the smallest available number
    for (let i = 1; i <= 1000; i++) {
      // Iterate from 1 to 1000
      if (this.hashMap[i]) {
        // If the number is present in the set
        this.hashMap[i] = false // Mark the number as unavailable
        return i // Return the smallest available number
      }
    }
    return -1 // Return -1 if no number is available
  }

  addBack(num) {
    if (!this.hashMap[num]) {
      // If the number is not already present in the set
      this.hashMap[num] = true // Mark the number as available
    }
  }
}
