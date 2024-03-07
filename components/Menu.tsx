import { useGame } from "@/store/game";
import React from "react";

const Menu = () => {
  const { setGameState } = useGame();

  const handlePlayGame = () => {
    setGameState("configure");
  };

  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-3xl font-bold">Clicking Crazy</h1>
        <button
          className="px-5 py-3 border border-black rounded-md"
          onClick={handlePlayGame}
        >
          Play Game
        </button>
      </div>
    </main>
  );
};

export default Menu;
