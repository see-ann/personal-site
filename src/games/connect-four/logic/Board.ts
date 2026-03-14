import type { CellKey, DiscColor } from "./types";

export function cellKey(row: number, col: number): CellKey {
	return `${row},${col}`;
}

function countContig(
	grid: Map<CellKey, DiscColor>,
	row: number,
	col: number,
	dr: number,
	dc: number,
	color: DiscColor,
): number {
	let count = 0;
	let r = row + dr;
	let c = col + dc;

	while (grid.get(cellKey(r, c)) === color) {
		count++;
		r += dr;
		c += dc;
	}
	return count;
}

export function checkWin(
	grid: Map<CellKey, DiscColor>,
	row: number,
	col: number,
	color: DiscColor,
	k: number,
): boolean {
	const directions: [number, number][] = [
		[0, 1],
		[1, 0],
		[1, 1],
		[1, -1],
	];

	for (const [dr, dc] of directions) {
		const count =
			1 +
			countContig(grid, row, col, dr, dc, color) +
			countContig(grid, row, col, -dr, -dc, color);

		if (count >= k) return true;
	}

	return false;
}
