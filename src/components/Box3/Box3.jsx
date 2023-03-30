import React from 'react';
import { motion } from 'framer-motion';

function Box3() {
  const boxVariant = {
    hidden: {
      x: '-100vw',
    },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        delay: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="pb-40">
      <motion.div
        className="h-48 w-48 bg-aquamarine flex flex-col items-center justify-center"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((key) => {
          return (
            <motion.li
              key={key}
              className="w-7 h-7 bg-white pb-4 list-none m-1"
              variants={listVariant}
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Box3;
