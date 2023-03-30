import React from 'react';
import { motion } from 'framer-motion';

function Box1() {
  return (
    <div className="pb-40">
      <motion.div
        className="h-48 w-48 bg-aquamarine flex flex-col items-center justify-center"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        drag
        dragConstraints={{
          left: -10,
          right: 20,
          top: 5,
          bottom: 5,
        }}
      ></motion.div>
    </div>
  );
}

export default Box1;
