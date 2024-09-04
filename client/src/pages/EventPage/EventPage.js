import React from 'react'
import TopBar from './TopBar';
import EventGrid from './EventGrid';
import Header from '../../components/shared/Header';

export default function EventPage() {

  const events = [
    {
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC42LzEwICA3MTIuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352941-pzsgmunagx-portrait.jpg',
      title: 'Sagar Wali Qawwali - Live In Surat',
      date: 'Sun, 8 Sep',
      venue: 'Pandit Dindayal Upadhyay Indoor Stadium: Surat',
      category: 'Concerts',
    },
    {
      image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICAyNi4xSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00359267-uzkqteebqx-portrait.jpg',
      title: 'An Evening with Krishna - Gujarat',
      date: 'Sun, 25 Aug',
      venue: 'Sir Sayajirao Nagar Gruh: Vadodara',
      category: 'Concerts',
    },
    // Add more events as needed
  ];

  return (
    <div>
      <Header/>

        <div className="container mx-auto px-4 mt-4">
          
      <TopBar />


      <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
      <EventGrid events={events} />
    </div>
        

    </div>
    
  )
}
