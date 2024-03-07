import { useGame } from "@/store/game";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

type Props = {
  handleCloseAddPlayer: () => void;
};

const AddPlayer = ({ handleCloseAddPlayer }: Props) => {
  const { setPlayers, players } = useGame();
  const [isWaitingKeypress, setIsWaitingKeypress] = useState(false);
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000");

  const handleAddPlayer = () => {
    if (!name || !key || !color) {
      return;
    }
    const player = {
      id: v4(),
      name,
      key,
      color,
      position: 0,
    };
    setPlayers([...players, player]);
    handleCloseAddPlayer();
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  useEffect(() => {
    if (isWaitingKeypress) {
      const handleKeyPress = (event: KeyboardEvent) => {
        // Check if key is already in use
        const isKeyInUse = players.some((player) => player.key === event.key);
        if (!isKeyInUse) {
          setKey(event.key);
          setIsWaitingKeypress(false);
        }
      };

      window.addEventListener("keydown", handleKeyPress);

      return () => {
        window.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [isWaitingKeypress, setKey]);

  const handleMapKeyClick = () => {
    setIsWaitingKeypress(true);
  };

  return (
    <div className="border border-slate-600 rounded-md w-full max-w-lg p-5 space-y-5">
      <h1 className="text-2xl font-bold text-center">Add Player</h1>
      <label htmlFor="name" className="flex flex-col">
        Player Name:
        <input
          onChange={handleNameChange}
          className="border-slate-600 bg-inherit border rounded-md outline-none p-2"
          name="name"
          type="text"
        />
      </label>

      <div className="flex">
        Keybind:
        <button onClick={handleMapKeyClick} className="w-fit ml-2 outline-none">
          {key ? key : "Click to map key"}
        </button>
      </div>

      <label htmlFor="color" className="flex">
        Car Color:
        <input
          className="border-slate-600 border rounded-md outline-none cursor-pointer ml-2"
          name="color"
          type="color"
          onChange={handleColorChange}
        />
      </label>

      <div className="flex justify-end space-x-5">
        <button
          onClick={handleCloseAddPlayer}
          className="px-5 py-3 border rounded-md border-slate-600 bg-slate-800 hover:bg-slate-700"
        >
          Cancel
        </button>

        <button
          onClick={handleAddPlayer}
          className="px-5 py-3 border rounded-md border-slate-600 bg-slate-800 hover:bg-slate-700"
        >
          Add player
        </button>
      </div>

      {isWaitingKeypress && (
        <div className="absolute bottom-0 left-0 w-full h-full flex justify-center items-center bg-slate-800 bg-opacity-40">
          <p className="text-white text-2xl text-center">Press any key</p>
        </div>
      )}
    </div>
  );
};

export default AddPlayer;
