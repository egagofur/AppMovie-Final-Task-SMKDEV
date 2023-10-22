import MovieAppIcons from '@/assets/icons/MovieAppIcons';
import { Input } from '@/components/atoms/input/input';
import useMovieStore from '@/store/movieData';
import { movieServices } from '@/utils/Services/movie.services';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React, { useEffect } from 'react';

export default function Nav() {
  const [search, setSearch] = React.useState('');
  const { setMovie } = useMovieStore();

  const { data, refetch } = useQuery({
    queryKey: ['searchMovieData'],
    queryFn: () => {
      return movieServices?.getMovieBySearch(search);
    },
  });

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (data && search) {
      setMovie(data);
    }
  }, [data]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search) {
        refetch();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <header className='fixed z-50 w-screen bg-white'>
      <div className='container py-3'>
        <Link href='/'>
          <nav className='flex items-center gap-4'>
            <MovieAppIcons />
            <div className='flex-1 lg:mx-auto lg:max-w-2xl'>
              <Input
                value={search}
                onChange={handleSearchChange}
                className='rounded-xl border border-gray-600 text-gray-400 focus:border-none focus:text-gray-500'
                placeholder='Search Movie....'
              />
            </div>
          </nav>
        </Link>
      </div>
    </header>
  );
}
