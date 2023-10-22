import { pagePagination } from '@/utils/utils';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

const ButtonPagination = ({
  prevPage,
  page,
  handlePage,
  isMobile,
  nextPage,
}) => {
  return (
    <div className='flex items-center justify-center gap-4 pb-8'>
      <button
        onClick={prevPage}
        disabled={page === 1}
        className={`h-9 w-9 rounded-full text-center ${
          page === 1 ? 'disabled cursor-not-allowed text-gray-400' : ''
        } `}
      >
        <IconArrowLeft size={isMobile ? 24 : 36} />
      </button>
      {pagePagination?.map((item, index) => (
        <button
          key={index}
          className={`rounded-full px-3 py-1 text-center lg:px-6 lg:py-4 ${
            item === page
              ? 'bg-figmaColor-secondary font-bold text-white'
              : 'bg-gray-200 text-gray-400'
          }`}
          onClick={() => handlePage(item)}
        >
          {item}
        </button>
      ))}
      <button
        onClick={nextPage}
        disabled={page === 6}
        className={`h-9 w-9 rounded-full text-center ${
          page === 6 ? 'disabled cursor-not-allowed text-gray-400' : ''
        } `}
      >
        <IconArrowRight size={isMobile ? 24 : 36} />
      </button>
    </div>
  );
};

export default ButtonPagination;
