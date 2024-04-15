var Trie = function () {
  this.children = {}
  this.isEndOfWord = false
}

Trie.prototype.insert = function (word) {
  let node = this
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new Trie()
    }
    node = node.children[char]
  }
  node.isEndOfWord = true
}

Trie.prototype.search = function (word) {
  let node = this
  for (let char of word) {
    node = node.children[char]
    if (!node) {
      return false
    }
  }
  return node.isEndOfWord
}

Trie.prototype.startsWith = function (prefix) {
  let node = this
  for (let char of prefix) {
    node = node.children[char]
    if (!node) {
      return false
    }
  }
  return true
}
