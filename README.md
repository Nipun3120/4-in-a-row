# 4 in a Row Game

## Features

- Classic 4-in-a-row gameplay
- Two players: Red and Blue
- Win detection for horizontal and vertical connections
- Draw detection when the board is full
- Clean, responsive UI

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone [<repository-url>](https://github.com/Nipun3120/4-in-a-row.git)
   cd game
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Running the Game

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:5173` to play the game.

## How to Play

1. Players take turns dropping colored discs into the grid
2. Click on the column buttons at the top to drop your disc
3. The first player to connect four discs of the same color vertically or horizontally wins
4. If the grid fills up with no winner, the game ends in a draw
5. Click "New Game" to restart at any time

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
