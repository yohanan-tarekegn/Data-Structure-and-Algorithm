function countCommas(n: number): number {
  if (n < 1000) return 0;

  let totalCommas = 0;
  let threshold = 1000; // 10^3, 10^6, 10^9...

  while (n >= threshold) {
    // Every number from threshold to n gets +1 comma for this magnitude step
    totalCommas += n - threshold + 1;
    threshold *= 1000;
  }

  return totalCommas;
}