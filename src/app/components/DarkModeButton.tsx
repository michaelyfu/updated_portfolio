"use client";
import { useTheme } from "next-themes";
import React from "react";

function DarkModeButton() {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
    >
      <h1 className="text-primary-100 no-underline hover:underline decoration-primary-100">
        magic.
      </h1>
    </button>
  );
}

export default DarkModeButton;
