import MovieAppIcons from '@/assets/icons/MovieAppIcons';
import { Input } from '@/components/atoms/input/input';
import React from 'react';

export default function Nav() {
  return (
    <header className='container py-5'>
      <nav className='flex items-center gap-4'>
        <MovieAppIcons />
        <div className='flex-1 lg:mx-auto lg:max-w-2xl'>
          <Input
            className='rounded-xl border border-gray-600 text-gray-400'
            placeholder='Search Movie....'
          />
        </div>
      </nav>
    </header>
  );
}
