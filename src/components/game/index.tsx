import { ActionButtons, Grid, PlayerTitle } from "./components";
import { useGame } from "./hooks/useGame";

export const Game = () => {
  const {
    board,
    currentPlayer,
    winner,
    isDraw,
    playerTurn,
    resetGame,
    isColumnFull,
    isBoardEmpty,
  } = useGame();

  return (
    <div className="flex flex-col items-center gap-6 p-6 min-h-screen text-white">
      <PlayerTitle
        winner={winner}
        currentPlayer={currentPlayer}
        isDraw={isDraw}
      />

      <div className="border border-white p-6 rounded-lg">
        <ActionButtons
          playerTurn={playerTurn}
          winner={winner}
          isColumnFull={isColumnFull}
        />
        <Grid board={board} />
      </div>

      <button
        onClick={resetGame}
        disabled={isBoardEmpty}
        className="bg-gray-800 hover:bg-gray-700 border border-white px-6 py-3 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
        New Game
      </button>
    </div>
  );
};
