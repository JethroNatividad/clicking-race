"use client";

import { useEffect, useState } from "react";

type Player = {
  id: string;
  key: string | null;
  position: number;
};

type GameState = "menu" | "playing" | "finished";

const Home = () => {
  const [gameState, setGameState] = useState<GameState>("menu");
  const raceLength = 100;
  const [winner, setWinner] = useState<Player | null>(null);
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

  const handleStart = () => {
    setGameState("playing");
  };

  const handleRestart = () => {
    setGameState("menu");
    setWinner(null);
    setPlayers((players) =>
      players.map((player) => ({ ...player, position: 0 }))
    );
  };

  useEffect(() => {
    if (gameState === "playing") {
      // If game is in play state
      // Listen for keydown events
      const handleKeyDown = (event: KeyboardEvent) => {
        const player = players.find((player) => player.key === event.key);
        if (player) {
          player.position += 1;
          setPlayers([...players]);
        }

        const winningPlayer = players.find(
          (player) => player.position >= raceLength
        );

        if (winningPlayer) {
          setWinner(winningPlayer);
          setGameState("finished");
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [gameState]);

  if (gameState === "menu") {
    return (
      <div>
        <h1>Clicking Crazy</h1>
        <button onClick={handleStart}>Start</button>
      </div>
    );
  }

  if (gameState === "playing") {
    return (
      <div>
        <h1>Playing</h1>
        {players.map((player) => (
          <div key={player.id}>
            <div>{player.id}</div>
            <div>{player.position}</div>
          </div>
        ))}
      </div>
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
