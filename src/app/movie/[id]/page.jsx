import dynamic from 'next/dynamic';

const MovieDetailSection = dynamic(
  () => import('@/components/organisms/sections/detail/MovieDetailSection'),
  { ssr: false }
);

const DetailMovie = () => {
  return <MovieDetailSection />;
};

export default DetailMovie;
