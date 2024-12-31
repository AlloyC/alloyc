"use client";
import React, { createContext, useContext, useState } from "react";
import { Toggle } from "./themeContext";

interface Menu {
  dropDown: boolean;
  toggleDropDown: Toggle;
}

const Menu = createContext<Menu | null>(null);

export const useMenu = () => {
  const menuContext = useContext(Menu);
  if (!menuContext) {
    throw new Error("not a child of menu context");
  } return menuContext;
};

function MenuContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [dropDown, setDropDown] = useState(false);
  const toggleDropDown = () => setDropDown((prev) => !prev);
  return (
    <Menu.Provider
      value={{
        dropDown,
        toggleDropDown,
      }}
    >
      {children}
    </Menu.Provider>
  );
}

export default MenuContext;
