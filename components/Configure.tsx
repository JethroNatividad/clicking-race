import { useGame } from "@/store/game";
import React, { useState } from "react";
import ConfigureCar from "./ConfigureCar";
import AddPlayer from "./AddPlayer";

const Configure = () => {
  const { players } = useGame();
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);

  const handleOpenAddPlayer = () => {
    setIsAddingPlayer(true);
  };

  const handleCloseAddPlayer = () => {
    setIsAddingPlayer(false);
  };

  return (
    <main className="h-screen p-10 flex flex-col">
      <div className="grid grid-cols-6 h-24 gap-3 lg:h-32 xl:h-40 lg:gap-5 xl:gap-10">
        {players.map((player) => (
          <ConfigureCar key={player.id} player={player} />
        ))}

        {players.length < 6 && (
          <AddPlayer
            handleOpenAddPlayer={handleOpenAddPlayer}
            handleCloseAddPlayer={handleCloseAddPlayer}
          />
        )}
      </div>
      <div className="w-full flex-1">
        {isAddingPlayer && <div>Get player details</div>}
        {/* Bind */}
        {/* Start button */}
      </div>
    </main>
  );
};

export default Configure;
