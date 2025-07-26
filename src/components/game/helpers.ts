import { COLS, ROWS, type GameBoard, type Player } from "./constants";

export const createEmptyBoard = (): GameBoard =>
  Array(ROWS)
    .fill(null)
    .map(() => Array(COLS).fill(null));

export const checkWinner = (
  board: GameBoard,
  row: number,
  col: number,
  player: Player
): boolean => {
  if (!player) return false;

  let count = 1;
  for (let c = col - 1; c >= 0 && board[row][c] === player; c--) count++;
  for (let c = col + 1; c < COLS && board[row][c] === player; c++) count++;
  if (count >= 4) return true;

  count = 1;
  for (let r = row + 1; r < ROWS && board[r][col] === player; r++) count++;
  if (count >= 4) return true;

  return false;
};

export const checkForDraw = (gameBoard: GameBoard) => {
  return gameBoard.every((row) => row.every((cell) => cell !== null));
};
