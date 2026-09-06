function numDistinct(s: string, t: string): number {
  const memo: number[][] = Array.from({ length: s.length }, () =>
    new Array<number>(t.length).fill(-1)
  );

  function solve(i: number, j: number): number {
    if (j === t.length) return 1;
    if (i === s.length) return 0;

    // Return cached result if already calculated
    if (memo[i]![j]! !== -1) return memo[i]![j]!;

    let totalWays = 0;
    if (s[i] === t[j]) {
      totalWays = solve(i + 1, j + 1) + solve(i + 1, j);
    } else {
      totalWays = solve(i + 1, j);
    }

    memo[i]![j] = totalWays;
    return totalWays;
  }

  return solve(0, 0);
}