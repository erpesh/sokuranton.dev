"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import RenderOnMount from "./render-on-mount";

const NavBar = () => {

  const {theme, setTheme} = useTheme();

  return (
    <nav className={"nav-container"}>
      <Link href={"/"} className={"inline-flex items-center justify-center cursor-pointer font-bold text-2xl"}>Anton Sokur</Link>
      <div className={"nav-links"}>
        <Link className={"nav-link"} href={"/"}>Home</Link>
        <Link className={"nav-link"} href={"/projects"}>Projects</Link>
        <span
          className={"color-theme-switch"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <RenderOnMount>
            <DarkModeSwitch
              checked={theme === "dark"}
              onChange={() => {}}
              size={24}
            />
          </RenderOnMount>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;