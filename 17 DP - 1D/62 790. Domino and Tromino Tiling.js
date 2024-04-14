function numTilings(N) {
  const MOD = 1000000007
  const dp = new Array(N + 1).fill(0)
  dp[0] = 1
  dp[1] = 1
  dp[2] = 2
  for (let i = 3; i <= N; i++) {
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % MOD
  }
  return dp[N]
}
