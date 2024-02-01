import React from "react";
import Baske from "../icons/Baske";
import { motion } from "framer-motion";
import { animationStart } from "../utils/animation";
import { reveal } from "../utils/animation";

const HeroText = () => {
  return (
    <motion.div
      layout
      initial={{ height: 0 }}
      animate={{ height: "unset" }}
      transition={{ delay: animationStart, duration: 1 }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1, duration: 0.5 }}
        className="flex flex-col text-3vw <md:text-24px font-bold mb-30px pt-100px"
      >
        <span className="flex items-center gap-10px">
          Hello there, <Baske /> I'm Tairou
        </span>
        <span>a Fullstack Developer</span>
      </motion.div>

      <motion.span
        variants={reveal}
        initial="hiddenVariant"
        animate="revealedVariant"
        transition={{ delay: animationStart + 1.5, duration: 0.5 }}
        className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px  leading-tight"
      >
        driven by a love for developing seamless web applications. My expertise
        lies in sculpting captivating user interfaces on the frontend and
        constructing sturdy backend systems. Through a commitment to
        collaboration and an unyielding dedication to staying at the forefront
        of industry advancements, I work tirelessly to deliver top-notch
        solutions that leave a lasting, positive imprint.
      </motion.span>
    </motion.div>
  );
};

export default HeroText;
