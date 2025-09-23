"use client";
import { useState } from "react";

export default function Themeswitcher() {
  const [dark, setDark] = useState(false);

  const darkmode = () => {
    setDark(true);
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"; // optional text color
  };

  const lightmode = () => {
    setDark(false);
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  };

  return (
    <div className="border-2 flex font-bold gap-1 p-0.5 rounded-full">
      <div
        className={`rounded-full p-0.5 transition ${
          dark ? "bg-white text-black" : "bg-transparent text-black"
        }`}
      >
        <button className="cursor-pointer" onClick={darkmode}>Dark</button>
      </div>
      <div
        className={`rounded-full p-0.5 transition ${
          !dark ? "bg-black text-white" : "bg-transparent text-white"
        }`}
      >
        <button className="cursor-pointer" onClick={lightmode}>Light</button>
      </div>
    </div>
  );
}
