import { cellKey } from "./board";
import type { CellKey, DiscColor, FiniteBoard } from "./types";

export function createBoard(rows = 6, cols = 7, k = 4): FiniteBoard {
	return {
		grid: new Map<CellKey, DiscColor>(),
		rows,
		cols,
		k,
	};
}

export function isColumnFull(board: FiniteBoard, col: number): boolean {
	return board.grid.has(cellKey(0, col));
}

export function isGridFull(board: FiniteBoard): boolean {
	for (let col = 0; col < board.cols; col++) {
		if (!isColumnFull(board, col)) return false;
	}
	return true;
}

export function placeDisc(
	board: FiniteBoard,
	col: number,
	color: DiscColor,
): { board: FiniteBoard; row: number } | null {
	if (col < 0 || col >= board.cols) return null;
	if (isColumnFull(board, col)) return null;

	for (let row = board.rows - 1; row >= 0; row--) {
		if (!board.grid.has(cellKey(row, col))) {
			const newGrid = new Map<CellKey, DiscColor>(board.grid);
			newGrid.set(cellKey(row, col), color);
			return { board: { ...board, grid: newGrid }, row };
		}
	}

	return null;
}
