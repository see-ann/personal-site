import { checkWin } from "./board";
import { createBoard, isGridFull, placeDisc } from "./finiteBoard";
import type { FiniteBoard, GameState, Player } from "./types";

export function createGame(player1: Player, player2: Player): GameState {
	return {
		board: createBoard(),
		mode: "FINITE",
		player1,
		player2,
		currentPlayer: player1,
		status: "IN_PROGRESS",
		winner: null,
	};
}

export function makeMove(state: GameState, col: number): GameState {
	if (state.status !== "IN_PROGRESS") return state;

	const result = placeDisc(
		state.board as FiniteBoard,
		col,
		state.currentPlayer.color,
	);
	if (result === null) return state;

	const { board, row } = result;

	if (checkWin(board.grid, row, col, state.currentPlayer.color, board.k)) {
		return { ...state, board, status: "WON", winner: state.currentPlayer };
	}

	if (isGridFull(board)) {
		return { ...state, board, status: "DRAW" };
	}

	const nextPlayer =
		state.currentPlayer.id === state.player1.id ? state.player2 : state.player1;

	return { ...state, board, currentPlayer: nextPlayer };
}
