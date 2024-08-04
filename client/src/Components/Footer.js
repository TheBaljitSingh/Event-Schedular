import React from 'react';
import twitterImg from "../assets/images/twitter.svg"
import youtubeImg from "../assets/images/youtube.svg"
import linkedinImg from "../assets/images/linkedin.svg"


function Footer() {
  return (
    <footer className=" text-white border-t-2 p-2 mt-2">
      <div class=" border-gray-200 py-4 ">
  <div class="container mx-auto flex justify-between items-center px-4 h-12">
    {/* <!-- Logo Section --> */}
    <div class="flex items-center space-x-2">
      {/* <img src="path/to/logo.png" alt="Logo" class="h-8"/> */}

      <span class="text-lg text-black font-semibold">eventSchedular</span>
    </div>

    {/* <!-- Navigation Links --> */}
    <div class=" border-gray-200  mt-4 pt-4">
    <p class="text-center text-sm text-gray-500">
      © 2024. All Rights Reserved.
    </p>
  </div>
    

    {/* <!-- Social Media Icons --> */}
    <div class="flex space-x-4">
      
      <a href="#" class="text-gray-500 hover:text-gray-700">
        <img src={youtubeImg} alt="LinkedIn" class="h-6"/>
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700">
        <img src={linkedinImg} alt="Instagram" class="h-6"/>
      </a>
      <a href="#" class="text-gray-500 hover:text-gray-700">
        <img src={twitterImg} alt="YouTube" class="h-6"/>
      </a>
    </div>
  </div>
  
</div>


    </footer>
  );
}

export default Footer;
