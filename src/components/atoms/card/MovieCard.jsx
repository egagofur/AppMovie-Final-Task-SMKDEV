import configs from '@/utils/configs';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

const MovieCard = ({ item, isLoadingMovie, isFetching, genreMovieData }) => {
  const genreCheck = (id) => {
    return genreMovieData?.genres
      .filter((genre) => id?.includes(genre.id))
      .slice(0, 2)
      .map((genre) => genre.name)
      .join(', ');
  };

  return (
    <Link href={`/movie/${item.id}`}>
      <div className='max-w-[250px]'>
        <div className='lg:max-h-[350px] lg:min-w-[250px] lg:max-w-[250px]'>
          <AspectRatio ratio={2.5 / 3.5}>
            {isLoadingMovie && isFetching ? (
              <Skeleton />
            ) : (
              <Image
                src={configs.IMAGE_URL + item.poster_path}
                blurDataURL={configs.IMAGE_URL + item.poster_path}
                alt='blur'
                fill
                className={
                  'duration-[2s] animate-pulse rounded-xl bg-muted object-cover'
                }
                onLoadingComplete={(image) =>
                  image.classList.remove('animate-pulse')
                }
                placeholder='blur'
              />
            )}
          </AspectRatio>
        </div>
        <div className='py-2 lg:py-4'>
          <h1 className='lg:text-md line-clamp-1 font-bold'>{item.title}</h1>
          <p className='mt-2 inline-block rounded-full bg-figmaColor-secondary  px-4 py-1 text-center text-xs text-white lg:text-sm'>
            {genreCheck(item.genre_ids)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
