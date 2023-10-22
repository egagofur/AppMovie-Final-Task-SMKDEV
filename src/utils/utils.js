import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function toRupiahFormat(number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
}

export const categoryMovie = [
  {
    key: null,
    name: 'All',
  },
  {
    key: 18,
    name: 'drama',
  },
  {
    key: 12,
    name: 'adventure',
  },
  {
    key: 878,
    name: ' science fiction',
  },
  {
    key: 28,
    name: 'action',
  },
  {
    key: 35,
    name: 'comedy',
  },
];

export const pagePagination = [1, 2, 3, 4, 5, 6];
export const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};
