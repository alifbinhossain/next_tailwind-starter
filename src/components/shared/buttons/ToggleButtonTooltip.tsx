import clsx from 'clsx';
import React from 'react';

const ToggleButtonTooltip: React.FC<{ theme: string }> = ({ theme }) => {
  return (
    <div
      className={clsx(
        'absolute  -bottom-8 px-3 py-1 rounded-sm z-10 bg-amber-200 dark:bg-indigo-200 text-orange-900 dark:text-indigo-900 shadow-md ',
        theme === 'light' ? '-left-8 ' : '-right-8 '
      )}
    >
      <span
        className={clsx(
          'absolute -top-1  h-2 w-2 bg-amber-200 dark:bg-indigo-200  rotate-45 rounded-sm -z-[5px]',
          theme === 'light' ? 'right-2' : 'left-2'
        )}
      ></span>
      <span className='text-xs block w-max'>
        {theme === 'light' ? 'Light' : 'Dark'}
      </span>
    </div>
  );
};

export default ToggleButtonTooltip;
