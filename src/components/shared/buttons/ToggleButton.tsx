import React from 'react';
import clsx from 'clsx';
import * as BsIcons from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import ToggleButtonTooltip from './ToggleButtonTooltip';
import { Colors } from './button-type';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
  duration: 2,
};

const ToggleButton: React.FC<{ light?: Colors; dark?: Colors }> = ({
  light = 'amber',
  dark = 'indigo',
}) => {
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
        `group p-1 w-16 rounded-full  relative  flex border-[1px] shadow-md`,
        theme === 'light'
          ? `justify-start bg-${light}-200 border-${light}-400`
          : `justify-end bg-${dark}-200 border-${dark}-400`
      )}
    >
      {/* Comment this out to enable tooltip  */}
      {/* <div className='hidden group-hover:block'>
        <ToggleButtonTooltip theme={theme} dark={dark} light={light} />
      </div> */}

      <motion.div
        layout
        transition={spring}
        className={clsx(
          ' h-6 w-6 p-1 flex items-center justify-center rounded-full',
          theme === 'light'
            ? `bg-${light}-600 bg-opacity-50 text-${light}-900`
            : `bg-${dark}-600 bg-opacity-50 text-${dark}-900`
        )}
      >
        {theme == 'light' ? <BsIcons.BsSun /> : <BsIcons.BsMoonStars />}
      </motion.div>
    </button>
  );
};

export default ToggleButton;
