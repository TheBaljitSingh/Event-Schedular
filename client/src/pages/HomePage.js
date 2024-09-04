import React from 'react';
import sportsImg from "../assets/images/basketball.svg"
import culturalImg from "../assets/images/diwali-celebration.svg"
import singerImg from "../assets/images/singer.svg"
import aiImg from "../assets/images/ai.jpg"
import concertImg from "../assets/images/concert.jpg"
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import bgImg from "../assets/images/bg.webp"
function HomePage() {


  const events = [
    {
      id: 0,
      title: "Cultural Event",
      imgUrl: culturalImg,
      desc: "Our College Cultural Event"
    },
    {
      id: 1,
      title: "Concert - Live show",
      imgUrl: concertImg,
      desc: "Seamless integration of the Ola map services"
    },
    {
      id: 2,
      title: "IPL Seminar",
      imgUrl: "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2fcontent%2f20230329082501_ipllogo.jpg&h=570&w=855&q=100&v=20170226&c=1",
      desc: "Generate Seminal for Students Lorem ipsum dolor sit."
    },
    {
      id: 3,
      title: "Pu rising Star Event",
      imgUrl: singerImg,
      desc: "Render you SuperStar become the PU's SuperStar."
    },
    {
      id: 4,
      title: "Technical Event",
      imgUrl:aiImg,
      desc: "Our College Tech Expo is Gujarat's largest tech fest"
    },
    {
      id:5,
      title:"Sports Event",
      imgUrl:sportsImg,
      desc:"Explore our Various Sports organised for inter college"
    },
    {
      id:5,
      title:"Sports Event",
      imgUrl:sportsImg,
      desc:"Explore our Various Sports organised for inter college"
    }
  ];
  


  return (
    <div>
      <Header/>
    <div className="bg-opacity-50">
    <div  style={{ backgroundImage: `url(${bgImg})` }} className={` bg-contain flex justify-center items-center min-w-full h-screen md:min-h-[750px] min-h-screen pb-20 pt-45 mx-auto p-4 `} >
      <div className='mx-auto w-full px-4 md:px-8'>
        <div className='flex flex-col'>
          <div className='flex justify-center items-center gap-8 flex-col'>
            <h2 className='text-center font-semibold  md:w-[55%] w-max-[90%] text-black md:text-6xl text-4xl  md:leading-64 leading-48'>
              Online event scheduling & end-to-end execution.
            </h2>
            {/* Find Events that fits for you. */}
            <p className='text-center text-slate-500 max-w-[500px] text-lg font-normal '>Only event, Only for you</p>
            <p class="text-center text-slate-500 max-w-[500px] md:pt-16 pt-4 md:text-xl text-lg font-normal">We believe in empowering students. Built for our college community, ready to shine on the multiple stage.</p>
            
          </div>
          <div className='flex justify-center items-center gap-6 flex-col mt-8'>
            <div className=' flex justify-center items-center bottom-4 '>
              <div className='flex  md:gap-5 gap-2 mt-12'>
                <a className='flex items-center bg-black hover:brightness-125 md:px-7.5 px-3 h-14 py-2.5 text-white rounded-md hover:border hover:shadow-xl duration-300 ease-in-out' href="/start">
                  Get Started! <svg className="ml-2" width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.944 8.256c-1.047-.954-2.12-2.445-2.12-4.533h1.511c0 1.529.82 2.657 1.737 3.445a7.524 7.524 0 0 0 1.777 1.127l.025.01.003.002h.001l1.622.644-1.55.82-.006.003-.027.015a9.312 9.312 0 0 0-.536.329c-.353.234-.822.576-1.288 1.007-.963.891-1.758 2.021-1.758 3.264H9.825c0-1.957 1.22-3.493 2.274-4.468l.07-.065H.5v-1.6h11.444Z" fill="#fff"></path></svg>
                </a>
                <a className='flex bg-slate-700 hover:brightness-125 md:px-7.5 px-3 h-14 py-2.5 text-white items-center rounded-md hover:border hover:shadow-xl duration-300 ease-in-out' href="/start">
                  Know More! <svg className="ml-2" width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.944 8.256c-1.047-.954-2.12-2.445-2.12-4.533h1.511c0 1.529.82 2.657 1.737 3.445a7.524 7.524 0 0 0 1.777 1.127l.025.01.003.002h.001l1.622.644-1.55.82-.006.003-.027.015a9.312 9.312 0 0 0-.536.329c-.353.234-.822.576-1.288 1.007-.963.891-1.758 2.021-1.758 3.264H9.825c0-1.957 1.22-3.493 2.274-4.468l.07-.065H.5v-1.6h11.444Z" fill="#fff"></path></svg>
                </a>
              </div>
            </div>
          </div>

          
        </div>
        
      </div>
      
    </div>
    <div className='h-auto w-screen '>
    <div class="px-12 py-8">
    <h2 class="text-3xl font-bold mb-8 text-lime-900">Our events</h2>
    <p class="mb-12">Here's what we’re organising</p>
    

    <div className="mt-8 grid grid-cols-1 gap-11 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5 ">
      {events.map(event => (
        <div
          key={event.id}
          className="animate_top z-10 bg-lime-200 bg-opacity-15 rounded-lg border border-black/opacity-10 backdrop-blur-[8.70px] p-7.5 xl:p-12.5 p-10"
          style={{ opacity: 1, transform: 'none' }}
        >
          <div className="relative flex h-16 w-16 items-center justify-center">
            <img src={event.imgUrl} alt="iOS Icon" width={100} height={100} />
          </div>
          <h3 className="mb-5 mt-7.5 text-2xl font-medium font-gentona text-lime-900 xl:text-itemtitle">
            {event.title}
          </h3>
          <p className="text-neutral-400 text-lg leading-snug">{event.desc}</p>
        </div>
      ))}
    </div>
  </div>
      
    </div>
    <Footer/>

    </div>
    </div>

  
    
  );
}

export default HomePage;
