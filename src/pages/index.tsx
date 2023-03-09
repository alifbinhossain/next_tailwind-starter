import React from 'react';

import { NextPage } from 'next';

import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { id: 1, src: '/assets/images/next-js.svg' },
  { id: 2, src: '/assets/images/tailwindcss.svg' },
  { id: 3, src: '/assets/images/typescript.svg' },
  { id: 4, src: '/assets/images/framer-motion.svg' },
  { id: 5, src: '/assets/images/redux.svg' },
  { id: 6, src: '/assets/images/dark.svg' },
];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-50 px-8  transition-all duration-300 dark:bg-gray-900">
      <div className="container h-full py-8">
        <div className="flex h-full justify-center">
          <div className=" text-center ">
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: 'easeIn',
              }}
            >
              <h1 className=" text-3xl text-gray-600  dark:text-gray-200 lg:text-5xl">
                Next JS Starter
              </h1>
            </motion.div>

            <motion.h2
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 1.5,
                ease: 'easeIn',
              }}
              className="mt-4 text-base leading-relaxed text-orange-600 dark:text-orange-500 lg:text-xl"
            >
              With <br /> TypeScript, TailwindCSS, Framer Motion, Redux Toolkit
              & Dark Mode
            </motion.h2>

            <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-3">
              {images.map((el, i) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.75,
                  }}
                  animate={{
                    opacity: 1,
                    scale: [0.5, 1.25, 0.75, 1],
                  }}
                  transition={{
                    type: 'spring',
                    delay: i * 0.3,
                    duration: 0.6,
                  }}
                  key={el.id}
                  className=" flex items-center justify-center rounded-md border-2 border-gray-400 bg-gradient-to-r from-gray-200 to-gray-300 p-6"
                >
                  <motion.div
                    initial={{
                      scale: 1.0,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      skewX: -10,
                    }}
                  >
                    <Image src={el.src} alt="" height={120} width={120} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
