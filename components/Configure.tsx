import { useGame } from "@/store/game";
import React from "react";
import ConfigureCar from "./ConfigureCar";

const Configure = () => {
  const { players } = useGame();
  return (
    <main className="p-10">
      <div className="grid grid-cols-6 h-40 gap-10">
        {players.map((player) => (
          <ConfigureCar key={player.id} player={player} />
        ))}
      </div>
      <div>
        {/* Bind */}
        {/* Start button */}
      </div>
    </main>
  );
};

export default Configure;
