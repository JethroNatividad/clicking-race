import { useGame } from "@/store/game";
import React from "react";
import HeroImg from "@/assets/images/hero.png";
import Image from "next/image";
import Header from "./Header";

const Menu = () => {
  const { setGameState } = useGame();

  const handlePlayGame = () => {
    setGameState("configure");
  };

  return (
    <main className="h-screen w-full flex items-center justify-center relative text-slate-300">
      <Header title="Clicking Crazy" />
      <section className="relative h-screen w-full flex items-center justify-center">
        <Image
          className="absolute top-0 left-0 h-full object-cover w-full"
          src={HeroImg}
          alt="hero"
        />
        <div className="z-10 text-center space-y-5 px-5">
          <h1 className="text-4xl">The Craziest Clicking Race Game</h1>
          <p>Destroy your opponents by clicking faster than them.</p>
          <button
            onClick={handlePlayGame}
            className="px-5 py-3 border-slate-600 border rounded-md text-xl font-bold bg-slate-800 hover:bg-slate-700"
          >
            Play Game
          </button>
        </div>
      </section>
    </main>
  );
};

export default Menu;
