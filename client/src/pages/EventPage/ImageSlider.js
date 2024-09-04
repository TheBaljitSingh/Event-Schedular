// import React, { useState } from 'react';

// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="relative w-full">
//       <div className="flex justify-between absolute inset-y-0 left-0 right-0 px-4">
//         <button onClick={prevSlide} className="bg-gray-100 p-2 rounded-full">
//           <svg
//             className="w-6 h-6 text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>
//         <button onClick={nextSlide} className="bg-gray-100 p-2 rounded-full">
//           <svg
//             className="w-6 h-6 text-gray-800"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//       <div className="overflow-hidden">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={`Slide ${index}`}
//             className={`w-full transition-transform duration-500 ease-in-out transform ${
//               index === currentIndex ? 'translate-x-0' : 'translate-x-full'
//             }`}
//             style={{
//               transform: `translateX(-${currentIndex * 100}%)`,
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
      {/* <div class="  duration-200 ease-linear" data-carousel-item>
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class=" duration-200 ease-linear" data-carousel-item="active">
            <img src="https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Online-Shopping-AD-Banner-Design-in-Photoshop-1536x864.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-200 ease-linear" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div> */}
        
            {/* 
        {
            images.map((img, index)=>(
                <div  class=" duration-200 ease-linear" data-carousel-item>
                <img src={img} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
            </div>
            ))
        }
     */}