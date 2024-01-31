import React from "react";

const HeroText = () => {
  return (
    <div className=" flex flex-col items-center text-center pt-100px">
      <div className="flex flex-col text-3vw <md:text-24px font-bold mb-30px">
        <span> deliving industry`s</span>
        <span>top tallents work</span>
      </div>

      <span className="mb-30px w-1/4 <lg:w-1/3 <md:w-1/2 text-14px leading-tight">
        "Willkommen in einer Welt voller Möglichkeiten und Abenteuer. Gemeinsam
        schreiben wir die Zukunft neu und erschaffen das Unmögliche. Sei bereit,
        Grenzen zu überwinden und Träume zu leben. Die Zukunft liegt in unseren
        Händen - lass sie uns gestalten!"
      </span>
    </div>
  );
};

export default HeroText;
