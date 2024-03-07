"use client";

import Configure from "@/components/Configure";
import Finished from "@/components/Finished";
import Menu from "@/components/Menu";
import Playing from "@/components/Playing";
import { useGame } from "@/store/game";

const Home = () => {
  const { gameState } = useGame();

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
    return <Finished />;
  }
};

export default Home;
