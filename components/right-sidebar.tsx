"use client"; // This is a client component 👈🏽

import {stack as Menu} from 'react-burger-menu';
import {DarkModeSwitch} from "react-toggle-dark-mode";
import {useTheme} from "next-themes";
import Link from "next/link";
import NoSSR from "../components/no-ssr";
import {useState} from "react";

const RightSidebar = () => {

  const {theme, setTheme} = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
      <Menu
        right
        width={225}
        isOpen={isMenuOpen}
        onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}
        styles={{
          bmBurgerButton: {
            zIndex: "1102"
          },
        }}
      >
        <Link className="menu-item" href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link className="menu-item" href="/projects" onClick={closeMenu}>
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
            <span>{theme === "dark" ? "Dark" : "Light"}</span>
          </NoSSR>
        </span>
      </Menu>
  );
};

export default RightSidebar;