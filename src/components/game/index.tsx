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
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-900 py-4">
      <div className="flex flex-col items-center w-full max-w-md md:max-w-2xl px-4">
        <PlayerTitle
          winner={winner}
          currentPlayer={currentPlayer}
          isDraw={isDraw}
        />

        <div className="border border-white rounded-lg p-4 md:p-6 w-full my-6">
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
          className="bg-gray-800 hover:bg-gray-700 border border-white px-8 py-3 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-2 w-48 md:w-64 md:text-lg">
          New Game
        </button>
      </div>
    </div>
  );
};
