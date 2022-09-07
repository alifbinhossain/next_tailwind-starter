import React from 'react';
import clsx from 'clsx';
import * as BsIcons from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import ToggleButtonTooltip from './ToggleButtonTooltip';
import type { Colors, Sizes } from './button-type';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
  duration: 2,
};

// The following props can be passed: light, dark, size, tooltip, darkIcon & lightIcon
// Note: For customizing darkIcons and lightIcons, you should use react-icons
const ToggleButton: React.FC<{
  light?: Colors;
  dark?: Colors;
  size?: Sizes;
  darkIcon?: React.ReactNode;
  lightIcon?: React.ReactNode;
  tooltip?: boolean;
}> = ({
  light = 'amber',
  dark = 'indigo',
  size = 'md',
  lightIcon = <BsIcons.BsSun />,
  darkIcon = <BsIcons.BsMoonStars />,
  tooltip = false,
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
    <motion.button
      initial={{
        opacity: 0,
        scale: 0.75,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: [-20, 20, 10, -10, 0],
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 1.6,
      }}
      onClick={handleToggle}
      className={clsx(
        `group  rounded-full  relative  flex border-[1px] shadow-md`,
        size === 'sm'
          ? 'p-[2px] w-12'
          : size === 'md'
          ? 'p-1 w-[60px]'
          : size === 'lg'
          ? 'p-1 w-20'
          : '',
        theme === 'light'
          ? `justify-start bg-${light}-200 border-${light}-400`
          : `justify-end bg-${dark}-200 border-${dark}-400`
      )}
    >
      {/* TOOLTIP */}
      {tooltip && (
        <div className='hidden group-hover:block'>
          <ToggleButtonTooltip theme={theme} dark={dark} light={light} />
        </div>
      )}

      <motion.div
        layout
        transition={spring}
        className={clsx(
          'flex items-center justify-center rounded-full shadow-2xl',

          size === 'sm'
            ? 'h-5 w-5 p-1'
            : size === 'md'
            ? 'h-6 w-6 p-1'
            : size === 'lg'
            ? 'h-8 w-8 p-[6px]'
            : '',
          theme === 'light'
            ? `bg-${light}-600 bg-opacity-50 text-${light}-900 `
            : `bg-${dark}-600 bg-opacity-50 text-${dark}-900 `
        )}
      >
        {theme == 'light' ? lightIcon : darkIcon}
      </motion.div>
    </motion.button>
  );
};

export default ToggleButton;
