"use client";
import React, {
  createContext,
  MouseEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import { useTheme as useNextTheme } from "next-themes";

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
  const { theme, setTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const toggleMode = () => {
    if (theme === "light") {
      document.cookie = "theme = dark;secure";
      setTheme("dark");
    } else {
      document.cookie = "theme = light; secure";
      setTheme("light");
    }
    // setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const savedMode = document.cookie.split("=")[1] as Theme;
    // console.log(savedMode);

    setTheme(savedMode || "system");
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeMode.Provider value={theme === "system" ? systemTheme as Theme : theme as Theme}>
      <ToggleTheme.Provider value={toggleMode}>
        <div className="h-max min-h-screen">{children}</div>
      </ToggleTheme.Provider>
    </ThemeMode.Provider>
  );
}

export default ThemeContext;
