import { PlayerColor } from "../constants/enums";
import { type GameBoard } from "../constants";

interface GridProps {
  board: GameBoard;
}

export const Grid = ({ board }: GridProps) => {
  return (
    <div className="grid grid-cols-7 gap-2">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className="w-16 h-16 rounded-md bg-white border-2 border-gray-300 flex items-center justify-center">
            {cell && (
              <div
                className={`w-12 h-12 rounded-md ${
                  cell === PlayerColor.RED ? "bg-red-600" : "bg-blue-600"
                }`}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
};
