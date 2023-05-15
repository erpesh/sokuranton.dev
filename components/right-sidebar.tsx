"use client"; // This is a client component 👈🏽

import {stack as Menu} from 'react-burger-menu';
import {DarkModeSwitch} from "react-toggle-dark-mode";
import {useTheme} from "next-themes";
import Link from "next/link";
import NoSSR from "../components/no-ssr";

const RightSidebar = () => {

  const {theme, setTheme} = useTheme();

  return (
      <Menu right width={250}>
        <Link className="menu-item" href="/">
          Home
        </Link>
        <Link className="menu-item" href="/projects">
          Projects
        </Link>
        <span
          className={"bm-item-list bottom color-theme-side menu-item"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <NoSSR>
            <DarkModeSwitch
              checked={theme === "dark"}
              onChange={(checked) => {}}
              size={24}
            />
          </NoSSR>
          <span>{theme === "dark" ? "Dark" : "Light"}</span>
        </span>
      </Menu>
  );
};

export default RightSidebar;