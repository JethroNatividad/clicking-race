import { GameState, Player } from "@/app/page";
import React, { useEffect, useState } from "react";
import Racetrack from "./Racetrack";

type Props = {
  gameState: GameState;
  setGameState: (state: GameState) => void;
  players: Player[];
  raceLength: number;
  setWinner: (player: Player) => void;
  handleMovePlayer: (player: Player) => void;
};

const Playing = ({
  players,
  raceLength,
  handleMovePlayer,
  gameState,
  setWinner,
  setGameState,
}: Props) => {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (gameState === "playing" && countdown > -1) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [gameState, countdown]);

  useEffect(() => {
    if (gameState === "playing") {
      const winner = players.find((player) => player.position >= raceLength);
      if (winner) {
        setWinner(winner);
        setGameState("finished");
      }
    }
  }, [gameState, players]);

  return (
    <main className="h-screen">
      <div
        className={`absolute top-0 left-0 w-full h-screen flex items-center justify-center ${
          countdown < 0 && "hidden"
        }`}
      >
        <h2 className="text-7xl">{countdown > 0 ? countdown : "Go!"}</h2>
      </div>
      <div className={`grid grid-rows-${players.length} h-full`}>
        {players.map((player) => (
          <Racetrack
            started={countdown < 1}
            handleMovePlayer={handleMovePlayer}
            key={player.id}
            player={player}
            raceLength={raceLength}
          />
        ))}
      </div>
    </main>
  );
};

export default Playing;
