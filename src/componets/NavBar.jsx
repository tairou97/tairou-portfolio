import React from "react";
import Logo from "../icons/Logo";
import ArrowRight from "../icons/ArrowRight";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navBar = [
    { name: "Home", to: "/", Id: 1 },
    { name: "About", to: "/about", Id: 2 },
    { name: "Skills", to: "/skills", Id: 3 },
    { name: "Projects", to: "/projects", Id: 4 },
    { name: "Contact", to: "/contact", Id: 5 },
  ];

  return (
    <nav className="w-full flex items-center justify-around h-80px fixed top-0 bg-white">
      <Logo />
      <ul className="flex gap-20px items-center <md-hidden">
        {navBar.map((e) => (
          <li key={e.Id}>
            <NavLink to={e.to}>{e.name}</NavLink>
          </li>
        ))}
      </ul>
      <ArrowRight />
    </nav>
  );
};

export default NavBar;
