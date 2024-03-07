import { Player } from "@/store/game";
import React from "react";

type Props = {
  player: Player;
};

const ConfigureCar = ({ player }: Props) => {
  return (
    <div className="w-full h-full border border-black rounded-md flext flex-col justify-between p-3">
      <p>{player.name}</p>
      <p>Keyboard: {player.key}</p>
    </div>
  );
};

export default ConfigureCar;
