import { Player, useGame } from "@/store/game";
import React from "react";

type Props = {
  player: Player;
};

const ConfigureCar = ({ player }: Props) => {
  const { setPlayers, players } = useGame();
  const handleRemovePlayer = () => {
    setPlayers(players.filter((p) => p.id !== player.id));
  };

  return (
    <div
      onClick={handleRemovePlayer}
      className="w-full h-full border border-black rounded-md flex flex-col justify-between p-3 relative group overflow-hidden cursor-pointer bg-white shadow-md"
    >
      <p className="text-2xl">{player.name}</p>
      <div className="w-full flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 lg:h-16 lg:w-16 xl:h-20 xl:w-20"
          viewBox="0 0 24 24"
          fill={player.color}
        >
          <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2   l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5   s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z" />
          <rect fill="none" width="24" height="24" />
        </svg>
      </div>
      <p className="text-sm text-zinc-700">Keybind: {player.key}</p>

      <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 flex justify-center items-center opacity-0 bg-zinc-100 transition-all">
        <p>Remove Player</p>
      </div>
    </div>
  );
};

export default ConfigureCar;
