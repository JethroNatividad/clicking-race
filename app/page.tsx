"use client";

import Playing from "@/components/Playing";
import { useGame } from "@/store/game";

const Home = () => {
  const { gameState, handleStart, winner, handleRestart } = useGame();

  if (gameState === "menu") {
    return (
      <div>
        <h1>Clicking Crazy</h1>
        <button
          className="px-5 py-3 bg-blue-400 rounded-md"
          onClick={handleStart}
        >
          Start
        </button>
      </div>
    );
  }

  if (gameState === "playing") {
    return <Playing />;
  }

  if (gameState === "finished") {
    return (
      <div>
        <h1>Finished</h1>
        <h2>{winner?.id} wins!</h2>
        <button onClick={handleRestart}>Play again</button>
      </div>
    );
  }
};

export default Home;
