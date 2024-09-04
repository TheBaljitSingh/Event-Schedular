import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { add } from 'date-fns';

export default function Events() {
  
  const [events, setEvents] = useState([
    {name:"Seminar", Date:"12-02-2025",description:"the event will be updated soon" },
    {name:"Seminar", Date:"12-02-2025",description:"the event will be updated soon" }]);

  const handleSearch = () =>{

  }
  const handleSort = () =>{

  } 
  const prevPage = () =>{

  }
  const nextPage = () =>{

  }
  

  
  


  useEffect(() => {
    // Fetch events from your backend API
    axios.get('/api/events')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the events!", error);
      });
  }, []);

  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">All Events</h1>
    <div className="p-6 bg-gray-800 border border-gray-700 rounded-lg ">
  <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
    <input
      type="text"
      placeholder="Search events..."
      className="p-3 bg-gray-600 border border-gray-500 rounded mb-4 md:mb-0"
      onChange={handleSearch}
    />
    <select onChange={handleSort} className="p-3 bg-gray-600 border border-gray-500 rounded">
      <option value="date">Sort by Date</option>
      <option value="name">Sort by Name</option>
    </select>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {events.map(event => (
      <div key={event.id} className="bg-gray-600 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
        <p className="text-gray-600">{event.date}</p>
        <p className="text-gray-800 mt-2">{event.description}</p>
      </div>
    ))}
  </div>
  <div className="flex justify-between mt-6">
    <button className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={prevPage}>Previous</button>
    <button className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={nextPage}>Next</button>
  </div>
</div>

  </div>
  
  );
};


