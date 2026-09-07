function distinctSubseqII(s: string): number {
  const MOD = 1_000_000_007;
  
  // Tracks how many unique subsequences end at each letter ('a' -> 0, 'b' -> 1, ...)
  const lastCount = new Array<number>(26).fill(0);
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i) - 97; // Map 'a'-'z' to 0-25
    
    // 1. Calculate new subsequences this character can form
    const newCount = (total + 1) % MOD;

    // 2. Update running total: add newCount, subtract previous duplicate count for this character
    total = (total + newCount - lastCount[charCode]! + MOD) % MOD;

    // 3. Save the current contribution for this character
    lastCount[charCode] = newCount;
  }

  return total;
}