import React from "react";

type Props = {
  handleOpenAddPlayer: () => void;
  handleCloseAddPlayer: () => void;
};

const AddPlayer = ({ handleOpenAddPlayer, handleCloseAddPlayer }: Props) => {
  return (
    <div
      onClick={handleOpenAddPlayer}
      className="h-full w-full flex items-center cursor pointer justify-center border border-black rounded-md relative group cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 opacity-100 group-hover:opacity-0 transition-all"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
      <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-100 flex justify-center items-center opacity-0 bg-[rgba(0,0,0,0.05)] transition-all">
        <p>Add Player</p>
      </div>
    </div>
  );
};

export default AddPlayer;
