import { useGame } from "@/store/game";
import React, { useState } from "react";
import ConfigureCar from "./ConfigureCar";
import AddPlayerButton from "./AddPlayerButton";
import AddPlayer from "./AddPlayer";

const Configure = () => {
  const { players, setGameState } = useGame();
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);

  const handleOpenAddPlayer = () => {
    setIsAddingPlayer(true);
  };

  const handleCloseAddPlayer = () => {
    setIsAddingPlayer(false);
  };

  const handleStartGame = () => {
    setGameState("playing");
  };

  return (
    <main className="h-screen p-10 flex flex-col">
      <div className="grid grid-cols-6 h-24 gap-3 lg:h-32 xl:h-40 lg:gap-5 xl:gap-10">
        {players.map((player) => (
          <ConfigureCar key={player.id} player={player} />
        ))}

        {players.length < 6 && (
          <AddPlayerButton handleOpenAddPlayer={handleOpenAddPlayer} />
        )}
      </div>
      <div className="w-full flex-1 flex items-center justify-center">
        {isAddingPlayer && (
          <AddPlayer handleCloseAddPlayer={handleCloseAddPlayer} />
        )}
        {players.length < 2 && !isAddingPlayer && (
          <p className="text-red-500 text-center">
            You need at least 2 players to start the game
          </p>
        )}

        {players.length >= 2 && !isAddingPlayer && (
          <button
            className="px-5 py-3 border border-black rounded-md hover:bg-zinc-100"
            onClick={handleStartGame}
          >
            Start Game
          </button>
        )}
      </div>
    </main>
  );
};

export default Configure;
