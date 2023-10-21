'use client';

import { AspectRatio } from '@/components/atoms/aspect-ratio/aspect-ratio';
import { Skeleton } from '@/components/atoms/skeleton/skeleton';
import Layout from '@/components/templates/layout';
import { movieServices } from '@/utils/Services/movie.services';
import useIsMobile from '@/utils/hooks/useIsMobile';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Home() {
  const isMobile = useIsMobile();

  const { data: movieData, isLoading: isLoadingMovie } = useQuery({
    queryKey: ['movieData'],
    queryFn: () => {
      return movieServices?.getDataMovie();
    },
    refetchOnWindowFocus: false,
  });

  const { data: genreMovieData } = useQuery({
    queryKey: ['genreMovieData'],
    queryFn: () => {
      return movieServices?.getGenreMovie();
    },
    refetchOnWindowFocus: false,
  });

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = movieData?.results?.map((item, index) => {
    return (
      <div key={index} className='px-2'>
        <AspectRatio ratio={16 / 9} suppressHydrationWarning>
          <Image
            src={'https://image.tmdb.org/t/p/original' + item.poster_path}
            alt='test'
            className='rounded-xl object-cover'
            fill
          />
        </AspectRatio>
      </div>
    );
  });

  return (
    <Layout>
      <div className='container min-h-screen'>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay
          disableButtonsControls
          infinite
          disableDotsControls={isMobile}
          animationDuration={800}
          innerWidth={isMobile ? 300 : 600}
          animationEasingFunction='ease-in-out'
          controlsStrategy='alternate'
        />
        <h1 className='py-4 text-2xl font-bold text-gray-400'>
          Browse by category
        </h1>
        <div className='flex gap-4'>
          <button className='rounded-full bg-figmaColor-secondary px-9 py-2 font-bold text-white'>
            All
          </button>
          <button className='rounded-full bg-figmaColor-secondary px-9 py-2 font-bold text-white'>
            All
          </button>
          <button className='rounded-full bg-figmaColor-secondary px-9 py-2 font-bold text-white'>
            All
          </button>
          <button className='rounded-full bg-figmaColor-secondary px-9 py-2 font-bold text-white'>
            All
          </button>
        </div>
        <div className='grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-14 py-6 md:grid-cols-4 lg:grid-cols-5'>
          {movieData?.results?.map((item, index) => {
            return (
              <Link href={`/movie/${item.id}`} key={index}>
                <div className='max-w-max'>
                  {isLoadingMovie ? (
                    <Skeleton />
                  ) : (
                    <div>
                      <Image
                        src={
                          'https://image.tmdb.org/t/p/original' +
                          item.poster_path
                        }
                        alt='test'
                        className='rounded-xl'
                        width={400}
                        height={400}
                      />
                    </div>
                  )}
                  <div className='py-4'>
                    <h1 className='text-md line-clamp-1 font-bold'>
                      {item.title}
                    </h1>
                    <p className='mt-2 w-max rounded-full bg-figmaColor-secondary px-4 py-1 text-center text-sm font-bold text-white'>
                      {
                        genreMovieData?.genres?.find(
                          (genre) => genre.id === item.genre_ids[0]
                        )?.name
                      }
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
