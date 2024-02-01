import React from "react";
import Logo from "../icons/Logo";
import ArrowRight from "../icons/ArrowRight";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { animationStart, reveal } from "../utils/animation";

const NavBar = () => {
  const navBar = [
    { name: "Home", to: "/", Id: 1 },
    { name: "About", to: "/about", Id: 2 },
    { name: "Skills", to: "/skills", Id: 3 },
    { name: "Projects", to: "/projects", Id: 4 },
    { name: "Contact", to: "/contact", Id: 5 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          duration: 0.5,
          delayChildren: animationStart + 0.5,
        }}
        className="w-full flex items-center justify-around h-80px fixed top-0 bg-white"
      >
        <motion.div variants={reveal}>
          <Logo />
        </motion.div>

        <ul className="flex gap-20px items-center <md-hidden">
          {navBar.map((e) => (
            <motion.li variants={reveal} key={e.Id}>
              <NavLink variants={reveal} to={e.to}>
                {e.name}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <ArrowRight />
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
