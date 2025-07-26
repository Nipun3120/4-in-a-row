export const PlayerColor = {
  RED: "red",
  BLUE: "blue",
} as const;

export type PlayerColorType = (typeof PlayerColor)[keyof typeof PlayerColor];
