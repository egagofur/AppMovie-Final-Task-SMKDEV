import ImageIconsCustom from '@/assets/icons/ImageIconsCustom';
import MovieAppIcons from '@/assets/icons/MovieAppIcons';
import { Separator } from '@/components/atoms/separator/separator';
import ImageGooglePlayIcons from '@/assets/images/google-play.png';
import ImageAppStoreIcons from '@/assets/images/app-store.svg';
import Link from 'next/link';
import React from 'react';
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandPinterest,
} from '@tabler/icons-react';

const FooterList = [
  {
    title: 'Tentang kami',
    link: '/',
  },
  {
    title: 'Blog ',
    link: '/',
  },
  {
    title: 'Layanan',
    link: '/',
  },
  {
    title: 'Karir',
    link: '/',
  },
  {
    title: 'Pusat Media',
    link: '/',
  },
];

export default function Footer() {
  return (
    <footer className='flex flex-col bg-black py-6 text-white'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-4'>
          <div className='col-span-2 row-span-2 max-w-xl'>
            <MovieAppIcons className='w-16 lg:w-24' />
            <p className='py-6 text-sm tracking-wide text-gray-200 lg:text-base'>
              Selamat datang di dunia menonton film gratis! Kami sangat senang
              bisa menghadirkan pengalaman hiburan yang tak terlupakan bagi
              Anda. Apakah Anda seorang penggemar film berat atau sekadar
              mencari hiburan santai, situs web kami adalah tempat yang tepat
              untuk menjelajahi beragam film dari berbagai genre, tahun, dan
              negara, tanpa biaya apa pun. Kami telah merangkum mengapa menonton
              film gratis di situs kami adalah pilihan yang sempurna untuk Anda.
            </p>
          </div>
          <ul className='mb-2 flex flex-col md:mb-0 lg:gap-5'>
            {FooterList?.map(({ title, link }, index) => (
              <Link href={link} key={index}>
                <li className='text-lg font-light leading-loose text-gray-200 hover:text-white lg:text-xl'>
                  {title}
                </li>
              </Link>
            ))}
          </ul>
          <div className='flex flex-col gap-y-4 lg:gap-y-9'>
            <div>
              <p className='text-xl font-bold'>Download</p>
              <div className='flex flex-col lg:flex-row lg:gap-4'>
                <Link href='/'>
                  <ImageIconsCustom image={ImageGooglePlayIcons} />
                </Link>
                <Link href='/'>
                  <ImageIconsCustom image={ImageAppStoreIcons} />
                </Link>
              </div>
            </div>
            <div>
              <p className='text-xl font-bold'>Social media</p>
              <div className='flex gap-4'>
                <Link href='/'>
                  <IconBrandFacebookFilled size={36} />
                </Link>
                <Link href='/'>
                  <IconBrandPinterest size={36} />
                </Link>
                <Link href='/'>
                  <IconBrandInstagram size={36} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Separator className='mt-4 bg-white' />
        <div className='pt-6 text-center text-gray-300'>
          <p>Copyright © 2000-202 MilanTV. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
