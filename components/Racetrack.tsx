"use client";

import { Player } from "@/app/page";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  player: Player;
  raceLength: number;
};

const Racetrack = ({ player, raceLength }: Props) => {
  const [racetrackWidth, setRacetrackWidth] = useState(0);
  const racetrackRef = useRef(null);

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
    <div
      ref={racetrackRef}
      className="border-black border-t relative"
      key={player.id}
    >
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