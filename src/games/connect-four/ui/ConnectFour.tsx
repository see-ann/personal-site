import { useState } from "react";
import { createGame, makeMove } from "../logic/game";
import type { Player } from "../logic/types";
import Board from "./Board";

const player1: Player = {
	id: 1,
	name: "Player 1",
	color: "RED",
	kind: "human",
};
const player2: Player = {
	id: 2,
	name: "Player 2",
	color: "YELLOW",
	kind: "human",
};

export default function ConnectFour() {
	const [gameState, setGameState] = useState(createGame(player1, player2));

	function handleColumnClick(col: number) {
		setGameState(makeMove(gameState, col));
	}

	function handleReset() {
		setGameState(createGame(player1, player2));
	}

	function statusMessage() {
		if (gameState.status === "WON") return `${gameState.winner?.name} wins!`;
		if (gameState.status === "DRAW") return "It's a draw!";
		return `${gameState.currentPlayer.name}'s turn`;
	}

	return (
		<div className="card">
			<div className="card-body">
				<h4 className="card-title">Connect 4</h4>

				{gameState.status === "IN_PROGRESS" ? (
					<span className="badge">{statusMessage()}</span>
				) : (
					<div
						className={`alert ${gameState.status === "WON" ? "alert-success" : ""}`}
					>
						{statusMessage()}
					</div>
				)}

				<div className="margin-top">
					<Board
						board={gameState.board}
						onColumnClick={handleColumnClick}
						gameOver={gameState.status !== "IN_PROGRESS"}
					/>
				</div>

				<div className="margin-top">
					<button type="button" onClick={handleReset}>
						Reset game
					</button>
				</div>
			</div>
		</div>
	);
}
