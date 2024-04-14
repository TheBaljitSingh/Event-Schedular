import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import "./Nav.css"; // Import your CSS file for styling



export default function Nav(){

  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60 && !scrollPosition) {
        console.log('ab show kar')
        setScrollPosition(true);
      } else if (window.scrollY < 60 && scrollPosition) {
        setScrollPosition(false);
        console.log("abhi nahi karna hai show");
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPosition])


    return (
        // <nav  className={scrollPosition?"w-screen  h-20 p-5 fixed justify-between shadow-sm ":"w-screen  h-20 p-5 flex justify-between shadow-sm bg-[#41C9E2] "} >
              <nav className={`navbar ${scrollPosition ? 'z-50 fixed-nav w-screen  h-20 p-5 fixed justify-between shadow-sm  bg-[#41C9E2]' : ''}`}>

          <div className='flex-1 flex-start justify-center ml-32'>
          <a className="font-semibold mr-32 "  href="/#">Event Scheduler  </a>

          </div>
          <div > 


          </div>
          <div className='flex-1 flex justify-center ml-auto space-x-5 mt-1 '>
          <ul className="font-thin"><Link to={"/"}>Schedule</Link></ul>
          <ul className="font-thin"><Link to={"/Blog"}>Ticket</Link></ul>

            <ul className="font-thin"><Link to={"/about"} >Concert</Link></ul>
            <ul className="font-thin"><Link to={"/contact"}>Contact</Link></ul>

            <button type="button" class="flex items-center text-gray-900 hover:bg-white border border-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Login</button>

          </div>
      </nav>
    )
}