function islandPerimeter(grid: number[][]): number {
    let perimeter = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                // Check all 4 directions: Top, Bottom, Left, Right
                if (i === 0 || grid[i - 1][j] === 0) perimeter++; // Top boundary/water
                if (i === rows - 1 || grid[i + 1][j] === 0) perimeter++; // Bottom boundary/water
                if (j === 0 || grid[i][j - 1] === 0) perimeter++; // Left boundary/water
                if (j === cols - 1 || grid[i][j + 1] === 0) perimeter++; // Right boundary/water
            }
        }
    }

    return perimeter;
}