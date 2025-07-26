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
  TURN: "TURN",
};

export const PlayerTitle = ({
  winner,
  currentPlayer,
  isDraw,
}: PlayerTitleProps) => {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">4 in a Row</h1>

      {winner ? (
        <div className="bg-gray-200 text-gray-900 text-lg px-4 py-2 rounded-lg font-semibold">
          <span
            className={`font-bold ${
              winner === PlayerColor.RED ? "text-red-600" : "text-blue-600"
            }`}>
            {winner.toUpperCase()}
          </span>
          <span className="ml-2">{TITLE.WIN}</span>
        </div>
      ) : isDraw ? (
        <div className="bg-gray-200 text-gray-900 text-lg px-4 py-2 rounded-lg font-semibold">
          <span className="font-bold">{TITLE.DRAW}</span>
        </div>
      ) : (
        <div className="bg-gray-200 text-gray-900 text-lg px-4 py-2 rounded-lg font-semibold">
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
