import { useGame } from "@/store/game";
import React, { useEffect, useState } from "react";
import Racetrack from "./Racetrack";
import FinishLine from "@/assets/images/finish-line.png";
import Image from "next/image";

const Playing = () => {
  const { gameState, players, raceLength, setWinner, setGameState } = useGame();

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
          <Racetrack key={player.id} started={countdown < 1} player={player} />
        ))}
      </div>
      <Image
        src={FinishLine}
        alt="finish line"
        className="absolute top-0 right-0 h-full object-cover z-0 border-x-2 border-black"
      />
    </main>
  );
};

export default Playing;
