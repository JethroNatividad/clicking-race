"use client";

import React, { createContext, useState } from "react";

export type GameState = "menu" | "configure" | "playing" | "finished";

export type Player = {
  id: string;
  key: string | null;
  position: number;
  name: string;
  color: string;
};

type GameContextType = {
  raceLength: number;
  gameState: GameState;
  setGameState: (state: GameState) => void;
  winner: Player | null;
  setWinner: (player: Player | null) => void;
  players: Player[];
  setPlayers: (players: Player[]) => void;
  handleMovePlayer: (player: Player) => void;
  resetWinner: () => void;
  setRaceLength: (length: number) => void;
};

const GameContext = createContext<GameContextType>({
  raceLength: 20,
  setGameState: () => {},
  gameState: "menu",
  winner: null,
  players: [],
  setWinner: () => {},
  setPlayers: () => {},
  handleMovePlayer: () => {},
  resetWinner: () => {},
  setRaceLength: () => {},
});

export const GameProvider = ({ children }: React.PropsWithChildren) => {
  const [raceLength, setRaceLength] = useState(20);
  const [gameState, setGameState] = useState<GameState>("menu");
  const [winner, setWinner] = useState<Player | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);

  const handleMovePlayer = (player: Player) => {
    player.position += 1;
    setPlayers(players.map((p) => (p.id === player.id ? { ...player } : p)));
  };

  const resetWinner = () => {
    setWinner(null);
    setPlayers((players) =>
      players.map((player) => ({ ...player, position: 0 }))
    );
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        players,
        setPlayers,
        raceLength,
        winner,
        setWinner,
        handleMovePlayer,
        resetWinner,
        setRaceLength,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;

export const useGame = () => {
  const context = React.useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
