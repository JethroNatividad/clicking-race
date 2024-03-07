import { useGame } from "@/store/game";
import React from "react";

const Menu = () => {
  const { handleStart } = useGame();
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
};

export default Menu;
