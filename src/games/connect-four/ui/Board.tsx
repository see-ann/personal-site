import { cellKey } from "../logic/board";
import type { FiniteBoard } from "../logic/types";
import Cell from "./Cell";

type BoardProps = {
	board: FiniteBoard;
	onColumnClick: (col: number) => void;
	gameOver: boolean;
};

export default function Board({ board, onColumnClick, gameOver }: BoardProps) {
	const cells = [];

	for (let row = 0; row < board.rows; row++) {
		for (let col = 0; col < board.cols; col++) {
			cells.push(
				<button
					key={`${row}-${col}`}
					type="button"
					disabled={gameOver}
					onClick={() => onColumnClick(col)}
					className="!bg-transparent !border-none !shadow-none !outline-none !p-0 cursor-pointer"
				>
					<Cell color={board.grid.get(cellKey(row, col)) ?? null} />
				</button>,
			);
		}
	}

	return (
		<div className="p-3 border-[3px] border-[#1a1a1a] grid grid-cols-7 gap-2 bg-[#f5edd6] shadow-[5px_5px_0_#1a1a1a]">
			{cells}
		</div>
	);
}
