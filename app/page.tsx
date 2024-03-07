"use client";

import Configure from "@/components/Configure";
import Menu from "@/components/Menu";
import Playing from "@/components/Playing";
import { useGame } from "@/store/game";

const Home = () => {
  const { gameState, winner, handleRestart } = useGame();

  if (gameState === "menu") {
    return <Menu />;
  }

  if (gameState === "configure") {
    return <Configure />;
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
