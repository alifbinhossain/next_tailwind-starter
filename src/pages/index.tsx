import ToggleButton from '@components/shared/Buttons/toggleButton';

export default function Home() {
  return (
    <div className=' h-screen w-screen bg-gray-200 transition-all duration-300  dark:bg-gray-600 overflow-hidden'>
      <div className='container h-full py-8'>
        <div className=' w-max ml-auto'>
          <ToggleButton />
        </div>

        <div className=' h-full flex justify-center pt-24'>
          <div className='text-center '>
            <h1 className='text-5xl text-gray-600 dark:text-gray-200 '>
              Next JS Starter
            </h1>

            <h2 className='text-xl mt-4 text-orange-600 dark:text-orange-400'>
              With TypeScript, TailwindCSS, Redux Toolkit & Dark Mode
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
