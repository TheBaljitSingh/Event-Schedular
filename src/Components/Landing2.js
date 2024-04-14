import React from 'react'
import garba from "../garba.jpg"
import projection from "../projection.jpg"
import Nav from './Nav'

export default function Landing2() {
  return (
    <div className='h-screen w-screen  max-w-soverflow-x-hidden max-w-screen-2xl mx-autocreen '>
            <Nav />

        <div className='relative flex justify-center items-center flex-col mt-16 '>
            <p className='font-medium text-3xl'>Welcome to Event Schedular!</p>
            <p className='text-gray-500 font-normal text-xl mt-2'>Explore the various events happening in your university and colleges.</p>
        </div>

        <div className='mx-16 space-x-2 justify-between items-center flex h-screen'>

        <div className="w-1/2 h-2/3 rounded-xl relative overflow-hidden" style={{ backgroundImage: `url(${garba})`,}} >
          <div className="text-gray-200 absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center font-xl">
            {/* Empty div for the blur effect */}
            <div className='flex flex-col justify-center items-center space-y-2 mt-12'>
            <p className='font-medium text-3xl text-black bg-[#41C9E2] rounded-lg p-1 '>Cultural Fest</p>
            <p className='font-normal text-m shadow-sm p-8'> PU’s Annual Cultural Fest Dhoom 2024 Celebrates Diversity & Heritage Spectacularly, with 9XM Nites Music Show and Singer & Producer Ritviz Performing at the Closing Ceremony</p>
            <button className='bg-white rounded-md p-1 text-black font-medium hover:bg-slate-200'> <a href="https://paruluniversity.ac.in/pu-mirror/Navratri">VIEW DETAILS</a></button>
            </div>

          </div>
        </div>
        <div className="w-1/2 h-2/3 rounded-xl relative overflow-hidden" style={{ backgroundImage: `url(${projection})`,  }} >
          <div className="text-white absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm flex items-center justify-center"    >
            {/* Empty div for the blur effect */}
            <div className='flex flex-col justify-center items-center space-y-2 mt-12'>
            <p className='font-medium text-3xl text-black bg-[#41C9E2] rounded-lg p-1 '>Technical Fest</p>
            <p className='font-normal text-m shadow-sm p-8'> Gujarat’s Largest Technical Festival, Enlightens Minds with a Stellar Edition on the Theme Cosmos</p>
            <button className='bg-white rounded-md p-1 text-black font-medium hover:bg-slate-200'> <a href="https://www.paruluniversity.ac.in/pu-mirror/projections-2024-gujarats-largest-technical-festival-enlightens-minds-with-a-stellar-edition-on-the-theme-cosmos-witnesses-participation-from-over-15-states-of-the-country">VIEW DETAILS</a></button>
            </div>

          </div>
        </div>


      
        </div>


    </div>
  )
}
