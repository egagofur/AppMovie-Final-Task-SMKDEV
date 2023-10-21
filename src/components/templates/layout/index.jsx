import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children, className }) => {
  return (
    <>
      <div className={`flex min-h-screen flex-col lg:mx-auto ${className}`}>
        <Nav />
        <main className='flex-1'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
