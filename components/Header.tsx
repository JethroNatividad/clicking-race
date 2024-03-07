import React from "react";

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header className="px-5 py-5 border-b border-slate-600 fixed top-0 left-0 w-full z-20 bg-black">
      <h1 className="text-3xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
