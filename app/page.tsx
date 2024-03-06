"use client";

import { useEffect, useRef, useState } from "react";

type Player = {
  id: string;
  key: string | null;
  position: number;
};

type GameState = "menu" | "playing" | "finished";

const Home = () => {
  const raceLength = 20;
  const racetrackRef = useRef(null);
  const [gameState, setGameState] = useState<GameState>("menu");
  const [racetrackWidth, setRacetrackWidth] = useState(0);
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
    const calculateWidth = () => {
      if (racetrackRef.current) {
        setRacetrackWidth((racetrackRef.current as HTMLElement).offsetWidth);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    console.log(racetrackWidth);
    console.log(racetrackRef.current);

    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, [gameState]);

  useEffect(() => {
    if (gameState === "playing" && countdown > -1) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [gameState, countdown]);

  useEffect(() => {
    if (gameState === "playing" && countdown < 1) {
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
        <div
          ref={racetrackRef}
          className={`grid grid-rows-${players.length} h-full`}
        >
          {players.map((player) => (
            <div className="border-black border-t relative" key={player.id}>
              <div>Player: {player.id}</div>
              <div>Player Position: {player.position}</div>
              <div
                className="absolute top-1/2"
                style={{
                  left: `${(player.position / raceLength) * racetrackWidth}px`,
                }}
              >
                Player {player.id}
              </div>
            </div>
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
