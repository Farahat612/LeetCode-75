var predictPartyVictory = function (senate) {
  const radiant = []
  const dire = []
  const n = senate.length

  // Populate the queues based on party affiliation
  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      radiant.push(i)
    } else {
      dire.push(i)
    }
  }

  while (radiant.length > 0 && dire.length > 0) {
    const rIndex = radiant.shift()
    const dIndex = dire.shift()

    // The one with the smaller index bans the other's right
    if (rIndex < dIndex) {
      radiant.push(rIndex + n) // Re-enter with a future banning round
    } else {
      dire.push(dIndex + n) // Re-enter with a future banning round
    }
  }

  return radiant.length > 0 ? 'Radiant' : 'Dire'
}
