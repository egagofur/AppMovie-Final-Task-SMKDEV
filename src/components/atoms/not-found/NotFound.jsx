import { IconRefreshAlert } from '@tabler/icons-react';
import React from 'react';

const NotFound = () => {
  return (
    <div className='col-span-full flex flex-col items-center justify-center'>
      <p className='text-2xl font-bold text-gray-400'>No data available 😣</p>
      <button
        onClick={() => window.location.reload()}
        className='mt-4 flex items-center gap-2 rounded-full bg-figmaColor-secondary px-4 py-2 text-white'
      >
        <IconRefreshAlert size={24} />
        <span>Refetch</span>
      </button>
    </div>
  );
};

export default NotFound;
