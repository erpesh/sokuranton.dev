"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { useTheme } from 'next-themes'
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const NavBar = () => {

  const { theme, setTheme } = useTheme();

  return (
    <nav className={"flex justify-between nav-container"}>
      <p className={"inline-flex items-center justify-center cursor-pointer font-bold text-2xl"}>Anton Sokur</p>
      <div className={"nav-links"}>
        <Link className={"nav-link"} href={"/"}>Home</Link>
        <Link className={"nav-link"} href={"/projects"}>Projects</Link>
        <span className={"color-theme-switch"}>
          <DarkModeSwitch
            checked={theme === "dark"}
            onChange={(checked) => setTheme(checked ? "dark" : "light")}
            size={24}
          />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;