export type DiscColor = "RED" | "YELLOW";

export type Cell = DiscColor | null;

export type CellKey = `${number},${number}`;

export type BoardMode = "FINITE" | "INFINITE";

export type GameStatus = "IN_PROGRESS" | "WON" | "DRAW";

export type Player = {
	id: number;
	name: string;
	color: DiscColor;
	kind: "human" | "ai";
};

export type Board = {
	grid: Map<CellKey, DiscColor>;
	k: number;
};

export type FiniteBoard = Board & {
	rows: number;
	cols: number;
};

export type GameState = {
	board: FiniteBoard;
	mode: BoardMode;
	player1: Player;
	player2: Player;
	currentPlayer: Player;
	status: GameStatus;
	winner: Player | null;
};
