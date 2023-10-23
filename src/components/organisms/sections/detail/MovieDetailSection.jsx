'use client';

import { AspectRatio } from '@/components/atoms/aspect-ratio/aspect-ratio';
import Layout from '@/components/templates/layout';
import { movieServices } from '@/utils/Services/movie.services';
import configs from '@/utils/configs';
import useIsMobile from '@/utils/hooks/useIsMobile';
import { toRupiahFormat } from '@/utils/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import ReactStars from 'react-stars';

const MovieDetailSection = () => {
  const params = useParams();
  const detailData = params.id;

  const isMobile = useIsMobile();

  const { data, isLoading } = useQuery({
    queryKey: ['detailMovieData'],
    queryFn: () => {
      return movieServices?.getMovieById(detailData);
    },
    refetchOnWindowFocus: false,
  });

  const starValue =
    Math.random({
      min: 3,
      max: 5,
      fixed: 3,
    }) * 5;

  return (
    <Layout>
      <main className='min-h-screen space-y-6'>
        {isLoading ? (
          <Skeleton count={4} />
        ) : (
          <div className='relative h-1/2 bg-black/60'>
            <AspectRatio ratio={isMobile ? 16 / 24 : 16 / 5}>
              <Image
                src={configs.IMAGE_URL + data?.poster_path}
                blurDataURL={configs.IMAGE_URL + data?.poster_path}
                alt='blur'
                fill
                className={
                  'duration-[2s] animate-pulse rounded-xl bg-muted object-cover object-center opacity-0 transition-opacity'
                }
                onLoadingComplete={(image) => {
                  image.classList.remove('animate-pulse'),
                    image.classList.remove('opacity-0');
                }}
                placeholder='blur'
                loading='lazy'
              />
            </AspectRatio>
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-black/60 text-white'>
              <div className='container mt-16 flex flex-col'>
                <h1 className='text-2xl font-extrabold lg:text-4xl '>
                  {data?.title.toUpperCase()}
                </h1>
                <div className='flex items-center gap-4'>
                  <ReactStars
                    count={5}
                    edit={false}
                    size={isMobile ? 24 : 32}
                    value={starValue}
                  />
                  <p className='text-md'>
                    <span className='leading-3 tracking-wide lg:text-xl'>
                      {data?.revenue}
                    </span>{' '}
                    reviews
                  </p>
                </div>
                <div>
                  <p className='max-w-2xl py-8 lg:text-xl'>{data?.overview}</p>
                </div>
                <div className='flex gap-4'>
                  <Link
                    href={`${data?.homepage}`}
                    target='_blank'
                    className='rounded-lg bg-figmaColor-primary p-4 text-base lg:px-6 lg:text-lg'
                  >
                    Watch Trailer
                    <span className='text-figmaColor-primary'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='inline-block h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='white'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M9 5l7 7-7 7'
                        />
                      </svg>
                    </span>
                  </Link>
                  <button className='rounded-lg border-2 border-white bg-transparent    p-4 text-base lg:px-6 lg:text-lg'>
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='container flex flex-wrap gap-4'>
          <button className='rounded-full bg-figmaColor-secondary px-9 py-2 font-bold text-white'>
            Overview
          </button>
          <button className='rounded-full border-2 border-gray-500 px-9 py-2 font-bold text-black'>
            Characters
          </button>
          <button className='rounded-full  border-2 border-gray-500 px-9 py-2 font-bold text-black'>
            Review
          </button>
        </div>
        <div className='container space-y-4 pb-4'>
          <div>
            <h1 className='text-xl font-bold lg:text-2xl'>Synopsis</h1>
            <p className='max-w-4xl tracking-wider'>{data?.overview}</p>
          </div>
          <div>
            <h1 className='text-xl font-bold lg:text-2xl'>Movie info</h1>
            <p className='text-lg font-medium'>
              Release date :{' '}
              <span className='font-light'>{data?.release_date}</span>
            </p>
            <p className='text-lg font-medium'>
              Language :
              <span className='font-light'> {data?.original_language}</span>
            </p>
            <p className='text-lg font-medium'>
              Status : <span className='font-light'>{data?.status}</span>
            </p>
            <p className='text-lg font-medium'>
              Budget :{' '}
              <span className='font-light'>{toRupiahFormat(data?.budget)}</span>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default MovieDetailSection;
