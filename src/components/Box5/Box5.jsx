import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Box5() {
  const buttonClass =
    'text-white p-4 mr-6 mb-12 border-none bg-cyan-500 font-bold text-md w-2/12 cursor-pointer';

  const control = useAnimation();

  return (
    <div className="pb-40">
      <button
        className={buttonClass}
        onClick={() => {
          control.start({
            x: 0,
            transition: {
              type: 'spring',
              stiffness: 15,
            },
          });
        }}
      >
        Move Left
      </button>
      <button
        className={buttonClass}
        onClick={() => {
          control.start({
            x: 1500,
            transition: {
              type: 'spring',
              stiffness: 15,
            },
          });
        }}
      >
        Move Right
      </button>
      <button
        className={buttonClass}
        onClick={() => {
          control.start({
            borderRadius: '0%',
            transition: {
              duration: 1,
            },
          });
        }}
      >
        Square
      </button>
      <button
        className={buttonClass}
        onClick={() => {
          control.start({
            borderRadius: '100%',
            transition: {
              duration: 1,
            },
          });
        }}
      >
        Circle
      </button>
      <button
        className={buttonClass}
        onClick={() => {
          control.stop();
        }}
      >
        Stop
      </button>

      <motion.div
        className="h-48 w-48 bg-aquamarine flex flex-col items-center justify-center"
        animate={control}
      ></motion.div>
    </div>
  );
}

export default Box5;
