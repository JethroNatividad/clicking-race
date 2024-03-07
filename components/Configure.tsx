import { useGame } from "@/store/game";
import React, { useState } from "react";
import ConfigureCar from "./ConfigureCar";
import AddPlayerButton from "./AddPlayerButton";
import AddPlayer from "./AddPlayer";
import Background from "@/assets/images/bg-config.webp";
import Image from "next/image";

const Configure = () => {
  const { players, setGameState, setRaceLength } = useGame();
  const [isAddingPlayer, setIsAddingPlayer] = useState(false);

  const handleOpenAddPlayer = () => {
    setIsAddingPlayer(true);
  };

  const handleCloseAddPlayer = () => {
    setIsAddingPlayer(false);
  };

  const handleStartShortGame = () => {
    setRaceLength(20);
    setGameState("playing");
  };

  const handleStartMediumGame = () => {
    setRaceLength(50);
    setGameState("playing");
  };

  const handleStartLongGame = () => {
    setRaceLength(100);
    setGameState("playing");
  };

  return (
    <main className="h-screen p-10 flex flex-col relative">
      <div className="grid grid-cols-6 h-24 gap-3 lg:h-32 xl:h-40 lg:gap-5 xl:gap-10 z-10">
        {players.map((player) => (
          <ConfigureCar key={player.id} player={player} />
        ))}

        {players.length < 6 && (
          <AddPlayerButton handleOpenAddPlayer={handleOpenAddPlayer} />
        )}
      </div>
      <div className="w-full flex-1 flex items-center justify-center z-10">
        {isAddingPlayer && (
          <AddPlayer handleCloseAddPlayer={handleCloseAddPlayer} />
        )}
        {players.length < 2 && !isAddingPlayer && (
          <p className="text-3xl text-center">
            {players.length === 0
              ? "Please add a player"
              : "You need at least 2 players to start the game"}
          </p>
        )}

        {players.length >= 2 && !isAddingPlayer && (
          <div className="flex flex-col space-y-5">
            <button
              className="px-5 py-3 border text-xl border-black rounded-md hover:bg-black hover:text-white transition-all"
              onClick={handleStartShortGame}
            >
              Short Race
            </button>
            <button
              className="px-5 py-3 border text-xl border-black rounded-md hover:bg-black hover:text-white transition-all"
              onClick={handleStartMediumGame}
            >
              Medium Race
            </button>
            <button
              className="px-5 py-3 border text-xl border-black rounded-md hover:bg-black hover:text-white transition-all"
              onClick={handleStartLongGame}
            >
              Long Race
            </button>
          </div>
        )}
      </div>
      <Image
        src={Background}
        alt="background"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
    </main>
  );
};

export default Configure;
