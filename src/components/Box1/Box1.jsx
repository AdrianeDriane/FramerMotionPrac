import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Box1() {
  const [isAnimating, setisAnimating] = useState(false);

  return (
    <div className="pb-40">
      <motion.div
        className="h-48 w-48 bg-aquamarine flex flex-col items-center justify-center"
        animate={{
          x: isAnimating ? 800 : 0,
          opacity: isAnimating ? 1 : 0.5,
          rotate: isAnimating ? 360 : 0,
        }}
        initial={{
          opacity: 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 60,
        }}
        onClick={() => {
          setisAnimating(!isAnimating);
        }}
      ></motion.div>
    </div>
  );
}

export default Box1;
