'use client';

import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Image from 'next/image';
import React from 'react';

const ImageIconsCustom = ({ image }) => {
  return (
    <div className='w-40'>
      <AspectRatio ratio={22 / 9}>
        <Image
          src={image}
          alt='icon play store'
          fill
          className='object-cover '
        />
      </AspectRatio>
    </div>
  );
};

export default ImageIconsCustom;
