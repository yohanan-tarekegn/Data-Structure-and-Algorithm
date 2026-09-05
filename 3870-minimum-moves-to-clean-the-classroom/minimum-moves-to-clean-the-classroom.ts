type State = [row: number, col: number, energy: number, mask: number, moves: number];

function minMoves(classroom: string[], energy: number): number {
  const maxEnergy = energy;
  const totalRow = classroom.length;
  const totalColm = classroom[0]!.length;

  let startR = 0;
  let startC = 0;

  // Pre-process litter positions
  const litterMap = new Map<string, number>();
  let litterCount = 0;

  for (let r = 0; r < totalRow; r++) {
    for (let c = 0; c < totalColm; c++) {
      const cell = classroom[r]![c];
      if (cell === 'S') {
        startR = r;
        startC = c;
      } else if (cell === 'L') {
        litterMap.set(`${r},${c}`, litterCount);
        litterCount++;
      }
    }
  }

  const targetMask = (1 << litterCount) - 1;

  // Check if starting cell contains litter
  let initialMask = 0;
  const startPosKey = `${startR},${startC}`;
  if (litterMap.has(startPosKey)) {
    initialMask |= (1 << litterMap.get(startPosKey)!);
  }

  // Edge case: No litter to collect, or starting cell completes all litter
  if (initialMask === targetMask) return 0;

  // Optimization #4: bestEnergy[row][col][mask] initialized to -1
  // Stores the HIGHEST remaining energy recorded for each (row, col, mask)
  const totalMasks = 1 << litterCount;
  const bestEnergy: number[][][] = Array.from({ length: totalRow }, () =>
    Array.from({ length: totalColm }, () => 
      new Array<number>(totalMasks).fill(-1)
    )
  );

  // Initialize start state in bestEnergy
  bestEnergy[startR]![startC]![initialMask] = maxEnergy;

  let head = 0;
  const queue: State[] = [[startR, startC, maxEnergy, initialMask, 0]];

  const directions = [
    [-1,  0], // UP
    [ 1,  0], // DOWN
    [ 0, -1], // LEFT
    [ 0,  1], // RIGHT
  ];

  while (head < queue.length) {
    const [r, c, ener, mask, moves] = queue[head++]!;

    // Out of energy check
    if (ener === 0) continue;

    for (const [dr, dc] of directions) {
      const nextr = r + dr!;
      const nextc = c + dc!;

      // Boundary check & obstacle check
      if (
        nextr >= 0 && nextr < totalRow &&
        nextc >= 0 && nextc < totalColm &&
        classroom[nextr]![nextc] !== 'X'
      ) {
        const nextCell = classroom[nextr]![nextc];
        const nextEnergy = nextCell === 'R' ? maxEnergy : ener - 1;

        let nextMask = mask;
        const cellKey = `${nextr},${nextc}`;
        if (litterMap.has(cellKey)) {
          nextMask |= (1 << litterMap.get(cellKey)!);
        }

        // Optimization #3: Target check ON PUSH
        if (nextMask === targetMask) {
          return moves + 1;
        }

        // Optimization #4: Energy Pruning
        // Only proceed if this path achieves STRICTLY MORE energy for (nextr, nextc, nextMask)
        if (nextEnergy > bestEnergy[nextr]![nextc]![nextMask]!) {
          bestEnergy[nextr]![nextc]![nextMask] = nextEnergy;
          queue.push([nextr, nextc, nextEnergy, nextMask, moves + 1]);
        }
      }
    }
  }

  return -1;
}