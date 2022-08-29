import ToggleButton from '@/components/shared/Buttons/ToggleButton';
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

export default function Home() {
  return (
    <div className='mn-h-screen lg:h-screen w-screen bg-gray-50 transition-all duration-300  dark:bg-gray-900 overflow-hidden px-8'>
      <div className='container h-full py-8'>
        <div className=' mb-6 w-max ml-auto'>
          <ToggleButton />
        </div>

        <div className='h-full flex justify-center'>
          <div className=' text-center '>
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
              <h1 className='text-3xl lg:text-5xl text-gray-600 dark:text-gray-200 '>
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
              className='text-base lg:text-xl mt-4 text-orange-600 dark:text-orange-500 leading-relaxed'
            >
              With <br /> TypeScript, TailwindCSS, Framer Motion, Redux Toolkit
              & Dark Mode
            </motion.h2>

            <div className='mt-8 grid grid-cols-2 lg:grid-cols-3 gap-6'>
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
                  className=' p-6 border-2 border-gray-400 rounded-md flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300'
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
                    <Image src={el.src} height={120} width={120} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
