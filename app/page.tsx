"use client";

import Racetrack from "@/components/Racetrack";
import { useEffect, useState } from "react";

export type Player = {
  id: string;
  key: string | null;
  position: number;
};

type GameState = "menu" | "playing" | "finished";

const Home = () => {
  const raceLength = 20;
  const [gameState, setGameState] = useState<GameState>("menu");
  const [winner, setWinner] = useState<Player | null>(null);
  const [countdown, setCountdown] = useState(3);
  const [players, setPlayers] = useState<Player[]>([
    {
      id: "1",
      key: "q",
      position: 0,
    },
    {
      id: "2",
      key: "e",
      position: 0,
    },
    {
      id: "3",
      key: "t",
      position: 0,
    },
    {
      id: "4",
      key: "u",
      position: 0,
    },
  ]);

  useEffect(() => {
    if (gameState === "playing") {
      const winner = players.find((player) => player.position >= raceLength);
      if (winner) {
        setWinner(winner);
        setGameState("finished");
      }
    }
  }, [gameState, players]);

  const handleMovePlayer = (player: Player) => {
    player.position += 1;
    setPlayers(players.map((p) => (p.id === player.id ? { ...player } : p)));
  };

  const handleStart = () => {
    setGameState("playing");
  };

  const handleRestart = () => {
    setGameState("menu");
    setWinner(null);
    setPlayers((players) =>
      players.map((player) => ({ ...player, position: 0 }))
    );
    setCountdown(3);
  };

  useEffect(() => {
    if (gameState === "playing" && countdown > -1) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [gameState, countdown]);

  if (gameState === "menu") {
    return (
      <div>
        <h1>Clicking Crazy</h1>
        <button
          className="px-5 py-3 bg-blue-400 rounded-md"
          onClick={handleStart}
        >
          Start
        </button>
      </div>
    );
  }

  if (gameState === "playing") {
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
  }

  if (gameState === "finished") {
    return (
      <div>
        <h1>Finished</h1>
        <h2>{winner?.id} wins!</h2>
        <button onClick={handleRestart}>Play again</button>
      </div>
    );
  }
};

export default Home;
