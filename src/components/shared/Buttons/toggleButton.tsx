import React from 'react';
import clsx from 'clsx';
import * as BsIcons from 'react-icons/bs';
import { useTheme } from 'next-themes';

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
      className='p-1 w-16 rounded-full bg-gray-400 dark:bg-gray-200  relative '
    >
      <span
        className={clsx(
          ' block  bg-gray-200 dark:bg-gray-400 p-1 rounded-full w-max text-md text-amber-500 dark:text-gray-600 transition-all transform duration-400 ease',
          theme == 'light' ? ' translate-x-[130%]' : 'translate-x-0'
        )}
      >
        {theme == 'light' ? <BsIcons.BsSun /> : <BsIcons.BsMoonStars />}
      </span>
    </button>
  );
};

export default ToggleButton;
