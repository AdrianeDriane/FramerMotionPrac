import React from 'react';
import { motion } from 'framer-motion';

function Box4() {
  return (
    <div className="pb-40">
      <motion.div
        className="h-48 w-48 bg-aquamarine flex flex-col items-center justify-center"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ['20%', '20%', '50%', '50%', '20%'],
          rotate: [0, 0, 270, 270, 0],
        }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
}

export default Box4;
