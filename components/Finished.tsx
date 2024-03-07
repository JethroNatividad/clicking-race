import { useGame } from "@/store/game";
import React from "react";

const Finished = () => {
  const { winner, handleRestart, setGameState } = useGame();
  const handleBackToMenu = () => {
    setGameState("menu");
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col space-y-5">
        <div className="relative -mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4 0 32 32"
            version="1.1"
            className="h-32 w-32 fill-yellow-500 absolute bottom-24 left-[34px]"
          >
            <path d="M12 10.938c-1.375 0-2.5-1.125-2.5-2.5 0-1.406 1.125-2.5 2.5-2.5s2.5 1.094 2.5 2.5c0 1.375-1.125 2.5-2.5 2.5zM2.031 9.906c1.094 0 1.969 0.906 1.969 2 0 1.125-0.875 2-1.969 2-1.125 0-2.031-0.875-2.031-2 0-1.094 0.906-2 2.031-2zM22.031 9.906c1.094 0 1.969 0.906 1.969 2 0 1.125-0.875 2-1.969 2-1.125 0-2.031-0.875-2.031-2 0-1.094 0.906-2 2.031-2zM4.219 23.719l-1.656-9.063c0.5-0.094 0.969-0.375 1.344-0.688 1.031 0.938 2.344 1.844 3.594 1.844 1.5 0 2.719-2.313 3.563-4.25 0.281 0.094 0.625 0.188 0.938 0.188s0.656-0.094 0.938-0.188c0.844 1.938 2.063 4.25 3.563 4.25 1.25 0 2.563-0.906 3.594-1.844 0.375 0.313 0.844 0.594 1.344 0.688l-1.656 9.063h-15.563zM3.875 24.5h16.25v1.531h-16.25v-1.531z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-40 w-40 mx-auto"
            viewBox="0 0 24 24"
            fill={winner?.color}
          >
            <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2   l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5   s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z" />
            <rect fill="none" width="24" height="24" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold">{winner?.name} wins</h1>
        <button
          className="px-5 py-3 border border-black rounded-md hover:bg-zinc-100"
          onClick={handleRestart}
        >
          Play Again
        </button>
        <button
          className="px-5 py-3 border border-black rounded-md hover:bg-zinc-100"
          onClick={handleBackToMenu}
        >
          Back to Menu
        </button>
      </div>
    </main>
  );
};

export default Finished;
