/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function(classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;

    let startX = 0, startY = 0;
    let litterCount = 0;

    // 2D grid mapping litter coordinates to bit positions (0 to litterCount-1)
    const litterId = Array.from({ length: m }, () => new Int32Array(n).fill(-1));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const char = classroom[i][j];
            if (char === 'S') {
                startX = i;
                startY = j;
            } else if (char === 'L') {
                litterId[i][j] = litterCount++;
            }
        }
    }

    // Target bitmask: all litter bits set to 1 (e.g. 3 litters -> (1 << 3) - 1 = 7)
    const targetMask = (1 << litterCount) - 1;

    // Fast 4D visited tracking using a 1D Flat TypedArray
    // Index formula: (((r * n + c) * (energy + 1) + curEnergy) * (1 << litterCount)) + mask
    const energySize = energy + 1;
    const maskSize = 1 << litterCount;
    const visited = new Uint8Array(m * n * energySize * maskSize);

    const getVisitedIndex = (r, c, e, mask) => {
        return (((r * n + c) * energySize + e) * maskSize) + mask;
    };

    // Fast O(1) Queue using a flat typed array + head pointer
    const maxStates = m * n * energySize * maskSize;
    const queue = new Int32Array(maxStates * 5); // [r, c, curEnergy, mask, moves]
    
    let head = 0;
    let tail = 0;

    // Enqueue start state
    queue[tail++] = startX;
    queue[tail++] = startY;
    queue[tail++] = energy;
    queue[tail++] = 0;
    queue[tail++] = 0;

    visited[getVisitedIndex(startX, startY, energy, 0)] = 1;

    const dirs = [-1, 0, 1, 0, -1];

    while (head < tail) {
        const r = queue[head++];
        const c = queue[head++];
        const e = queue[head++];
        const mask = queue[head++];
        const moves = queue[head++];

        if (mask === targetMask) {
            return moves;
        }

        if (e === 0) continue; // Cannot move without energy

        for (let i = 0; i < 4; i++) {
            const nr = r + dirs[i];
            const nc = c + dirs[i + 1];

            if (nr >= 0 && nr < m && nc >= 0 && nc < n) {
                const cell = classroom[nr][nc];
                if (cell === 'X') continue;

                let nextEnergy = cell === 'R' ? energy : e - 1;
                let nextMask = mask;

                if (cell === 'L') {
                    nextMask |= (1 << litterId[nr][nc]);
                }

                const visIdx = getVisitedIndex(nr, nc, nextEnergy, nextMask);

                if (!visited[visIdx]) {
                    visited[visIdx] = 1;
                    queue[tail++] = nr;
                    queue[tail++] = nc;
                    queue[tail++] = nextEnergy;
                    queue[tail++] = nextMask;
                    queue[tail++] = moves + 1;
                }
            }
        }
    }

    return -1;
};