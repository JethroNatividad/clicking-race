import React, { useState } from "react";

const AddPlayer = () => {
  const [isWaitingKeypress, setIsWaitingKeypress] = useState(false);
  const [key, setKey] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  // Get key
  // Get name
  // Choose car color
  // Add player
  return (
    <div className="border border-black rounded-md w-full max-w-lg p-5 space-y-5">
      <h1 className="text-2xl font-bold text-center">Add Player</h1>
      <label htmlFor="name" className="flex flex-col">
        Player Name:
        <input
          className="border-black border rounded-md outline-none p-2"
          name="name"
          type="text"
        />
      </label>

      <label className="flex">
        Keybind:
        <button className="w-fit ml-2">{key ? key : "Click to map key"}</button>
      </label>

      <label htmlFor="color" className="flex">
        Car Color:
        <input
          className="border-black border rounded-md outline-none cursor-pointer ml-2"
          name="color"
          type="color"
        />
      </label>

      <div className="flex justify-end space-x-5">
        <button className="px-5 py-3 border border-black rounded-md hover:bg-zinc-100">
          Cancel
        </button>

        <button className="px-5 py-3 border border-black rounded-md hover:bg-zinc-100">
          Add player
        </button>
      </div>
    </div>
  );
};

export default AddPlayer;
