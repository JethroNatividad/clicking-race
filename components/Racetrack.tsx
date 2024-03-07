"use client";

import { Player, useGame } from "@/store/game";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  player: Player;
  started: boolean;
};

const Racetrack = ({ player, started }: Props) => {
  const { raceLength, handleMovePlayer } = useGame();
  const [racetrackWidth, setRacetrackWidth] = useState(0);
  const racetrackRef = useRef(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === player.key && !event.repeat) {
      handleMovePlayer(player);
    }
  };

  useEffect(() => {
    if (started) {
      // If game is in play state
      // Listen for keydown events
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [started, player, handleMovePlayer]);

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
  }, []);

  return (
    <div ref={racetrackRef} className="border-black border-t relative">
      <div>Player: {player.id}</div>
      <div>Player Position: {player.position}</div>
      <div
        className="absolute top-1/2"
        style={{
          left: `${(player.position / raceLength) * racetrackWidth}px`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
          viewBox="0 0 24 24"
          fill={player.color}
        >
          <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2   l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5   s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z" />
          <rect fill="none" width="24" height="24" />
        </svg>
      </div>
    </div>
  );
};

export default Racetrack;
