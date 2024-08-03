import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  console.log(lastScrollTop);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > 150 && scrollTop> lastScrollTop) {
        setShowHeader(false); // Hide header on scroll down
      } else if (scrollTop < lastScrollTop) {
        setShowHeader(true); // Show header on scroll up
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For mobile or negative scrolling
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);


  return (  
    <header   className= {showHeader? " bg-white text-white sticky left-0 top-0 z-50 w-full py-4  transition duration-100" : "bg-white shadow text-white sticky left-0 top-0 z-50 w-full py-4  transition duration-100" }>
    <nav className="container mx-auto flex justify-between px-14 ">
      <div className="text-2xl font-bold text-black  ">
        <Link to="/"> eventSchedular</Link>
      </div>
      <div className='flex-1 ml-24  '>
        <ul className='inline-flex space-x-7'>
         

        <Link to="/" className="p-2 font-semibold text-green-600">Home</Link>
        <Link to="/about" className="p-2 hover:text-green-600 ease-in-out duration-50 text-black font-semibold">About</Link>
        <Link to="/services" className="p-2 hover:text-green-600 ease-in-out duration-50 text-black font-semibold">Services</Link>
        <Link to="/contact" className="p-2 hover:text-green-600 ease-in-out duration-50 text-black font-semibold">Contact</Link>
        </ul>
      </div>
      <div>
        <a className='inline-flex h-10 px-[23px] py-2.5 bg-white rounded-[32px] border border-zinc-100 justify-center items-center text-green-600 hover:border-green-600 ease-linear duration-100' href="/auth/sign-in">Sign In</a>
      </div>
    </nav>
  </header>
  );
}

export default Header;
