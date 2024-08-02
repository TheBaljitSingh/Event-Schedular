import React from 'react';
import Nav from './Nav'; // Assuming Nav is a component in the same directory

import bg from '../bg.jpg'; // Import the background image
import dhoom from '../dhoom.jpg'; // Import the image for display

export default function Landing() {
  return (
    //  style={{ backgroundImage: `url(${bg})` }}
    <div className="flex flex-col h-screen w-screen bg-cover bg-center bg-[#ACE2E1] "   >
      <Nav />
      <div className="flex flex-row items-center justify-center flex-grow space-x-10">
        <img className="w-80 mb-4" src={dhoom} alt="Dhoom" />
       
        <div className=" space-x-4 flex-col">

            <p>Dhoom, one of the most anticipated cultural and sports festivals hosted by PU</p>

            <div className='flex items-center flex-row justify-center mt-4'>
                <button type="button" class="text-gray-900  border-2  focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 ">Get Tickets</button>
                <button type="button" class="text-gray-900  border-2  focus:outline-none hover:bg-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2  ">Know More!</button>


            </div>
       
       
          <button type="button" className="btn"></button>
        </div>
      </div>
    </div>
  );
}
