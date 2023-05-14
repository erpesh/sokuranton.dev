"use client"; // This is a client component 👈🏽

import React from 'react';
import {stack as Menu} from 'react-burger-menu';
import {DarkModeSwitch} from "react-toggle-dark-mode";
import {useTheme} from "next-themes";

const RightSidebar = () => {

  const {theme, setTheme} = useTheme();

  return (
    <Menu right width={250}>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/about">
        About
      </a>
      <a className="menu-item" href="/contact">
        Contact
      </a>
      <span
        className={"bm-item-list bottom color-theme-side menu-item"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <DarkModeSwitch
          checked={theme === "dark"}
          onChange={(checked) => {}}
          size={24}
        />
        <span>{theme === "dark" ? "Dark" : "Light"}</span>
      </span>
    </Menu>
  );
};

export default RightSidebar;