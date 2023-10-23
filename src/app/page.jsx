'use client';

import dynamic from 'next/dynamic';
import { AspectRatio } from '@/components/atoms/aspect-ratio/aspect-ratio';
import NotFound from '@/components/atoms/not-found/NotFound';
import ButtonPagination from '@/components/molecules/button-pagination/ButtonPagination';
import Layout from '@/components/templates/layout';
import useMovieStore from '@/store/movieData';
import { movieServices } from '@/utils/Services/movie.services';
import configs from '@/utils/configs';
import useIsMobile from '@/utils/hooks/useIsMobile';
import { categoryMovie, responsive } from '@/utils/utils';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/scss/alice-carousel.scss';
import Skeleton from 'react-loading-skeleton';
const MovieCard = dynamic(() => import('@/components/atoms/card/MovieCard'), {
  ssr: false,
});

export default function Home() {
  const isMobile = useIsMobile();
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);

  const { movie, setMovie } = useMovieStore((state) => ({
    movie: state.movie,
    setMovie: state.setMovie,
  }));

  const {
    data: movieData,
    isLoading: isLoadingMovie,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ['movieData', page],
    queryFn: () => {
      return movieServices?.getDataMovies({ page, genre: category });
    },
    refetchOnWindowFocus: false,
  });

  const { data: genreMovieData } = useQuery({
    queryKey: ['genreMovieData'],
    queryFn: () => {
      return movieServices?.getGenreMovies();
    },
    refetchOnWindowFocus: false,
  });

  const items = movie?.results?.slice(0, 4)?.map((item, index) => {
    return (
      <div key={index} className='px-2'>
        <AspectRatio ratio={16 / 9}>
          <Image
            loading='lazy'
            src={configs.IMAGE_URL + item.poster_path}
            fill
            blurDataURL={configs.IMAGE_URL + item.poster_path}
            alt='blur'
            className={
              'duration-[2s] animate-pulse rounded-xl bg-muted object-cover object-center'
            }
            onLoadingComplete={(image) =>
              image.classList.remove('animate-pulse')
            }
            placeholder='blur'
          />
        </AspectRatio>
      </div>
    );
  });

  const prevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const handlePage = (page) => {
    setPage(page);
  };
  const nextPage = () => {
    if (page === 6) return;
    setPage((prev) => prev + 1);
  };

  const handleClickCategory = (category) => {
    setCategory(category);
  };

  useEffect(() => {
    if (movieData) setMovie(movieData);
  }, [movieData, setMovie]);

  useEffect(() => {
    refetch();
  }, [page, category]);

  return (
    <Layout>
      <div className='container min-h-screen'>
        {isLoadingMovie && isFetching ? (
          <Skeleton count={4} />
        ) : (
          <AliceCarousel
            items={items}
            responsive={responsive}
            autoPlay
            disableButtonsControls
            disableDotsControls={isMobile}
            infinite
            animationDuration={900}
            swipeDelta={isMobile ? 50 : 100}
            innerWidth={isMobile ? 300 : 600}
            animationEasingFunction='ease-in-out'
            controlsStrategy='alternate'
            suppressHydrationWarning
          />
        )}
        <h1 className='py-4 text-2xl font-bold text-gray-400'>
          Browse by category
        </h1>
        <div className='flex flex-wrap gap-2 lg:gap-4'>
          {categoryMovie?.map((item, index) => (
            <button
              key={index}
              onClick={() => handleClickCategory(item.key)}
              className={`rounded-full bg-figmaColor-secondary px-4 py-1 text-white lg:px-9 lg:py-2 lg:font-bold`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className='grid grid-cols-2 gap-x-4 gap-y-6 py-6 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-0'>
          {movie?.results?.length > 0 ? (
            movie?.results?.map((item, index) => (
              <MovieCard
                key={index}
                item={item}
                isLoadingMovie={isLoadingMovie}
                isFetching={isFetching}
                genreMovieData={genreMovieData}
              />
            ))
          ) : (
            <NotFound />
          )}
        </div>
        <ButtonPagination
          page={page}
          handlePage={handlePage}
          isMobile={isMobile}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </Layout>
  );
}
