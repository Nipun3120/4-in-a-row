import { COLS, type Player } from "../constants";

interface ActionButtonsProps {
  playerTurn: (col: number) => void;
  winner: Player | null;
  isColumnFull: (col: number) => boolean;
}

export const ActionButtons = ({
  playerTurn,
  winner,
  isColumnFull,
}: ActionButtonsProps) => {
  return (
    <div className="grid grid-cols-7 gap-2 md:gap-3 mb-4 w-full">
      {Array.from({ length: COLS }, (_, col) => (
        <button
          key={col}
          onClick={() => playerTurn(col)}
          disabled={winner !== null || isColumnFull(col)}
          className="h-10 md:h-14 w-full bg-gray-800 hover:bg-gray-600 text-white font-bold cursor-pointer disabled:opacity-50 rounded-md md:rounded-lg flex items-center justify-center border border-white md:text-lg">
          {col + 1}
        </button>
      ))}
    </div>
  );
};
