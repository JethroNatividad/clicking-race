"use client";

import { Player } from "@/store/game";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  player: Player;
  raceLength: number;
  handleMovePlayer: (player: Player) => void;
  started: boolean;
};

const Racetrack = ({
  player,
  raceLength,
  started,
  handleMovePlayer,
}: Props) => {
  const [racetrackWidth, setRacetrackWidth] = useState(0);
  const racetrackRef = useRef(null);

  useEffect(() => {
    if (started) {
      // If game is in play state
      // Listen for keydown events
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === player.key) {
          handleMovePlayer(player);
        }
      };

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
        Player {player.id}
      </div>
    </div>
  );
};

export default Racetrack;
