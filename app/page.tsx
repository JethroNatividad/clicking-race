"use client";

import Playing from "@/components/Playing";
import { GameState, Player } from "@/store/game";
import { useState } from "react";

const Home = () => {
  const raceLength = 20;
  const [gameState, setGameState] = useState<GameState>("menu");
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
  };

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
      <Playing
        gameState={gameState}
        handleMovePlayer={handleMovePlayer}
        players={players}
        raceLength={raceLength}
        setGameState={setGameState}
        setWinner={setWinner}
      />
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
