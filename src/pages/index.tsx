import ToggleButton from '@components/shared/Buttons/toggleButton';
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
    <div className=' h-screen w-screen bg-gray-50 transition-all duration-300  dark:bg-gray-900 overflow-hidden'>
      <div className='container h-full py-8'>
        <div className=' w-max ml-auto'>
          <ToggleButton />
        </div>

        <div className='h-full flex justify-center'>
          <div className=' text-center '>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <h1 className='text-5xl text-gray-600 dark:text-gray-200 '>
                Next JS Starter
              </h1>
            </motion.div>

            <h2 className='text-xl mt-4 text-orange-600 dark:text-orange-500 leading-relaxed'>
              With <br /> TypeScript, TailwindCSS, Framer Motion, Redux Toolkit
              & Dark Mode
            </h2>

            <div className='mt-8 grid grid-cols-3 gap-6'>
              {images.map((el) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    type: 'spring',
                    delay: 0.25,
                    duration: 1,
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
