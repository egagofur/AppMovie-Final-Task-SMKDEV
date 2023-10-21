'use client';

import { useParams } from 'next/navigation';
import React from 'react';

const DetailMovie = () => {
  const params = useParams();
  const detailData = params?.id;

  return <div>DetailMovie: {detailData}</div>;
};

export default DetailMovie;
