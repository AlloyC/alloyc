"use client";
import React, { createContext, MouseEventHandler, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

export type Toggle = MouseEventHandler<HTMLButtonElement> | undefined;

const ThemeMode = createContext<Theme>("light");

const ToggleTheme = createContext<Toggle>(undefined);

export const useTheme = () => useContext(ThemeMode);

export const useToggleTheme = () => useContext(ToggleTheme);

function ThemeContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<Theme>("light");

  const toggleMode = () => {
    mode === "light"
      ? (document.cookie = "theme = dark;secure")
      : (document.cookie = "theme = light; secure");
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const savedMode = document.cookie.split(":")[1] as Theme;
    setMode(savedMode || "light");
  }, []);
  return (
    <ThemeMode.Provider value={mode}>
      <ToggleTheme.Provider value={toggleMode}>{children}</ToggleTheme.Provider>
    </ThemeMode.Provider>
  );
}

export default ThemeContext;
