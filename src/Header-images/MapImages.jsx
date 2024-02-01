import React from "react";
import { motion } from "framer-motion";
import { animationStart, reveal } from "../utils/animation";
const MapImages = () => {
  return (
    <div className="absolute w-full flex justify-between transform -translate-y-200px -z-1 overflow-hidden">
      <motion.img
        variants={reveal}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: animationStart + 1 + 2,
        }}
        className="object-cover"
        src="src/assets/map_1.png"
      />
      <motion.img
        variants={reveal}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: animationStart + 1 + 2,
        }}
        className="object-cover"
        src="src/assets/map_2.png"
      />
    </div>
  );
};

export default MapImages;
