import React from "react";
import Logo from "../icons/Logo";
import Baske from "../icons/Baske";
// import { Motion } from "framer-motion";

const HeroText = () => {
  return (
    // <Motion.div
    //   layout
    //   initial={{ opacity: 0 }}
    //   animate={{ height: "unset" }}
    //   transition={{ delay: animationStart, duration: 1 }}
    <div className=" flex flex-col items-center text-center pt-100px">
      <div className="flex flex-col text-3vw <md:text-24px font-bold mb-30px">
        <span className="flex items-center gap-10px">
          deliving <Baske /> industry`s
        </span>
        <span>top tallents work</span>
      </div>

      <span className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight">
        "Willkommen in einer Welt voller Möglichkeiten und Abenteuer. Gemeinsam
        schreiben wir die Zukunft neu und erschaffen das Unmögliche. Sei bereit,
        Grenzen zu überwinden und Träume zu leben. Die Zukunft liegt in unseren
        Händen - lass sie uns gestalten!"
      </span>
    </div>
    //* </Motion.div> */}
  );
};

export default HeroText;
