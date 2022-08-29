import React from 'react';
import clsx from 'clsx';
import * as BsIcons from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
  duration: 2,
};

const ToggleButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    if (theme == 'light') {
      setTheme('dark');
    } else if (theme == 'dark') {
      setTheme('light');
    }
  };

  if (!theme) return null;

  return (
    <button
      onClick={handleToggle}
      className={clsx(
        'group p-1 w-16 rounded-full bg-amber-200 dark:bg-indigo-200  relative  flex border-[1px] shadow-md',
        theme === 'light'
          ? 'justify-start border-amber-400'
          : 'justify-end border-indigo-400'
      )}
    >
      {/* <div className='hidden group-hover:block   '>
        <ToggleButtonTooltip theme={theme} />
      </div> */}

      <motion.div
        layout
        transition={spring}
        className={clsx(
          ' h-6 w-6 p-1 flex items-center justify-center rounded-full',
          theme === 'light'
            ? 'bg-amber-600/50 text-orange-900'
            : 'bg-indigo-600/50 text-indigo-900'
        )}
      >
        {theme == 'light' ? <BsIcons.BsSun /> : <BsIcons.BsMoonStars />}
      </motion.div>
    </button>
  );
};

export default ToggleButton;
