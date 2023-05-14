import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={"flex justify-between nav-container"}>
      <p className={"inline-flex items-center justify-center cursor-pointer font-bold text-2xl"}>Anton Sokur</p>
      <div className={"nav-links"}>
        <Link className={"nav-link"} href={"/"}>Home</Link>
        <Link className={"nav-link"} href={"/projects"}>Projects</Link>
      </div>
    </nav>
  );
};

export default NavBar;