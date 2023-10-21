import { IconPlayerPlayFilled } from '@tabler/icons-react';
import React from 'react';

const MovieAppIcons = ({ className }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-figmaColor-primary px-6 py-3 lg:px-8 lg:py-4 ${className}`}
    >
      <IconPlayerPlayFilled className='text-white' />
    </div>
  );
};

export default MovieAppIcons;
