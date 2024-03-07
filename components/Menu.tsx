import { useGame } from "@/store/game";
import React from "react";
import Background from "@/assets/images/bg-menu.png";
import Image from "next/image";

const Menu = () => {
  const { setGameState } = useGame();

  const handlePlayGame = () => {
    setGameState("configure");
  };

  return (
    <main className="h-screen w-full flex items-center justify-center relative">
      <div className="flex flex-col items-center space-y-10 z-10">
        <h1 className="text-7xl font-bold">Clicking Race</h1>
        <button
          className="px-5 py-3 border text-xl border-black rounded-md hover:bg-black hover:text-white transition-all"
          onClick={handlePlayGame}
        >
          Play Game
        </button>
      </div>
      <Image
        src={Background}
        alt="background"
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
    </main>
  );
};

export default Menu;
