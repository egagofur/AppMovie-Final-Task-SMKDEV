import { Suspense } from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Skeleton from 'react-loading-skeleton';

const Layout = ({ children, className }) => {
  return (
    <Suspense fallback={<Skeleton count={3} />}>
      <div className={`flex min-h-screen flex-col lg:mx-auto ${className}`}>
        <Nav />
        <main className='mt-[calc(6rem+1px)] flex-1'>{children}</main>
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
