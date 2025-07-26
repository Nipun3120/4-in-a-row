import { useCallback, useMemo, useState } from "react";
import { PlayerColor } from "../constants/enums";
import { ROWS, type GameBoard, type Player } from "../constants";
import { checkForDraw, checkWinner, createEmptyBoard } from "../helpers";

export const useGame = () => {
  const [board, setBoard] = useState<GameBoard>(createEmptyBoard());
  const [currentPlayer, setCurrentPlayer] = useState<Player>("red");
  const [winner, setWinner] = useState<Player>(null);
  const [isDraw, setIsDraw] = useState<boolean>(false);

  const playerTurn = useCallback(
    (col: number) => {
      if (winner || isDraw) return;

      let targetRow = -1;
      for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row][col] === null) {
          targetRow = row;
          break;
        }
      }

      if (targetRow === -1) return;

      setBoard((prevBoard) => {
        const newBoard = prevBoard.map((row) => [...row]);
        newBoard[targetRow][col] = currentPlayer;

        if (checkWinner(newBoard, targetRow, col, currentPlayer)) {
          setWinner(currentPlayer);
        } else {
          const boardIsFull = checkForDraw(newBoard);
          if (boardIsFull) {
            setIsDraw(true);
          } else {
            setCurrentPlayer(
              currentPlayer === PlayerColor.RED
                ? PlayerColor.BLUE
                : PlayerColor.RED
            );
          }
        }

        return newBoard;
      });
    },
    [board, currentPlayer, winner, isDraw]
  );

  const resetGame = useCallback(() => {
    setBoard(createEmptyBoard());
    setCurrentPlayer(PlayerColor.RED);
    setWinner(null);
    setIsDraw(false);
  }, []);

  const isColumnFull = useCallback(
    (col: number) => board[0][col] !== null,
    [board]
  );

  const isBoardEmpty = useMemo(() => {
    return board.every((row) => row.every((cell) => cell === null));
  }, [board]);

  return {
    board,
    currentPlayer,
    winner,
    isDraw,
    playerTurn,
    resetGame,
    isColumnFull,
    isBoardEmpty,
  };
};
