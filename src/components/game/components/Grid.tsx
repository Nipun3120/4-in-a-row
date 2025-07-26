import { PlayerColor } from "../constants/enums";
import { type GameBoard } from "../constants";

interface GridProps {
  board: GameBoard;
}

export const Grid = ({ board }: GridProps) => {
  return (
    <div className="grid grid-cols-7 gap-2 md:gap-3 w-full">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`aspect-square w-full h-full rounded-xl md:rounded-lg bg-white border border-gray-300 flex items-center justify-center`}>
            {cell && (
              <div
                className={`w-full h-full rounded-xl md:rounded-lg ${
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
