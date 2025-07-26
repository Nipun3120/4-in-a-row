import type { Player } from "../constants";
import { PlayerColor } from "../constants/enums";

interface PlayerTitleProps {
  winner: Player | null;
  currentPlayer: Player;
  isDraw?: boolean;
}

const TITLE = {
  DRAW: "No one wins, restart a new game",
  WIN: "wins :)",
  TURN: "to play",
};

export const PlayerTitle = ({
  winner,
  currentPlayer,
  isDraw,
}: PlayerTitleProps) => {
  return (
    <div className="text-center w-full text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 md:mb-8">
        4 in a Row
      </h1>

      {winner ? (
        <div className="bg-gray-200 text-gray-900 text-lg md:text-xl px-6 py-2 md:py-3 rounded-lg font-semibold inline-block">
          <span
            className={`font-bold ${
              winner === PlayerColor.RED ? "text-red-600" : "text-blue-600"
            }`}>
            {winner.toUpperCase()}
          </span>
          <span className="ml-2">{TITLE.WIN}</span>
        </div>
      ) : isDraw ? (
        <div className="bg-gray-200 text-gray-900 text-lg md:text-xl px-6 py-2 md:py-3 rounded-lg font-semibold inline-block">
          <span className="font-bold">{TITLE.DRAW}</span>
        </div>
      ) : (
        <div className="bg-gray-200 text-gray-900 text-lg md:text-xl px-6 py-2 md:py-3 rounded-lg font-semibold inline-block">
          <span
            className={`font-bold ${
              currentPlayer === "red" ? "text-red-600" : "text-blue-600"
            }`}>
            {currentPlayer?.toUpperCase()}
          </span>
          <span className="ml-2">{TITLE.TURN}</span>
        </div>
      )}
    </div>
  );
};
