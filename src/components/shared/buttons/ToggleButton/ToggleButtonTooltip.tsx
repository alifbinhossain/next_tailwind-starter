import React from 'react';

import clsx from 'clsx';

import { Colors } from './button-type';

const ToggleButtonTooltip: React.FC<{
  theme: string;
  dark: Colors;
  light: Colors;
}> = ({ theme, dark, light }) => {
  return (
    <div
      className={clsx(
        'absolute  -bottom-8 px-3 py-1 rounded-sm z-10  shadow-md ',
        theme === 'light'
          ? `-left-8 bg-${light}-200 text-${light}-900`
          : `-right-8 bg-${dark}-200 text-${dark}-900`
      )}
    >
      <span
        className={clsx(
          'absolute -top-1  h-2 w-2   rotate-45 rounded-sm -z-[5px]',
          theme === 'light'
            ? `right-2 bg-${light}-200`
            : `left-2 bg-${dark}-200`
        )}
      ></span>
      <span className="text-xs block w-max">
        {theme === 'light' ? 'Light' : 'Dark'}
      </span>
    </div>
  );
};

export default ToggleButtonTooltip;
